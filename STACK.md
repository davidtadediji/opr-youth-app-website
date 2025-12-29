# Stack Used (What this website is built with)

## Core framework / runtime
- **[Framework]** Next.js **14.2.15** using the **App Router** ([app/](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/app:0:0-0:0) directory).
- **[UI library]** React **18.3.1** (`react`, `react-dom`).
- **[Language]** TypeScript **5.6.3** (strict mode enabled in [tsconfig.json](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/tsconfig.json:0:0-0:0)).
- **[Runtime]** Node.js (not pinned in the repo files I’ve seen; use **Node 18+** as a safe baseline for Next 14).

## Styling / frontend build pipeline
- **[CSS framework]** Tailwind CSS **3.4.14** ([tailwind.config.ts](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/tailwind.config.ts:0:0-0:0))
  - Custom theme colors: `primary`, `accent`, `secondary`
  - Custom animations/keyframes (fade/slide/float/shimmer etc.)
- **[CSS processing]** PostCSS ([postcss.config.mjs](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/postcss.config.mjs:0:0-0:0))
  - Plugins: `tailwindcss`, `autoprefixer`
- **[Autoprefixing]** `autoprefixer` **10.x**

## Linting / code quality
- **[Linting]** ESLint **8.x**
- **[Next.js lint rules]** `eslint-config-next` **14.2.15**
- **[Scripts]**
  - `npm run lint` → `next lint`

## Backend (within Next.js)
- **[API routes]** Next.js Route Handlers under `app/api/*`
  - Example: [app/api/waitlist/route.ts](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/app/api/waitlist/route.ts:0:0-0:0) exposes a [POST](cci:1://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/app/api/waitlist/route.ts:6:0-49:1) endpoint

## Data / external services
- **[Database / backend-as-a-service]** Supabase via `@supabase/supabase-js` **^2.48.0**
  - Used in [app/api/waitlist/route.ts](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/app/api/waitlist/route.ts:0:0-0:0)
  - Writes into table: `waitlist_signups` with `{ email }`

## Environment variables / configuration
- **[Env vars required]** (from [.env.example](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/.env.example:0:0-0:0))
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **[How they’re used]**
  - The waitlist API route reads them at runtime and fails gracefully if missing.

## Repo structure (authoritative layout)
- **[App Router entrypoints]**
  - `app/layout.tsx` (root layout + metadata)
  - `app/page.tsx` (landing page)
  - `app/globals.css` (global styles)
- **[UI sections]** [components/](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/components:0:0-0:0) contains the landing-page sections (Hero, Pricing, FAQ, Footer, etc.)
- **[Static assets]** [public/](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/public:0:0-0:0)

## Package management
- **[Package manager]** npm (repo includes [package-lock.json](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/package-lock.json:0:0-0:0))
- **[Install]** `npm install`

---

# “Entire Stack” Documentation (copy/paste)

## 1) Requirements
- Node.js: **18+** recommended
- npm: comes with Node

## 2) Install & run
- Install dependencies:
  - `npm install`
- Run dev server:
  - `npm run dev`
  - Open `http://localhost:3000`
- Production build:
  - `npm run build`
  - `npm run start`

## 3) Key scripts ([package.json](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/package.json:0:0-0:0))
- `dev`: runs Next.js dev server
- `build`: builds the production bundle
- `start`: starts the production server
- `lint`: runs Next.js ESLint config

## 4) Frontend architecture
- Next.js App Router renders the page from `app/page.tsx`.
- Page is composed of section components from [components/](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/components:0:0-0:0).
- Styling is Tailwind-first:
  - Config in [tailwind.config.ts](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/tailwind.config.ts:0:0-0:0)
  - PostCSS pipeline in [postcss.config.mjs](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/postcss.config.mjs:0:0-0:0)

## 5) Backend/API architecture
- Server endpoints live under `app/api/*`.
- `POST /api/waitlist`
  - Validates email (basic `@` check)
  - Creates a Supabase client with `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - Inserts into `waitlist_signups`

## 6) External services
- **Supabase**
  - Purpose: store waitlist signups
  - Data dependency: table `waitlist_signups` must exist
  - Secrets/config are provided via environment variables

## 7) TypeScript configuration highlights ([tsconfig.json](cci:7://file:///Users/davidtadediji/Documents/Workspace/Pigby-landing-page/tsconfig.json:0:0-0:0))
- `strict: true`
- `noEmit: true` (Next handles builds; TS is for typechecking)
- Path alias:
  - `@/*` → `./*`

## 8) Linting
- `next lint` via `npm run lint`

## 9) Deployment (high level)
- This is a standard Next.js 14 app and can be deployed to:
  - Vercel (most common for Next.js)
  - Netlify (supported; check if you need specific adapter/settings depending on usage)
- Ensure environment variables are set in the hosting provider.

---

