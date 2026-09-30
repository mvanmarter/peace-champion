import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));

const INPUT = "src";
const OUTPUT = ".";

/**
 * `dir.output` is the repository root on purpose. The generated pages have to
 * land next to the Framer export they replace, because:
 *
 *   - every asset URL in the markup is file-relative from the root
 *     (`assets/css/index2.css`, `assets/svg/sprite.svg#...`), so moving the
 *     output into a subdirectory would break all of them or force `../`;
 *   - the repo root is the deploy unit (README), not a build directory;
 *   - `cmp.js`, the live-parity harness, hardcodes
 *     `http://127.0.0.1:8137/index2.html`.
 *
 * This is safe because `dir.input` is `src/`, so the only files Eleventy can
 * write are the ones a template in `src/pages/` explicitly names via its
 * `permalink`. Eleventy 3.1.6 has no output-cleaning step (no `emptyDir`,
 * `rm` or `unlink` anywhere in node_modules/@11ty/eleventy), so pointing the
 * output at the root cannot delete the 20 MB of assets beside it.
 */
export default function (eleventyConfig) {
  // Nunjucks escapes by default, which would turn the typography in the copy
  // ("yes", the em dashes) into entities and mangle the sprite fragment
  // identifiers. Every value in src/_data is local and hand-written, so there
  // is nothing to escape.
  eleventyConfig.setNunjucksEnvironmentOptions({ autoescape: false });

  return {
    dir: {
      input: INPUT,
      output: OUTPUT,
      includes: "_includes",
      data: "_data",
    },
    // Only Nunjucks. Not listing "html" is deliberate: a plain .html file would
    // be run through htmlTemplateEngine, and the default (liquid) would
    // rewrite the markup. Pages are .njk and are emitted verbatim.
    templateFormats: ["njk"],
    htmlTemplateEngine: false,
    markdownTemplateEngine: false,
  };
}

// Startup log so a misconfigured `dir` is obvious in CI rather than silent.
console.log(`[11ty] input=${path.join(ROOT, INPUT)}  output=${path.join(ROOT, OUTPUT)}`);
