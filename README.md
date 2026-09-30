# Peace Champion — local site

Two things live in `C:\Dev\PeaceChampion`, and they are **not** interchangeable:

|                                     | what it is                                                                    | deploy it?                      |
| ----------------------------------- | ----------------------------------------------------------------------------- | ------------------------------- |
| `index.html`                        | the rebuilt homepage, **generated** by Eleventy from `src/`                    | **yes** — this is the good page |
| `about`, `donate`, `films`,         | the Framer static export (6 pages)                                            | **no** — see `AGENTS.md` §0     |
| `privacy-policy`, `volunteer`, `404` |                                                                           |                                 |

`AGENTS.md` is the authoritative account of why. The short version: the export does
not hydrate, reports a `scrollWidth` of 2750px at a 1440px viewport, and lays out
correctly on only 1 of the 7 pages it was measured across. The export's own
homepage (`index.html`) was deleted in commit `fa89e88`; this is what replaced it.


## The build

`index.html` is **generated**. Edit `src/`, never the HTML file.

```powershell
npm install        # once
npm run build      # writes index.html into the repo root, Prettier-formatted
npm run format     # prettier --check — fails if the committed file isn't formatted
npm run watch      # rebuild + serve on http://localhost:8080
```

The build reads templates from `src/`, writes **one** file (`index.html`) back into
the repo root, then runs Prettier over that output so the committed file is a
formatted fixed point. It creates no cache directories and deletes nothing. The
*templates* are never formatted — `.prettierignore` excludes `src/` because Prettier
has poor Nunjucks support and would mangle the tags.

```
src/
  _data/site.json      sprite ids, brand, external URLs
  _data/nav.js         every link defined once; nav order + footer groups by id
  _includes/base.njk   doctype/head/body, block for page content
  _includes/header.njk <header> plus the burger-menu script
  _includes/footer.njk <footer>
  pages/index.njk     the <main> children
```

Run `npm run build` and commit the regenerated `index.html` alongside your `src/`
changes, otherwise the two drift apart and the diff is misleading. `npm run watch`
serves *unformatted* output — harmless, since formatting is invisible in a browser.

## Full tree

```
index.html         GENERATED - the homepage
index.html          (Framer export - superseded, do not deploy)
about.html          (Framer export)
donate.html         (Framer export - includes Givebutter widget)
films.html          (Framer export)
privacy-policy.html (Framer export)
volunteer.html      (Framer export)
404.html            (Framer export - not-found page)
eleventy.config.mjs (Eleventy config: input src/, output ".")
package.json        (the build; only @11ty/eleventy, a dev dependency)
src/                (templates - see above)
assets/
  css/              (site.css for the export, site-new.css for the homepage)
  js/               (site.js loaded in <head>, site-end.js at the tail of <body>)
  svg/              (sprite.svg with the shared <svg> defs, uri_1..3.svg artwork)
  images/           (33 images, incl. favicon + og-image)
  fonts/            (41 font faces, all @font-face blocks point here)
  scripts/          (35 ES-module .mjs files, incl. lazy chunks)
  video/            (2 MP4 files)
  animations/       (3 .lottie animations)
  data/             (2 Framer search-index JSON)
```

> **Important:** the pages use ES-module JavaScript (`import("./x.mjs")`) and
> relative asset paths. You must serve them over **HTTP** — opening
> `index.html` directly (or the VS Code "Simple Browser" / `file://`) blocks the
> modules and the page will not render (missing images, unstyled layout).

## Run locally

Build first — otherwise you are looking at whatever `index.html` happened to be
committed, not your edits:

```powershell
npm install     # once
npm run watch   # rebuilds on save and serves http://localhost:8080
```

`npm run watch` is the only option below that rebuilds automatically. If you use one
of the static servers, re-run `npm run build` after every edit to `src/`.

### 1. VS Code — Live Server (if you edit in VS Code)

**Live Server is already installed** (extension `ritwickdey.LiveServer`). Just:

1. Run `npm run build`.
2. Open this folder in VS Code.
3. Right-click `index.html`, choose **"Open with Live Server"**.

   A browser tab opens at <http://127.0.0.1:5500> with live auto-reload on save.

### 2. Python (no installs)

```powershell
npm run build
python -m http.server 8000
```

Open <http://localhost:8000/index.html>. Run it from this folder so the relative
`assets/...` paths resolve.

### 3. Node.js

```powershell
npx --yes serve .
```

then open the printed URL.

## Hosting/deploying

There **is** a build step now: `npm install && npm run build`. The deploy unit is
still the repo root — the build writes `index.html` back into it rather than into a
`_site/` folder, precisely so the root keeps being the thing you upload.

**Exclude these from the upload.** They are build inputs and config, not site content:

```
node_modules/  src/  package.json  package-lock.json  eleventy.config.mjs
.prettierrc  .prettierignore
```

- Any static host works: Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, nginx.
- `404.html` is picked up as the custom not-found page by most hosts when named
  `404.html`. **Note:** that is currently still the Framer export, not a rebuilt page.
- Relative URLs (`about.html`, `assets/...`) mean the site works served from any
  sub-path or domain. This is why the build outputs in place instead of to a
  subdirectory — moving the output would break every one of those paths.
- If your host runs a build command, use `npm run build` and set the publish
  directory to the repo root. Be aware that a bare `package.json` at the root can
  make Vercel and Netlify start a build step where there previously was none.

**What you can actually deploy today:** `index.html` plus `assets/`. The other six
pages are still the Framer export and are not safe to publish — see `AGENTS.md` §0 for
the measurements. This is now the real homepage: the export's own `index.html` was
deleted in commit `fa89e88`, and the six remaining export pages reach it through
`href="./"`, so their home links resolve here without modification.

## What was done in the migration

- Downloaded the 7 pages and all 118 assets (images, fonts, scripts, video,
  animations, search-index JSON) that Framer's CDN served.
- Rewrote every `framerusercontent.com` / `fonts.gstatic.com` /
  `fonts.googleapis.com` / `lottie.host` URL inside HTML and the `.mjs`/`json`
  bundles to relative `assets/...` paths.
- Rewrote internal nav links to real files (`./about` → `about.html`,
  `./` → `index.html`).
- Removed Framer artifacts: the editorbar script, the `events.framer.com`
  analytics script, both `fonts.gstatic.com` preconnect links, and the
  "Made in Framer" / "Published ..." comments.
- Verified locally over HTTP: all 7 pages, scripts, fonts, images, video, and
  animations respond 200.

> The inline-CSS / inline-SVG / inline-script cleanup described in
> `docs/html-analysis.md` §7 happened after this list was written and is documented
> there, not here.

## Notes

- **External resources** (need internet): donation widget (Givebutter),
  privacy-policy embed (Termly), and external links (Eventbrite, Vimeo/Gumlet,
  Instagram/LinkedIn, app.globalpeaceyes.org, App Store).
- Everything else — images, fonts, video, animations, scripts, search indexes —
  is local under `assets/` and works offline.
- `assets/_asset_map.txt` is a reference (Framer CDN URL ⇄ local file) used
  during migration; it is not needed at runtime.
- The Framer font-loader still contains two `startsWith` guard strings
  (`fonts.gstatic.com/...`, `framerusercontent.com/...`) that are only used to
  classify font sources; remapped fonts load via the inline `@font-face`
  CSS, so they are harmless.
