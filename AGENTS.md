# Averlyn Photo Project Guide

## Overview

Averlyn Photo is a luxury editorial photography website for a Miami-based lifestyle and portrait photographer. It is built with TanStack Start, React, TypeScript, and custom responsive CSS, and is deployed on Netlify.

## Architecture

- `src/routes/` contains file-based pages for Home, Portfolio, Experience, About, Journal, Contact, and Book.
- `src/components/SiteLayout.tsx` provides the global navigation, mobile menu, footer, page hero, and shared editorial sections.
- `src/components/InquiryForm.tsx` contains the reusable AJAX inquiry form used on the Contact and Book pages.
- `src/data/site.ts` centralizes placeholder image URLs, portfolio entries, and journal content so photography can be replaced easily.
- `src/styles.css` contains the complete visual system, responsive layouts, animation, and component states.
- `public/__forms.html` is the static Netlify Forms registration skeleton required by the SSR framework.

## Conventions

- Use PascalCase for React components and camelCase for local variables and functions.
- Keep route-specific content in its route file and reusable interface patterns in `src/components/`.
- Use the color, spacing, type, and layout tokens defined at the top of `src/styles.css` rather than introducing disconnected values.
- Preserve semantic HTML, descriptive image alternatives, keyboard focus states, and reduced-motion compatibility.
- Add replacement photography through `src/data/site.ts`; continue using cropped image containers so new assets remain responsive.
- Submit all inquiry forms to `/__forms.html` with URL-encoded AJAX and keep form fields synchronized with `public/__forms.html`.

## Design Decisions

The site uses editorial asymmetry, restrained color, oversized Cormorant Garamond typography, and generous negative space. Terracotta is reserved for warmth and emphasis, while ivory, sand, sage, and charcoal carry the primary brand expression. Motion is limited to opacity and transforms for smooth performance.

## Local Development

Install dependencies with `pnpm install`, then run `pnpm dev`. Netlify feature emulation is available with `netlify dev --port 8889`.
