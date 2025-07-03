
# 🛠️ Full-Stack Next.js Project

## 📌 Project Overview

This is a full-stack web application built with **Next.js**, a powerful React-based framework that enables seamless development of both frontend and backend features in a single codebase.

The project supports:
- **Server-Side Rendering (SSR)**
- **Static Site Generation (SSG)**
- **API Routes**
- **Scalable folder structure**
- **.env environment configuration**

---

## ▶️ Getting Started

### 1. Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

Then install the dependencies:

```bash
npm install
# or
yarn
```

---

### 2. Environment Variables

Create a `.env.local` file in the root directory and add the necessary environment variables.

Example:

```env
MONGO=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
```

> ⚠️ Replace with your actual MongoDB connection string.

---

### 3. Run the Development Server

Start the app in development mode:

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧰 Technologies Used

- **Next.js** – React framework with SSR, SSG, and API support
- **React** – For building user interfaces
- **Tailwind CSS** – Utility-first CSS framework for styling
- **MongoDB + Mongoose** – NoSQL database and ODM for data modeling
- **Lucide-react** – Icon library for modern UIs
- **dotenv** – For loading environment variables from `.env.local`
- **next/image** – Optimized image rendering with built-in lazy loading

---

## 📝 Notes

- This project is **full-stack**, meaning both frontend and backend logic are included within the same app.
- API endpoints can be found under the `/app/api` or `/pages/api` directory depending on the project structure.
- You can build and run the app in production using:

```bash
npm run build
npm start
```

Make sure all required environment variables are correctly configured before deployment.

---

## 📂 Example Folder Structure

```
/app
  /[productId]        # Dynamic product page
  /api                # Backend API routes
  /components         # Reusable UI components
  /utils              # Utility functions
  /models             # Mongoose models
/public               # Static assets
/styles               # Global styles (Tailwind or CSS)
.env.local            # Environment config
next.config.js        # Next.js config
```