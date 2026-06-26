import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
interface AddExpenseProps {
  budgetId: string | number;
  user: any;
  refreshData: () => void;
}

function AddExpense({ budgetId, user, refreshData }: AddExpenseProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Mock Function - Used to Add New Expense
   */
  const addNewExpense = async () => {
    setLoading(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // DB logic removed
    
    setAmount("");
    setName("");
    setLoading(false);
    refreshData();
    toast("New Expense Added (Mocked)!");
  };
  
  return (
    <div className="border p-5 rounded-2xl">
      <h2 className="font-bold text-lg">Add Expense</h2>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Name</h2>
        <Input
          placeholder="e.g. Bedroom Decor"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Amount</h2>
        <Input
          placeholder="e.g. 1000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <Button
        disabled={!(name && amount) || loading}
        onClick={() => addNewExpense()}
        className="mt-3 w-full rounded-full"
      >
        {loading ? <Loader className="animate-spin" /> : "Add New Expense"}
      </Button>
    </div>
  );
}

export default AddExpense;
