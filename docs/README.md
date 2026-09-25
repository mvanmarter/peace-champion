# Peace Champion — local site

Static export of the 7-site pages from <https://globalpeaceyes.org/> moved off
Framer into `C:\Dev\PeaceChampion`. The full tree is:

```
index.html          (homepage)
about.html          (About)
donate.html         (Donate — includes Givebutter widget)
films.html          (Films)
privacy-policy.html (Privacy Policy)
volunteer.html      (Volunteer)
404.html            (not-found page)
assets/
  css/              (site.css — the shared stylesheet every page links)
  js/               (site.js loaded in <head>, site-end.js at the tail of <body>)
  svg/              (sprite.svg with the shared <svg> defs, uri_1..3.svg artwork)
  images/           (33 images, incl. favicon + og-image)
  fonts/            (41 font faces, all @font-face blocks point here)
  scripts/          (35 ES-module .mjs files, incl. lazy chunks)
  video/            (2 MP4 files)
  animations/       (3 .lottie animations)
  data/             (2 Framer search-index JSON)
```

It is ready to deploy to any static host as-is.

> **Important:** the pages use ES-module JavaScript (`import("./x.mjs")`) and
> relative asset paths. You must serve them over **HTTP** — opening
> `index.html` directly (or the VS Code "Simple Browser" / `file://`) blocks the
> modules and the page will not render (missing images, unstyled layout).

## Run locally (pick one)

### 1. VS Code — Live Server (recommended if you edit in VS Code)

**Live Server is already installed** (extension `ritwickdey.LiveServer`). Just:

1. Open this folder in VS Code.
2. Right-click `index.html`, choose **"Open with Live Server"**.

   A browser tab opens at <http://127.0.0.1:5500> with live auto-reload on save.

### 2. Python (no installs)

```powershell
python -m http.server 8000
```

Open <http://localhost:8000> (or <http://localhost:8000/index.html>). Run it
from this folder so the relative `assets/...` paths resolve.

### 3. Node.js (no install saved to the project)

```powershell
npx --yes serve .
```

or

```powershell
npx --yes http-server . -p 8080
```

then open the printed URL (e.g. <http://localhost:3000>).

## Hosting/deploying

No build step, no package.json, no bundler — the folder is the deploy unit.

- Copy this folder (or the files at its root) to any static host: Netlify,
  Vercel, GitHub Pages, S3/CloudFront, nginx, etc.
- The `404.html` file is picked up as the custom not-found page by most hosts
  (Netlify/Vercel/GitHub Pages do this natively when named `404.html`).
- Relative URLs (e.g. `about.html`, `assets/...`) mean the site works served
  from any sub-path or domain.

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
> `docs/HTML_ANALYSIS.md` §7 happened after this list was written and is documented
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
