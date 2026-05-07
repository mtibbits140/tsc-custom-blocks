# TSC Custom Blocks

A small plugin that provides reusable Gutenberg blocks for TSC WordPress builds.

## Blocks Included

- Search Modal (`tsc/search-modal`)
- Search Form (`tsc/search-form`)

## Search Modal

Adds a search form presented in a modal, triggered by a header icon. The trigger can live inside sticky or absolutely positioned headers and the modal still displays over the page with an overlay.

Features:

- Retains current search terms between opens.
- Customizable modal background color.
- Customizable search button background and text colors.
- Upload a custom SVG file to replace the default search icon.
- Optional trigger text beside the icon.
- Front-end behavior opens the modal, focuses the input, and provides a dedicated close button.

## Search Form

A straightforward inline search form block for content areas, sidebars, or footers.

Features:

- Standard search field with submit button.
- Submits to the site search endpoint.
- Retains the user's current search terms.
- Customizable input/placeholder text color.
- Customizable submit button background and text colors.

## Development

In the plugin directory:

```bash
npm install
npm run start
```

Use `npm run start` while developing blocks. Use `npm run build` before deploying or committing built assets.

## Deployment

For production sites, only runtime assets are required:

- `index.php`
- `includes/**`
- `build/blocks/**`

Do not ship development-only files unless the site is intentionally being used for block development:

- `src/**`
- `node_modules/**`
- source maps
- dev configs

## Notes

- The old custom accordion blocks were removed because accordion/details behavior is now available in WordPress core.
- This plugin should contain reusable block functionality, not one-off project experiments.
- Project-specific blocks should be promoted into this plugin only after they prove reusable across builds.

## Requirements

- WordPress 6.x
- Node 18+ for development
