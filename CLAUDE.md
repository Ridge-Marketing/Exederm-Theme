# CLAUDE.md

Guidance for working in this repository.

## What this is

A **Shopify theme** (Liquid) for the **Exederm** eczema/sensitive-skin skincare brand
(`exederm.myshopify.com`). It is built on Shopify's legacy **Timber v2.1.0** starter
framework and has been heavily customized over multiple years. There is **no build
tooling** (no `package.json`, no bundler) — Sass is compiled on Shopify's servers and
assets are deployed as-is.

## Deploying / running

- This is edited and pushed via the **Shopify CLI** (`shopify theme dev` / `shopify theme push`).
- `.shopify/` is fully gitignored (contains `metafields.json` and CLI state); do not rely on it in commits.
- There is no local server, test suite, or lint step in the repo. Validation happens in the Shopify admin / theme editor.

## Directory layout (standard Shopify structure)

- `layout/` — `theme.liquid` (global wrapper, loads all JS/CSS) and `password.liquid`.
- `templates/` — one file per page/product/collection. **Mixed formats**: `.json` templates
  (Online Store 2.0, reference `sections/`) and older `.liquid` templates. ~33 JSON, ~32 Liquid.
- `sections/` — reusable, schema-driven blocks (30 of ~40 have a `{% schema %}`).
- `snippets/` — partials pulled in via `{% include %}`.
- `assets/` — CSS/JS/fonts/images. `.scss.liquid` files compile to `.css` server-side.
- `config/` — `settings_schema.json` (theme editor options) and `settings_data.json` (saved values).
- `locales/` — translation JSON (`en.default.json` + de/es/fr/pt).

## Key conventions — match existing code

- **Liquid uses `{% include %}`, not `{% render %}`.** The codebase is ~71 includes to 1 render.
  Includes share the parent scope (variables leak in/out) — keep to that pattern for consistency
  unless deliberately modernizing a file.
- **jQuery-based.** jQuery 1.x is loaded globally; most interactivity is inline `<script>` in
  `theme.liquid` or in `*.js`/`*.js.liquid` assets. `var $ = jQuery.noConflict()` is used in places.
- **Styling is layered and legacy-heavy:**
  - `assets/exederm.scss.liquid` → `exederm.scss.css` — the main Timber-derived stylesheet.
  - `assets/compiled.css` and `assets/extra-responsive-columns.css` — additional layers.
  - **Tailwind utility classes (`tw-` prefix)** appear in newer snippets/sections
    (e.g. `site-footer`, `site-drawers`, `skin-page`, `top-rated`). Tailwind is prefixed to avoid
    clashing with the legacy CSS. Newer work leans on `tw-` utilities; older work uses the SCSS classes.
- Cart is an **AJAX cart** (Timber + Handlebars template in `snippets/ajax-cart-template.liquid`,
  driven by `assets/ajax-cart.js.liquid`), opened via `.openCart` / drawer toggles.

## Third-party integrations (wired in `theme.liquid` and snippets)

Yotpo (reviews), UserWay + PayPal SkipTo (accessibility), Font Awesome (kit + CDN),
Fancybox, Swiper / cycle2 / tiny-slider (sliders), Handlebars, Google Fonts, Modernizr,
"Quick Announcement Bar". Assume external scripts before removing anything that looks unused.

## Legacy / do-not-touch files

The repo contains many **abandoned backups and experiments**. Do not edit, "clean up", or delete
these unless explicitly asked — they may still be referenced by a live page or kept intentionally:
`*_old.liquid`, `*-old.liquid`, `old-*.liquid`, `*backup*`, `*do_not_delete*`, `*-test*`, `*testing*`,
`product-grid-item-021121backup.liquid`, `oldIE-js.liquid`, etc. When changing behavior, find the
**live** file (referenced by a current template/section) rather than assuming from the filename.

## Branches

- `2025` — current working branch (default for new work).
- `main` — primary/prod branch (PRs usually target this).
- Also present: `staging`, `master` (legacy).

## Working style for this repo

- Prefer editing the specific `section`/`snippet` a page renders over touching global `theme.liquid`.
- Preserve the existing (jQuery + `include` + prefixed-Tailwind/SCSS) idioms in a given file rather
  than mixing paradigms mid-file.
- When adding a customizable option, wire it through `sections/*` `{% schema %}` or `config/settings_schema.json`
  so it stays editable in the Shopify theme editor.
