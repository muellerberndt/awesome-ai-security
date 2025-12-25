
const fs = require('fs');

const data = fs.readFileSync('src/data/nodes.json', 'utf8');
const originalNodes = JSON.parse(data);

const LANE_X = {
  core: 0,
  hacking_ai: -1.8,
  hacking_with_ai: 1.8,
  sideLeft: -2.6,
  sideRight: 2.6
};

const nodeIds = new Set(originalNodes.map((node) => node.id));
originalNodes.forEach((node) => {
  (node.dependencies || []).forEach((dep) => {
    if (!nodeIds.has(dep)) {
      console.warn(`Missing dependency: ${node.id} -> ${dep}`);
    }
  });
});

const newNodes = originalNodes.map((node) => {
  const lane = node.lane || 'core';
  const baseX = typeof lane === 'number' ? lane : (LANE_X[lane] ?? 0);
  const tier = typeof node.tier === 'number' ? node.tier : 0;
  const branchScale = (lane === 'hacking_ai' || lane === 'hacking_with_ai') ? (1 + Math.max(0, tier - 3) * 0.08) : 1;
  const x = baseX * branchScale;
  const y = tier;

  return {
    id: node.id,
    title: node.title,
    category: node.category,
    description: node.description,
    resources: node.resources || [],
    x,
    y,
    dependencies: node.dependencies || []
  };
});

const fileContent = `
export interface Resource {
  title: string;
  author?: string;
  url: string;
  type: 'Article' | 'Video' | 'Book' | 'Course' | 'Tool' | 'Paper';
  rating: number; // 1-10
  description: string;
  featured?: boolean;
}

export interface NodeData {
  id: string;
  title: string;
  category: string;
  description: string;
  resources: Resource[];
  x: number;
  y: number;
  dependencies: string[];
}

export const graphData: NodeData[] = ${JSON.stringify(newNodes, null, 2)};
`;

fs.writeFileSync('src/data/graphData.ts', fileContent);
console.log('Generated graphData.ts from nodes.json');
