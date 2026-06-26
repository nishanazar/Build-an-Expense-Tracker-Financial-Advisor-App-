"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState, use } from "react";
import BudgetItem from "@/app/(routes)/dashboard/budgets/_components/BudgetItem";
import AddExpenses from "@/app/(routes)/dashboard/expenses/_components/AddExpenses";
import ExpenseListTable from "@/app/(routes)/dashboard/expenses/_components/ExpenseListTable";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import EditBudget from "@/app/(routes)/dashboard/expenses/_components/EditBudgets";

// Mock Data
const MOCK_BUDGET = {
  id: 1,
  name: "Mock Budget",
  amount: 1000,
  icon: "💰",
  createdBy: "user@example.com",
  totalSpend: 200,
  totalItem: 5,
};

const MOCK_EXPENSES = [
  { id: 1, name: "Expense 1", amount: 50, createdAt: "2026-06-20", budgetId: 1 },
  { id: 2, name: "Expense 2", amount: 150, createdAt: "2026-06-19", budgetId: 1 },
];

interface ExpensesScreenProps {
  params: Promise<{
    id: string;
  }>;
}

function ExpensesScreen({ params }: ExpensesScreenProps) {
  const { id } = use(params);
  const { user } = useUser();
  const [budgetInfo, setbudgetInfo] = useState(MOCK_BUDGET);
  const [expensesList, setExpensesList] = useState(MOCK_EXPENSES);
  const route = useRouter();

  /**
   * Mock Function - Get Budget Information
   */
  const getBudgetInfo = () => {
    // DB logic removed
    setbudgetInfo(MOCK_BUDGET);
    setExpensesList(MOCK_EXPENSES);
  };

  /**
   * Mock Function - Delete budget
   */
  const deleteBudget = () => {
    // DB logic removed
    toast("Budget Deleted (Mocked)!");
    route.replace("/dashboard/budgets");
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold gap-2 flex justify-between items-center">
        <span className="flex gap-2 items-center">
          <ArrowLeft onClick={() => route.back()} className="cursor-pointer" />
          My Expenses
        </span>
        <div className="flex gap-2 items-center">
          <EditBudget
            budgetInfo={budgetInfo}
            refreshData={() => getBudgetInfo()}
          />

          <AlertDialog>
            {/* asChild used directly on button to avoid nested buttons */}
            <AlertDialogTrigger>
              <Button variant="destructive" className="rounded-full">
                <Trash className="w-4 mr-2" /> Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your current budget along with expenses.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => deleteBudget()}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </h2>
      <div
        className="grid grid-cols-1 
        md:grid-cols-2 mt-6 gap-5"
      >
        {budgetInfo ? (
          <BudgetItem budget={budgetInfo} />
        ) : (
          <div
            className="h-37.5 w-full bg-slate-200 
            rounded-lg animate-pulse"
          ></div>
        )}
        <AddExpenses
          budgetId={id}
          user={user}
          refreshData={() => getBudgetInfo()}
        />
      </div>
      <div className="mt-4">
        <ExpenseListTable
          expensesList={expensesList}
          refreshData={() => getBudgetInfo()}
        />
      </div>
    </div>
  );
}

export default ExpensesScreen;
