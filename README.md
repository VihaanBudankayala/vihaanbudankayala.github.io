# Vihaan Budankayala — Portfolio site

Plain HTML/CSS/JS, no build step. This repo is set up for GitHub Pages; the
same files are also deployed on Netlify.

## Editing content
- **Email, artworks and mediums:** at the top of `main.js` (`CONFIG`, `MEDIUMS`, `WORKS`).
  - To add a piece, put `name.jpg` (about 1800px on the long edge) and `name-sm.jpg` (about 720px) in `assets/art/`, then add an entry to `WORKS`.
- **Bio, quote, awards and the Medical Illustration progress log:** in `index.html` (the About, Awards & Exhibitions, and Medical Illustration sections).
  - To add an award, copy one `<li class="award-row">`.
  - To add a milestone to the Medical Illustration log, copy one `<li class="process-item">`.
- **Colors and fonts:** the tokens at the top of `styles.css`.

## Placeholders to replace before launch
1. The artist quote in the About section (marked `PLACEHOLDER QUOTE`)
2. Review the bio and the artwork descriptions

## Hosting (free)
- **Netlify Drop:** drag this folder onto https://app.netlify.com/drop
- **GitHub Pages:** already enabled for this repo (see `_config.yml` / Settings → Pages)
