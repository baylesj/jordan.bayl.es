# jordan.bayl.es

My personal site. It's built with [Astro](https://astro.build) and styled with the shared
[bayl.es-style](https://github.com/baylesj/bayl.es-style). Every push to `main` deploys to GitHub
Pages, and a weekly rebuild keeps build-time data fresh.

## Editing text

- **Sections:** one file each in `src/content/sections/`, in plain Markdown. `order` in the header sets
  the position and `title` sets the label. `.mdx` files can also place components, such as
  `<Heatmap />` and `<SoundCloud />`.
- **Header:** the name, tagline, links and opening line are in `src/data/site.ts`.

Editing on github.com works: open a file, click the pencil, commit to `main`, and the site updates in
a minute or two.

## Working locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run format   # Prettier, ESLint --fix, Stylelint --fix
npm run check    # astro check (types) + lint; CI runs this before deploying
```

## Layout

```
src/
  content/sections/   page sections (Markdown/MDX)
  content.config.ts   section schema
  data/site.ts        header and metadata
  components/         Header, Section, Heatmap, SoundCloud
  layouts/Base.astro  <head>, fonts, shared CSS, footer
  styles/site.css     this site's own styles, on top of bayl.es-style
public/               copied as-is (CNAME, favicon)
```

Fonts are self-hosted through Fontsource, so there are no Google Fonts requests. To update the shared
styles, bump the `bayl.es-style` tag in `package.json` and run `npm install`.
