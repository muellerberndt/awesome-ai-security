
const fs = require('fs');

const raw = JSON.parse(fs.readFileSync('src/data/raw_resources.json', 'utf8'));
const schema = JSON.parse(fs.readFileSync('src/data/journey_schema.json', 'utf8'));

const usedUrls = new Set();
const usedTitles = new Set();

const normalizeList = (list = []) => list.map((item) => item.toLowerCase());
const textFor = (item) => `${item.title || ''} ${item.description || ''} ${item.category || ''}`.toLowerCase();

const inferType = (item) => {
  const url = (item.url || '').toLowerCase();
  const title = (item.title || '').toLowerCase();
  const category = item.category || '';

  if (category === 'Books') return 'Book';
  if (category === 'Courses') return 'Course';
  if (category === 'Tools' || category === 'Programming Languages') return 'Tool';
  if (url.includes('youtube') || url.includes('youtu.be') || url.includes('vimeo')) return 'Video';
  if (url.endsWith('.pdf') || url.includes('arxiv') || title.includes('paper') || title.includes('whitepaper') || category === 'Papers') return 'Paper';
  if (category === 'Reports') return 'Paper';
  if (category === 'Podcasts') return 'Video';
  if (category === 'Communities' || category === 'Events') return 'Article';
  if (category === 'Benchmarks' || category === 'Standards') return 'Article';
  if (category === 'Newsletters' || category === 'Awesome Lists') return 'Article';
  return 'Article';
};

const matchesNode = (item, node) => {
  const match = node.match || {};
  const categories = normalizeList(match.categories);
  const keywords = normalizeList(match.keywords);
  const excludeKeywords = normalizeList(match.excludeKeywords);
  const excludeCategories = normalizeList(match.excludeCategories);

  const text = textFor(item);
  const itemCategory = (item.category || '').toLowerCase();

  if (excludeCategories.includes(itemCategory)) return false;
  if (excludeKeywords.some((kw) => text.includes(kw))) return false;

  const categoryMatch = categories.length > 0 && categories.includes(itemCategory);
  const keywordMatch = keywords.length > 0 && keywords.some((kw) => text.includes(kw));

  let matchMode = match.matchMode;
  if (!matchMode) {
    if (categories.length > 0 && keywords.length > 0) matchMode = 'category-or-keyword';
    else if (categories.length > 0) matchMode = 'category';
    else if (keywords.length > 0) matchMode = 'keyword';
    else matchMode = 'none';
  }

  switch (matchMode) {
    case 'category':
      return categoryMatch;
    case 'keyword':
      return keywordMatch;
    case 'category-and-keyword':
      return categoryMatch && keywordMatch;
    case 'category-or-keyword':
      return categoryMatch || keywordMatch;
    default:
      return false;
  }
};

const toResource = (item) => ({
  title: item.title,
  url: item.url,
  type: inferType(item),
  rating: 8,
  description: item.description && item.description.trim().length > 0
    ? item.description.trim()
    : 'No description available.'
});

const pickResources = (node) => {
  const match = node.match || {};
  const limit = match.limit || 10;
  const candidates = raw.filter((item) => matchesNode(item, node));

  const selected = [];
  for (const item of candidates) {
    const urlKey = item.url ? item.url.toLowerCase() : null;
    const titleKey = (item.title || '').toLowerCase();
    if ((urlKey && usedUrls.has(urlKey)) || (titleKey && usedTitles.has(titleKey))) {
      continue;
    }
    selected.push(toResource(item));
    if (urlKey) usedUrls.add(urlKey);
    if (titleKey) usedTitles.add(titleKey);
    if (selected.length >= limit) break;
  }
  return selected;
};

const nodes = schema.nodes.map((node) => {
  const resources = pickResources(node);
  if (resources.length === 0) {
    console.warn(`Warning: ${node.id} has no resources.`);
  }

  return {
    id: node.id,
    title: node.title,
    category: node.category,
    description: node.description,
    lane: node.lane,
    tier: node.tier,
    dependencies: node.dependencies || [],
    resources
  };
});

fs.writeFileSync('src/data/nodes.json', JSON.stringify(nodes, null, 2));
console.log(`Wrote ${nodes.length} nodes to src/data/nodes.json`);
nodes.forEach((node) => {
  console.log(`${node.id}: ${node.resources.length} resources`);
});
