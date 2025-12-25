import fs from 'fs';

const graphPath = 'src/data/graphData.ts';
const readmePath = 'README.md';

const readGraphData = () => {
  const content = fs.readFileSync(graphPath, 'utf8');
  const startIndex = content.indexOf('export const graphData');
  if (startIndex === -1) {
    throw new Error('graphData export not found');
  }
  const arrayStart = content.indexOf('[', startIndex);
  const arrayEnd = content.lastIndexOf('];');
  if (arrayStart === -1 || arrayEnd === -1) {
    throw new Error('graphData array bounds not found');
  }
  const arrayText = content.slice(arrayStart, arrayEnd + 1);
  return Function(`"use strict"; return ${arrayText}`)();
};

const sanitize = (text) => {
  if (!text) return '';
  return text.replace(/\s+/g, ' ').trim();
};

const buildAwesomeList = (graphData) => {
  const lines = [];
  lines.push('# Awesome AI Security');
  lines.push('');
  lines.push('A curated, annotated list of resources for AI security.');
  lines.push('');
  lines.push('**[View the interactive roadmap](https://floatingpragma.io/awesome-ai-security)**');
  lines.push('');

  const seen = new Set();

  graphData.forEach((node) => {
    // Sort by rating (highest first), then filter duplicates
    const nodeItems = [...node.resources]
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .filter((resource) => {
        const key = resource.url || resource.title;
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
      });

    if (nodeItems.length === 0) {
      return;
    }

    lines.push(`### ${node.title}`);
    lines.push(sanitize(node.description));
    lines.push('');

    nodeItems.forEach((resource) => {
      const desc = sanitize(resource.description);
      lines.push(`- [${resource.title}](${resource.url}) - ${desc}`);
    });

    lines.push('');
  });

  return lines.join('\n').trim();
};

const updateReadme = (generated) => {
  const footer = [
    '',
    '---',
    '',
    '© [muellerberndt](https://twitter.com/muellerberndt) · [GitHub](https://github.com/muellerberndt)',
    ''
  ].join('\n');
  fs.writeFileSync(readmePath, `${generated}${footer}`);
};

const graphData = readGraphData();
const awesomeList = buildAwesomeList(graphData);
updateReadme(awesomeList);
console.log('Awesome list written to README.md');
