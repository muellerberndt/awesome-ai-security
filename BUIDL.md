# Awesome AI Security

A visual, interactive roadmap and awesome list for AI Security.

## Features

- **Two Learning Tracks**: Hacking AI (attacks & defenses) and Hacking with AI (AI for security).
- **Curated Resources**: Articles, papers, tools, and frameworks.
- **Visual Design**: Sleek, dark-mode aesthetic with animations and glassmorphism.

## Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Go to `http://localhost:5173`

## Deploy to GitHub Pages

This site is served from `https://floatingpragma.io/awesome-ai-security` via the
`/Users/muellerberndt/Projects/muellerberndt.github.io` repo.

1. Build the app:
   ```bash
   npm run build
   ```
2. Copy the build output to the GitHub Pages repo:
   ```bash
   mkdir -p /Users/muellerberndt/Projects/muellerberndt.github.io/awesome-ai-security
   cp -R dist/* /Users/muellerberndt/Projects/muellerberndt.github.io/awesome-ai-security/
   ```
3. Commit and push in `/Users/muellerberndt/Projects/muellerberndt.github.io`.

## Awesome List

Generate the README awesome list from the graph data:
```bash
npm run awesome
```

## Data Pipeline

1. Edit resources in `src/data/raw_resources.json`
2. Run `node scripts/map_data.cjs` to generate `nodes.json`
3. Run `node scripts/layout_pyramid.cjs` to generate `graphData.ts`
4. Run `npm run awesome` to generate `README.md`
