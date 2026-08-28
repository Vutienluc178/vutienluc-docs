# Vutienluc Docs

Convert Word, PowerPoint, Excel, PDF, EPUB, RTF, ODT and CSV files into clean
GitHub-Flavored Markdown — entirely in your browser. Nothing is uploaded to a
server; conversion runs locally via WebAssembly.

**Live demo:** _(add your Vercel URL here after deploying)_

## Supported formats

`docx` &middot; `pptx` &middot; `xlsx` &middot; `odt` &middot; `rtf` &middot;
`epub` &middot; `pdf` (text-based) &middot; `csv`

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Deploying

This is a static site built with [Vite](https://vitejs.dev). It deploys to
[Vercel](https://vercel.com) with zero configuration: import the repo on
Vercel, and it auto-detects the Vite framework preset (build command
`npm run build`, output directory `dist`).

## Credits

The document conversion itself is powered by
[anydoc](https://github.com/firecrawl/anydoc), an open-source Rust library by
[Firecrawl](https://firecrawl.dev), used here via its WebAssembly bindings
([`@firecrawl/anydoc-wasm`](https://www.npmjs.com/package/@firecrawl/anydoc-wasm),
MIT licensed). This repository is an independent, rebranded front end built
on top of that library — all credit for the conversion engine goes to the
anydoc project.

## License

MIT — see [LICENSE](LICENSE).
