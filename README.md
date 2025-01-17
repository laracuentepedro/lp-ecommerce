# LP Ecommerce

A modern e-commerce platform built with Next.js App Router, TypeScript, Prisma, and Tailwind CSS. This project demonstrates a simple storefront that allows users to view products, and serves as a template to eventually introduce more advanced e-commerce features.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Development and Setup](#development-and-setup)
- [Current Functionalities](#current-functionalities)
- [Future Developments](#future-developments)
- [License](#license)

---

## Features

1. **Next.js (App Router)**
   - Uses the latest Next.js folder-based routing in the “app” directory (layout.tsx, page.tsx, etc.).
   - Built-in server actions for direct backend endpoints in Next.js.

2. **TypeScript**
   - Type-safe environment throughout both frontend and backend.

3. **Prisma + Neon PostgreSQL**
   - Prisma ORM for type-safe database interactions and schema migrations.
   - Neon offers a serverless PostgreSQL solution that eases scaling.

4. **Responsive UI with Tailwind CSS**
   - Utility-first CSS framework for rapid design and responsiveness.
   - Easily toggle between light/dark themes with next-themes.

5. **Product Management**
   - Products include images, prices, rating, and stock details.
   - Dynamic product pages, referencing each product by slug (/product/[slug]).

6. **Reusable Components**
   - Components structured in /components/ui, /components/shared.
   - Organized approach for buttons, badges, modals, cards, and more.

7. **Light/Dark Mode**
   - next-themes for user preference of dark or light theme.

8. **Error Handling**
   - Custom 404 page (not-found.tsx) for missing content.
   - Loading fallback (loading.tsx) for data fetching.

---

## Tech Stack

- [Next.js 15+](https://nextjs.org)
- [React 19+](https://react.dev)
- [TypeScript 5+](https://typescriptlang.org)
- [Prisma 6+](https://prisma.io/) (with [Neon PostgreSQL](https://neon.tech/))
- [Tailwind CSS 3+](https://tailwindcss.com/)

---

## Project Structure

Below is a condensed view of your project’s directories and key files:

```
lp-ecommerce
├── app/
│   ├── (root)/
│   │   ├── layout.tsx        # Root layout, including header and footer
│   │   ├── page.tsx          # Home page, shows newest products
│   │   └── product/[slug]/   # Dynamic product details pages
│   ├── layout.tsx            # Global site layout (metadata, theme provider)
│   ├── loading.tsx           # Fallback component while data fetch loads
│   └── not-found.tsx         # Global 404
├── components/
│   ├── shared/               # Reusable shared UI components
│   ├── ui/                   # Lower-level UI building blocks (Button, Badge...)
├── db/
│   ├── prisma.ts             # Setup Prisma + Neon pool
│   ├── sample-data.ts        # Example products
│   └── seed.ts               # Database seeding script
├── lib/
│   ├── actions/              # Server actions (CRUD access via Prisma)
│   ├── constants/            # Constants (APP_NAME, LATEST_PRODUCTS_LIMIT, etc.)
│   ├── utils.ts              # Utility functions (format numbers, etc.)
│   └── validator.ts          # zod-based validation (product schema)
├── prisma/
│   ├── migrations/           # Prisma migration files
│   └── schema.prisma         # Database schema
├── public/images/            # Product images & assets
├── tailwind.config.ts        # Tailwind CSS configuration
├── README.md                 # Existing readme
└── package.json              # Project scripts and dependencies
```

---

## Development and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/laracuentepedro/lp-ecommerce.git
   cd lp-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Variables**
   Create an .env file in your project root and add the following:
   - DATABASE_URL="<YOUR_NEON_DB_URL>"
   Optionally configure:
   - NEXT_PUBLIC_APP_NAME="LP Ecommerce"
   - NEXT_PUBLIC_APP_DESCRIPTION="Modern e-commerce with Next.js"
   - NEXT_PUBLIC_SERVER_URL="http://localhost:3000"

4. **Database Migrations**
   ```bash
   npx prisma migrate dev
   ```
   This sets up your local schema changes with the connected database.

5. **Seeding the Database**
   ```bash
   npx tsx db/seed.ts
   ```
   Populates your database with sample product entries.

6. **Running the Development Server**
   ```bash
   npm run dev
   ```
   Navigate to [http://localhost:3000](http://localhost:3000) to explore the app.

---

## Current Functionalities

- A homepage listing the newest products, dynamically fetched from the database.
- Product detail pages with images, descriptions, brand, rating, and stock impressions.
- Light and dark theme toggling.
- Simple navigation header with placeholders for cart and sign-in.
- Basic project structure with standard Next.js App Router and Prisma integration.

---

## Future Developments

The plan includes expanding the functionality to a complete e-commerce platform:

1. **User Authentication**
   - Secure user accounts (sign-up, login, profile editing).
   - Integration with third-party auth services.

2. **Shopping Cart**
   - Add to cart, remove or update items, persistent cart session.

3. **Payments**
   - Stripe and PayPal integration for secure online transactions.
   - Capture payment events and redirect flow to order confirmation.

4. **Order History**
   - Store and display a logged-in user’s past orders.

5. **User Profiles**
   - Manage shipping addresses, payment preferences, personal data.

6. **Admin Dashboard**
   - Product creation and management (CRUD).
   - Inventory tracking, analytics, and order controls.

7. **Email Order Receipts**
   - Automated order confirmation upon successful checkout.
   - Invoice details included in email body.

8. **Product Ratings & Reviews**
   - Users can rate purchased products and leave text feedback.
   - Display star ratings and user comments.

---

## License

This project is available under an open-source license. Feel free to adapt, reuse, or distribute under the terms specified in the [LICENSE](LICENSE) file (if present).

> © 2025 LP Ecommerce - All Rights Reserved