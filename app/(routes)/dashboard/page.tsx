"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import CardInfo from "./components/CardInfo";
import BarChartDashboard from "./components/BarChartDashboard";
import BudgetItem from "./budgets/_components/BudgetItem";
import ExpenseListTable from "./expenses/_components/ExpenseListTable";

// Dummy Data
const initialDummyBudgets = [
  { id: 1, name: "Food", amount: 500, totalSpend: 200, icon: "🍔" },
  { id: 2, name: "Rent", amount: 1000, totalSpend: 1000, icon: "🏠" },
  { id: 3, name: "Transport", amount: 200, totalSpend: 150, icon: "🚗" },
];

const dummyIncomes = [
  { id: 1, totalAmount: 3000 },
  { id: 2, totalAmount: 500 },
];

const dummyExpenses = [
  { id: 1, name: "Lunch", amount: 50, createdAt: "2026-06-19" },
  { id: 2, name: "Bus", amount: 10, createdAt: "2026-06-18" },
];

function Dashboard() {
  const { user } = useUser();

  const [budgetList, setBudgetList] = useState<any[]>(initialDummyBudgets);
  const [incomeList, setIncomeList] = useState<any[]>(dummyIncomes);
  const [expensesList, setExpensesList] = useState<any[]>(dummyExpenses);

  const refreshData = () => {
    console.log("Data refreshed (mock)");
  };

  return (
    <div className="p-8">
      <h2 className="font-bold text-4xl">Hi, {user?.fullName} 👋</h2>
      <p className="text-gray-500">
        Here's what happenning with your money, Lets Manage your expense
      </p>

      <CardInfo budgetList={budgetList} incomeList={incomeList} />
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-5">
        <div className="lg:col-span-2">
          <BarChartDashboard budgetList={budgetList} />

          <ExpenseListTable
            expensesList={expensesList}
            refreshData={refreshData}
          />
        </div>
        <div className="grid gap-5">
          <h2 className="font-bold text-lg">Latest Budgets</h2>
          {budgetList?.length > 0
            ? budgetList.map((budget, index) => (
                <BudgetItem budget={budget} key={index} />
              ))
            : [1, 2, 3, 4].map((item, index) => (
                <div
                  key={index}
                  className="h-45 w-full bg-slate-200 rounded-lg animate-pulse"
                ></div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
