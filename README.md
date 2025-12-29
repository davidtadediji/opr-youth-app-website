# OPR Youth App - Landing Page

A modern, sleek landing page for the **OPR Youth App** - an OPR Youth Initiative empowering Rodriguan youth through digital discipline.

## Features

- **Modern Design** - Gradient backgrounds, glassmorphism, smooth animations
- **Responsive** - Works on all devices
- **Mutually Exclusive CTAs** - Shows either "Join Waitlist" or "Download App" based on app release status
- **Waitlist Integration** - Supabase-powered email collection
- **SEO Optimized** - Proper meta tags and Open Graph support

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Supabase** (for waitlist signups)
- **Lucide React** (icons)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
- `NEXT_PUBLIC_APP_RELEASED` - Set to `true` when app is released (shows Download button instead of Waitlist)
- `NEXT_PUBLIC_APP_STORE_URL` - iOS App Store link
- `NEXT_PUBLIC_PLAY_STORE_URL` - Google Play Store link

### 3. Set up Supabase (for waitlist)

Create a table in your Supabase project:

```sql
CREATE TABLE waitlist_signups (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Switching Between Waitlist and Download

The landing page shows **mutually exclusive** CTAs:

- **When `NEXT_PUBLIC_APP_RELEASED=false`** (default): Shows email input + "Join Waitlist" button
- **When `NEXT_PUBLIC_APP_RELEASED=true`**: Shows "Download App" button that opens the appropriate app store

## Deployment

This is a standard Next.js app that can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- Any platform supporting Node.js

Make sure to set the environment variables in your hosting provider.

## License

© Organisation du Peuple Rodriguais. All rights reserved.
