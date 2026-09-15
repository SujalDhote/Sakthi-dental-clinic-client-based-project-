# 🦷 Sakthi Dental Clinic — Client Website

A modern, responsive, and SEO-friendly dental clinic website developed for **Sakthi Dental Clinic** to provide patients with a professional online experience and easy access to information about treatments, facilities, doctors, and contact details.

🔗 **Live Website:** https://sakthi-dental-clinic-web.netlify.app/

> **Client Project:** Sakthi Dental Clinic

---

## ✨ Features

* 🏠 Modern and responsive homepage
* 👨‍⚕️ Doctor and team information
* 🦷 Dedicated treatments and services section
* 🏥 Clinic facilities and amenities showcase
* ⭐ Patient testimonials section
* ❓ FAQ section
* 📞 Contact and appointment enquiry form
* 🔒 Privacy Policy page
* 🔎 SEO-friendly metadata
* 🤖 `robots.txt` and XML sitemap
* 📱 Fully responsive design for mobile, tablet, and desktop
* ✨ Smooth animations and modern UI interactions
* ⚡ Optimized Next.js performance

---

## 🛠️ Tech Stack

### Frontend

* **Next.js 14**
* **React 18**
* **TypeScript**
* **Tailwind CSS**

### UI & Components

* **shadcn/ui**
* Custom reusable React components
* **Framer Motion** for animations

### Forms & Validation

* **React Hook Form**
* **Zod**
* Email handling integration

### Deployment

* **Netlify**

---

## 📁 Project Structure

```text
sakthi-dental-website/
│
├── app/
│   ├── about/
│   ├── contact/
│   ├── faq/
│   ├── privacy-policy/
│   ├── treatments/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── forms/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── data/
│   ├── facilities.ts
│   ├── faqs.ts
│   ├── team.ts
│   ├── testimonials.ts
│   └── treatments.ts
│
├── lib/
│   └── utils.ts
│
├── public/
│   └── images/
│
├── types/
│   └── index.ts
│
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SujalDhote/Sakthi-dental-clinic-client-based-project-.git
```

### 2. Navigate into the project

```bash
cd Sakthi-dental-clinic-client-based-project-
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🔐 Environment Variables

If the project requires environment variables, create a `.env.local` file in the root directory.

Example:

```env
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint
```

**Never commit real API keys, credentials, or private environment variables to GitHub.**

---

## 🏗️ Build for Production

Run:

```bash
npm run build
```

To start the production server locally:

```bash
npm start
```

---

## 🌐 Deployment

The project is designed for deployment using **Netlify**.

Recommended deployment flow:

```text
GitHub Repository
       ↓
     Netlify
       ↓
Production Website
```

Every new push to the connected GitHub repository can trigger a new deployment.

---

## 🎨 Design

The website focuses on:

* Clean and professional healthcare aesthetics
* Strong visual hierarchy
* Accessible navigation
* Responsive layouts
* Clear treatment information
* Patient-focused calls to action
* Smooth animations without compromising usability

---

## 📌 Project Purpose

This project was developed as a **real-world client website** for Sakthi Dental Clinic, with emphasis on:

* Professional web design
* Responsive frontend development
* Component-based architecture
* SEO optimization
* Form validation
* Performance
* Production deployment

---

## 👨‍💻 Developer

**Sujal Dhote**

* GitHub: https://github.com/SujalDhote
* LinkedIn: https://www.linkedin.com/in/sujal-dhote-2b6342351

---

## 📄 License

This project was developed for **Sakthi Dental Clinic** as a client project.

The website content, branding, images, logos, and other client-provided assets belong to their respective owners.

© Sakthi Dental Clinic. All rights reserved.



























This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
