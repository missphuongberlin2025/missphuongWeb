# Restaurant Landing Page für GitHub Pages

A bilingual single-page site for Miss Phuong Restaurant with a hero section, story copy, image gallery, visit information, and contact details—complete with a language toggle for English and German.

## Implementierungsplan (Deutsch)

1. Richte Kopfbereich und Navigation mit Markenname, Sprachumschalter und Sprungmarken zu den Hauptabschnitten ein.
2. Gestalte eine Hero-Sektion mit hinterlegtem Bild, Claim, Call-to-Action und responsiver Typografie.
3. Präsentiere den gelieferten Menütext im Story-Abschnitt und ergänze Kernaussagen als hervorgehobene Karten.
4. Baue eine responsive Galerie, die alle acht bereitgestellten Bilder aus `assets/img` nutzt.
5. Ergänze Besuchs- und Kontaktbereiche mit Öffnungszeiten, Adresse, Social Links und Call-to-Action; sichere die zweisprachige Ausgabe über `data-i18n-key` und Local-Storage-gestützten Sprachwechsel.

## Setup & Deployment (English)

- **Prerequisites**
  - A GitHub repository configured for GitHub Pages (either via `main`/`master` branch root or `/docs` folder).

- **Local preview**
  1. Clone this repository and open it in your editor.
  2. Use any static server to preview (`npx serve`, `python -m http.server`, VS Code Live Server, etc.).

- **Publishing to GitHub Pages**
  1. Commit the files to your repository.
  2. Push to the branch configured in your repository settings for GitHub Pages.
  3. Wait for Pages to build; visit the generated URL to confirm the site loads.

## Customisation Guide

  - Adjust English and German copy in `assets/js/main.js` by editing the `translations` object. Each `data-i18n-key` in `index.html` matches a key in the object.
- **Hero logo**: Replace `assets/img/logo.png` with your own transparent PNG/SVG to update the hero centerpiece.

## Files

- `index.html` – Static markup with `data-i18n-key` hooks for translations.
- `assets/css/styles.css` – Styling for the page layout.
- `assets/js/main.js` – Language toggle logic and translation data.
- `assets/img/1.jpg` … `8.jpg` – Gallery imagery shown on the landing page.
