# Contribution Guide

Thanks for contributing!

## Add new links
- All new resources must be added to `src/data/raw_resources.json`.
- Then run the data pipeline to regenerate files.
- Do not edit the awesome list directly in `README.md`.

## Regenerate the awesome list
```bash
node scripts/map_data.cjs
node scripts/layout_pyramid.cjs
npm run awesome
```

This updates the `README.md` from the graph data.
