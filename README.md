# ALX Listing App

The **ALX Listing App** is the foundation of an Airbnb clone built with **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**.  
This project scaffolds the initial structure, ensuring a maintainable, scalable, and production-ready codebase for building a property listing page.

---

## 📌 Project Goals

- Scaffold a **Next.js application** with TypeScript, ESLint, and TailwindCSS.  
- Establish a clean **folder structure** for scalability and readability.  
- Create **reusable components** (e.g., Card, Button) for consistent UI development.  
- Define **TypeScript interfaces** to enforce type safety across the app.  
- Organize project **assets** for easy access and maintainability.  
- Provide clear documentation for setup and usage.  

---

## 📂 Project Structure

alx-listing-app/
├── components/
│ └── common/
│ ├── Button.tsx # Reusable button component
│ └── Card.tsx # Reusable card component
│
├── constants/
│ └── index.ts # Central place for constants (API URLs, UI text, etc.)
│
├── interfaces/
│ └── index.ts # TypeScript interfaces (CardProps, ButtonProps, etc.)
│
├── pages/
│ ├── api/
│ │ └── hello.ts
│ └── index.tsx # Main landing page
│
├── public/
│ └── assets/ # Images and SVGs from Figma
│
├── styles/
│ └── globals.css # Tailwind base, components, and utilities only
│
├── .eslintrc.json # ESLint configuration
├── tailwind.config.js # TailwindCSS setup
├── tsconfig.json # TypeScript configuration
├── package.json # Dependencies and scripts
├── README.md # Project documentation
└── next.config.js # Next.js configuration


---

## ⚙️ Setup & Run Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/alx-listing-app.git
cd alx-listing-app
### 2️⃣ Install Dependencies
```bash
npm install

npm run dev

4️⃣ Open the app

Visit: http://localhost:3000

📘 Tech Stack

Next.js – React framework for server-side rendering and routing.

TypeScript – Static typing for safer, maintainable code.

TailwindCSS – Utility-first CSS framework for fast, responsive styling.

ESLint – Linting tool to enforce clean and consistent code.