# 💰 Financial Management Dashboard

A modern, visually appealing financial management application built for a frontend developer portfolio. This project demonstrates the ability to create complex, data-driven user interfaces with a focus on UX/UI, responsiveness, and state management.

## 🚀 Project Overview

This application allows users to track their budgets, expenses, and income streams through an intuitive dashboard. To make this project easily accessible for portfolio review, it uses **mock data** to simulate a full-stack experience without requiring a database setup.

### Key Features
- **Interactive Dashboard:** Real-time overview of total budgets, income, and expenses.
- **Budget Management:** Create and monitor budget categories with custom emoji icons.
- **Expense Tracking:** Detailed list of expenses with date and amount tracking.
- **Income Streams:** Manage multiple sources of income.
- **Data Visualization:** Beautiful bar charts and summary cards using Recharts.
- **Authentication:** Secure user authentication integrated via Clerk.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd frontend_management_app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file and add your Clerk API keys:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **View the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Note for Reviewers
This project is designed as a **Frontend Showcase**. All data operations (Creating budgets/incomes) are simulated using mock functions to ensure the application is immediately functional and demonstrable without external database configuration.
