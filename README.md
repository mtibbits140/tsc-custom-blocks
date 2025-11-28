# TSC Custom Blocks

A small plugin that provides Gutenberg blocks for adding search UI to your site.

## Blocks included

- Search Modal (`tsc/search-modal`)
- Search Form (`tsc/search-form`)
- Accordion (`tsc/accordion` and `tsc/accordion-item`)

## Search Modal

Adds a search form presented in a modal, triggered by a header icon. The trigger can live inside sticky or absolutely positioned headers and the modal still displays over the page with an overlay.

Features
- Retains current search terms between opens.
- Customizable in the block sidebar:
  - Search icon color (icon uses the Button Background color)
  - Modal background color
  - Search form button background and text colors
  - Upload a custom SVG file to replace the default search icon used to trigger the modal
  - Optional trigger text to display to the right of the icon; this text uses the Button Background color
- Frontend behavior:
  - Clicking the trigger opens the modal and focuses the input
  - A dedicated close button appears inside the modal overlay
  - Works reliably even when the trigger is inside a sticky header

Notes
- If no custom icon file is provided, the block falls back to a default search icon that inherits the Button Background color.
- The trigger text is optional; if left blank, no text is rendered.

## Search Form

A straightforward, inline search form block you can place in content areas, sidebars, or footers.

Features
- Standard search field with submit button that submits to the site’s search endpoint.
- Retains the user’s current search terms.
- Customizable in the block sidebar:
  - Input/placeholder text color
  - Submit button background color
  - Submit button text color

Use cases
- For always-visible search (e.g., in a sidebar or footer), use this block.
- For a compact trigger-in-header + overlay experience, use the Search Modal block.

## Accordion

Add an accordion block to WordPress. Handy for FAQs and other interactive content.

Features
- Allows setting the level of heading tag to use in the title (H2–H6).
- Can specify the heading colour if it needs to be different from the theme's default heading colour.
- Can specify the icon color for the "open" and "close" icons.
- Accordion content can be any Gutenberg content blocks including paragraphs, lists, images, etc. Colours and styles can be set on these "child" blocks as you would anywhere in Gutenberg.
- Controls for heading and content background colors and borders (independent backgrounds for title and panel).

## Installation (development)

1) In the plugin directory, install dependencies and build:
   - `npm install`
   - `npm run build`

2) Activate the “TSC Custom Blocks” plugin in WordPress.

## Deployment (production)

For production sites, only the runtime assets are required:
- Keep: `includes/**`, `build/blocks/**`, and your main plugin PHP file(s)
- Omit: `src/**`, `node_modules/**`, dev configs, and any source maps

This repository is set up to commit built assets (Option A), so you can clone and activate directly. If you prefer source-only with release artifacts, ignore `build/` and generate a dist zip during your release process.

## Requirements
- WordPress 6.x (Block Editor)
- Node 18+ for building (dev only)

## Support
Open an issue or PR with details about the block, WordPress version, and reproduction steps.
