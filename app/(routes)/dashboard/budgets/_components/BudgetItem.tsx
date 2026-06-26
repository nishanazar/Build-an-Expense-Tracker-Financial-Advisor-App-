import Link from "next/link";
import React from "react";

interface Budget {
  id: string | number;
  name: string;
  amount: string | number;
  totalSpend: number;
  icon: string;
  totalItem?: number;
}

interface BudgetItemProps {
  budget: Budget;
}

function BudgetItem({ budget }: BudgetItemProps) {
  const amount = Number(budget.amount);
  const totalSpend = Number(budget.totalSpend);

  const calculateProgressPerc = () => {
    if (amount === 0) return 0;
    const perc = (totalSpend / amount) * 100;
    return perc > 100 ? 100 : perc.toFixed(2);
  };
  return (
    <Link href={"/dashboard/expenses/" + budget?.id}>
      <div
        className="p-5 border rounded-2xl
    hover:shadow-md cursor-pointer h-42.5"
      >
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <h2
              className="text-2xl p-3 px-4
              bg-slate-100 rounded-full 
              "
            >
              {budget?.icon}
            </h2>
            <div>
              <h2 className="font-bold">{budget.name}</h2>
              <h2 className="text-sm text-gray-500">{budget.totalItem || 0} Item</h2>
            </div>
          </div>
          <h2 className="font-bold text-primary text-lg"> ${amount}</h2>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs text-slate-400">
              ${totalSpend} Spend
            </h2>
            <h2 className="text-xs text-slate-400">
              ${amount - totalSpend} Remaining
            </h2>
          </div>
          <div
            className="w-full
              bg-slate-300 h-2 rounded-full"
          >
            <div
              className="
              bg-primary h-2 rounded-full"
              style={{
                width: `${calculateProgressPerc()}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BudgetItem;
