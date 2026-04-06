# 🎧 Viraj Telecom - Demo Business Website

![Viraj Telecom Preview](https://virajtelecom.netlify.app/images/hero-headphones.jpg)

> A modern, responsive demo website created to showcase a complete digital storefront for an electronics repair and audio products business.

**[Live Demo](https://virajtelecom.netlify.app/) | [Report Bug](https://github.com/Akshayjg2204/viraj-telecom/issues) | [Request Feature](https://github.com/Akshayjg2204/viraj-telecom/issues)**

## ✨ Overview

This project is a high-performance portfolio piece designed to demonstrate modern web development practices. It simulates a fully functional business website for "Viraj Telecom", providing a clear user journey from exploring electronics repair services to browsing brand-new audio products.

### Key Features
* **Modern UI/UX:** Built with a clean, component-driven design system featuring interactive carousels, accordions, and hover cards.
* **Services & Products Showcase:** Detailed sections highlighting repair services and a dynamic product catalog.
* **Interactive Elements:** Features a smooth scrolling marquee banner and a structured timeline for the business process.
* **Dark/Light Mode:** Includes a seamless theme toggler for user preference using a custom theme provider.
* **Fully Responsive:** Optimized UI for flawless browsing across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **UI Components:** shadcn/ui
* **Package Manager:** pnpm
* **Hosting/Deployment:** Netlify / Vercel

## 🚀 Getting Started

To get a local copy of this project up and running, follow these steps.

### Prerequisites

Make sure you have Node.js installed, along with pnpm.

    npm install -g pnpm

### Installation

1. **Clone the repository:**
    git clone https://github.com/Akshayjg2204/viraj-telecom.git

2. **Navigate to the project directory:**
    cd viraj-telecom

3. **Install dependencies:**
    pnpm install

4. **Start the development server:**
    pnpm dev

Open http://localhost:3000 with your browser to see the result.

## 📂 Project Structure

    ├── app/                     # Next.js App Router (pages & layouts)
    │   ├── globals.css          # Global styling
    │   ├── layout.tsx           # Root layout
    │   └── page.tsx             # Main landing page
    ├── components/              # React components
    │   ├── ui/                  # shadcn/ui component library
    │   ├── about-section.tsx    # About the business section
    │   ├── contact-section.tsx  # Contact info & routing
    │   ├── header.tsx           # Site header
    │   ├── hero-section.tsx     # Hero section component
    │   ├── marquee-banner.tsx   # Scrolling banner component
    │   ├── process-section.tsx  # How it works timeline
    │   ├── products-section.tsx # Product catalog component
    │   ├── services-section.tsx # Services overview component
    │   └── theme-provider.tsx   # Dark/Light mode provider
    ├── hooks/                   # Custom React hooks (e.g., use-mobile)
    ├── lib/                     # Utility functions (e.g., utils.ts)
    ├── public/                  # Static assets
    │   └── images/              # Hero images, service banners, icons
    ├── styles/                  # Additional global styles
    ├── .env.development.local   # Environment variables
    ├── components.json          # shadcn/ui configuration
    ├── next.config.mjs          # Next.js configuration
    ├── package.json             # Project metadata and dependencies
    └── tsconfig.json            # TypeScript configuration
