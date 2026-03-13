# Rati Madhikarmi — Portfolio Website

A world-class portfolio website built with Next.js 14, featuring dark luxury editorial design, cinematic animations, and premium interactions.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Custom CSS
- **Animation:** Framer Motion
- **Fonts:** Cormorant Garamond · DM Sans · Bebas Neue (via next/font)
- **Icons:** Lucide React
- **Effects:** Canvas particle system, canvas-confetti (Easter egg)
- **Cursor:** Custom magnetic dual-layer cursor (desktop)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Photo Replacement Guide

### Hero Photo
1. Place your professional portrait photo at: `/public/images/profile.jpg`
2. **Recommended dimensions:** 600×750px (portrait orientation)
3. The photo will automatically receive the asymmetric clip-path treatment
4. Until a real photo is provided, a gold gradient placeholder with "RM" initials is displayed

## Easter Egg

Press the Konami code: **↑ ↑ ↓ ↓ ← → ← → B A** to trigger gold confetti.

## Deployment

Optimized for Vercel:
```bash
npm run build
npx vercel
```

## Contact Form Email Setup (Resend)

The contact form sends real emails via the `/api/contact` endpoint.

1. Copy env template:
```bash
cp .env.example .env.local
```
2. Set values in `.env.local`:
- `RESEND_API_KEY` = your Resend API key
- `CONTACT_TO_EMAIL` = where inquiries should arrive
- `CONTACT_FROM_EMAIL` = verified sender in Resend (for testing, `onboarding@resend.dev`)
3. For Vercel, add the same variables in:
	**Project Settings → Environment Variables**

Without `RESEND_API_KEY`, form submission will fail with a clear error message.

## Accessibility

- Respects `prefers-reduced-motion` — all animations disabled
- Custom cursor hidden on touch devices
- Particles disabled on mobile for performance
- Semantic HTML throughout

© 2025 Rati Madhikarmi. All rights reserved.
