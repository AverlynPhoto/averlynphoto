# Averlyn Photo

A premium, responsive photography website for Averlyn Photo, a Miami-based lifestyle and portrait photography studio. The experience combines an editorial magazine sensibility with warm coastal restraint, large-format imagery, and thoughtful storytelling.

## Features

- Seven custom pages: Home, Portfolio, Experience, About, Journal, Contact, and Book
- Filterable masonry portfolio with image lightbox
- Responsive sticky navigation and mobile menu
- Client journey, FAQ accordion, testimonials, journal, and Instagram preview layouts
- Netlify-powered inquiry forms with honeypot protection and inline status feedback
- Calendly-ready booking placeholder
- Semantic HTML, accessible focus states, reduced-motion support, lazy-loaded imagery, and SEO metadata
- Centralized placeholder image and content data for straightforward replacement

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Vite and Tailwind CSS tooling
- Custom CSS design system
- Lucide icons
- Netlify Forms

## Run Locally

```bash
pnpm install
pnpm dev
```

The development server runs on port 3000. To emulate Netlify features locally, use:

```bash
netlify dev --port 8889
```

## Content Updates

Replace image URLs and gallery entries in `src/data/site.ts`. Update business links, email addresses, and the Calendly placeholder before launch. The static fields in `public/__forms.html` must remain synchronized with `src/components/InquiryForm.tsx`.
