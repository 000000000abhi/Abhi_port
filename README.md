# Developer X - Portfolio Website

A modern portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS. This project is inspired by the Developer X Webflow Template and includes all the main pages and components.

## Features

- **15+ Pages**: Home, About, Contact, Hire Me, Portfolio, Portfolio Single, Blog, Blog Post, and 404
- **3 Header Variants**: Different header styles for customization
- **3 Footer Variants**: Multiple footer designs to choose from
- **3 Notification Bars**: Promotional and announcement bars
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety throughout the project
- **Modern Stack**: Next.js 14 with App Router

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── hire-me/           # Hire Me page
│   ├── portfolio/         # Portfolio pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── headers/          # Header components (3 variants)
│   ├── footers/          # Footer components (3 variants)
│   └── notifications/    # Notification bar components (3 variants)
└── public/               # Static assets
```

## Pages

- **Home** (`/`) - Landing page with hero section and features
- **About** (`/about`) - About page with skills and expertise
- **Contact** (`/contact`) - Contact form page
- **Hire Me** (`/hire-me`) - Services and hiring information
- **Portfolio** (`/portfolio`) - Portfolio grid showcase
- **Portfolio Single** (`/portfolio/[id]`) - Individual project details
- **Blog** (`/blog`) - Blog listing page
- **Blog Post** (`/blog/[id]`) - Individual blog post page
- **404** - Custom not found page

## Customization

You can easily customize the website by:

1. **Switching Components**: Change which header/footer/notification bar is used in each page
2. **Styling**: Modify Tailwind classes or update `globals.css`
3. **Content**: Update text and images in each page component
4. **Colors**: Adjust color scheme in `tailwind.config.ts`

## Build for Production

```bash
npm run build
npm start
```

## License

This project is open source and available for personal use.
