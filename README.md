# 🍸 Velvel Pour — GSAP Cocktail Showcase

A visually rich, animation-driven landing page built to showcase hands-on GSAP (GreenSock Animation Platform) skills using Next.js and Tailwind CSS. Features scroll-triggered animations, pinned sections, split-text reveals, and a masked scroll-scrub video hero — all built as a frontend learning project.

---

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots / Demo](#screenshots--demo)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Limitations](#limitations)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## About the Project

This project was built as a hands-on exercise to learn and demonstrate **GSAP animation techniques** in a modern **Next.js** application. It's a single-page cocktail bar ("Velvel Pour") landing site with no backend or database — the goal is purely to showcase scroll-based motion design, split-text effects, pinned sections, and interactive UI carousels for a portfolio audience.

**Target audience:** Recruiters and developers reviewing frontend/animation skills.

---

## Live Demo

https://cocktail-showcase.onrender.com

No login or setup required — it's a public static showcase site.

---

## Features

- 🎬 **Animated Hero Section** — split-text character/word reveal animation on load, with a scroll-scrubbed video that plays frame-by-frame as the user scrolls, and parallax leaf decorations
- 🍹 **Cocktails & Mocktails Menu** — parallax-animated list section showcasing popular drinks with pricing and details
- 🎨 **About Section** — animated image grid and split-text heading reveal on scroll
- 🖼️ **"The Art" Section** — pinned scroll animation with a mask-reveal effect transitioning into a highlighted content block
- 📜 **Interactive Recipe Carousel** — tabbed + arrow-based navigation between cocktails, animating in the recipe title, image, and description on each change
- 📞 **Contact/Footer Section** — animated split-text reveal for address, contact info, hours, and social links

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) 16 (App Router), React 19 |
| **Styling** | Tailwind CSS 4, DaisyUI |
| **UI Components** | [HeroUI](https://heroui.com/) |
| **Animation** | [GSAP](https://gsap.com/) + `@gsap/react` (ScrollTrigger, SplitText) |
| **Linting** | ESLint 9 (`eslint-config-next`) |
| **Deployment** | Vercel |

> This is a **frontend-only** project — there is no backend, database, or authentication layer.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm/bun)

### Installation

```bash
git clone https://github.com/nahin113/cocktail_showcase.git
cd cocktail_showcase
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

---

## Environment Variables

**None required.** This project makes no external API calls and connects to no database — it's a static, client-rendered animation showcase.

---

## Project Structure

```
cocktail_showcase/
├── constants/
│   └── index.js          # Static content: nav links, drink lists, contact info
├── src/
│   ├── app/
│   │   ├── layout.js      # Root layout, fonts, GSAP plugin registration
│   │   ├── page.js         # Composes all landing sections
│   │   ├── about/           # Placeholder route
│   │   └── dashboard/        # Placeholder route (not yet built out)
│   └── components/
│       ├── Hero.jsx        # Animated hero + scroll-scrubbed video
│       ├── Cocktails.jsx    # Cocktail/mocktail list with parallax
│       ├── About.jsx         # About section with animated image grid
│       ├── Art.jsx            # Pinned mask-reveal scroll section
│       ├── Menu.jsx            # Interactive recipe carousel
│       ├── Contact.jsx          # Footer/contact section
│       └── Navbar.jsx            # Sticky nav with scroll-based background
```

---

## Limitations

- Frontend-only — no backend, database, or persistent data
- `about` and `dashboard` routes exist as placeholder pages and aren't fully built out
- No automated test suite yet

---

## Future Improvements

- Continue exploring and implementing more advanced GSAP animation techniques as learning progresses
- Flesh out the `about` and `dashboard` routes with real content
- Add automated tests

---

## Author

**Nahin Ahmed**

- Portfolio: [nahinahmed.vercel.app](https://nahinahmed.vercel.app/)
- LinkedIn: [linkedin.com/in/nahinahmed](https://www.linkedin.com/in/nahinahmed)
- GitHub: [github.com/nahin113](https://github.com/nahin113/)

---

⭐ If you found this project interesting, consider starring the repo!
