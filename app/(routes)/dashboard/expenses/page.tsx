"use client"
import React, { useEffect, useState } from 'react'
import ExpenseListTable from './_components/ExpenseListTable';
import { useUser } from '@clerk/nextjs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Mock Data
const MOCK_EXPENSES = [
  { id: 1, name: "Grocery Shopping", amount: 50, createdAt: "2026-06-20" },
  { id: 2, name: "Electricity Bill", amount: 150, createdAt: "2026-06-19" },
  { id: 3, name: "Netflix Subscription", amount: 75, createdAt: "2026-06-18" },
  { id: 4, name: "Gym Membership", amount: 100, createdAt: "2026-06-17" },
  { id: 5, name: "Restaurant Dinner", amount: 120, createdAt: "2026-06-16" },
];

function ExpensesScreen() {

  const [expensesList, setExpensesList] = useState(MOCK_EXPENSES);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useUser();

  useEffect(() => {
      if (user) getAllExpenses();
  }, [user])

  const getAllExpenses = async () => {
    setExpensesList(MOCK_EXPENSES);
  }

  // Filtered list using Array.filter method
  const filteredExpenses = expensesList.filter((expense) => 
    expense.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='p-10'>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className='font-bold text-3xl'>My Expenses</h2>
        
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input 
            placeholder="Search expenses..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <ExpenseListTable 
        refreshData={() => getAllExpenses()}
        expensesList={filteredExpenses}
      />
    </div>
  )
}

export default ExpensesScreen