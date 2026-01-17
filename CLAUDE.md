# Unlayer Website

## Overview
Landing page for Unlayer - tokenized securities platform enabling SMEs and enterprises to raise capital.

## Tech Stack
- Next.js 14 (App Router)
- Bun (package manager & runtime)
- Tailwind CSS
- TypeScript

## Commands
- `bun install` - Install dependencies
- `bun dev` - Start dev server (localhost:3000)
- `bun build` - Production build
- `bun start` - Start production server

## Brand Colors
- Primary: #C5D3D6 (blue-gray)
- Accent: #E5F57A (lime)
- Text: #1A1A1A (dark)
- Teal: #5B9A9A

## Project Structure
```
app/
  layout.tsx    # Root layout with SEO metadata
  page.tsx      # Landing page composition
  globals.css   # Tailwind + custom styles
components/
  Header.tsx    # Sticky header with CTA
  Hero.tsx      # Main hero section
  Philosophy.tsx # Surfing metaphor section
  ValueProposition.tsx # 3 value cards
  Contact.tsx   # Contact CTA section
  Footer.tsx    # Minimal footer
public/
  assets/       # Brand graphics and icons
```

## Deployment
Optimized for Vercel deployment. Push to main branch triggers automatic deploy.

## Contact
partners@unlayer.xyz
