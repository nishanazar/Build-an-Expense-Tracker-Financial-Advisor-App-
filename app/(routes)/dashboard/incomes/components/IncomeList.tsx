"use client";
import React, { useEffect, useState } from "react";
import CreateIncomes from "./CreateIncome";
import { useUser } from "@clerk/nextjs";
import IncomeItem from "./IncomeItem";

// Dummy Data
const dummyIncomes = [
  { id: 1, name: "Salary", amount: 3000, icon: "💰" },
  { id: 2, name: "Freelance", amount: 500, icon: "💻" },
];

function IncomeList() {
  const [incomelist, setIncomelist] = useState<any[]>([]);
  const { user } = useUser();

  useEffect(() => {
    setIncomelist(dummyIncomes);
  }, []);

  return (
    <div className="mt-7">
      <div
        className="grid grid-cols-1
        md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <CreateIncomes refreshData={() => {}} />
        {incomelist?.length > 0
          ? incomelist.map((income, index) => (
              <IncomeItem income={income} key={index} />
            ))
          : [1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="w-full bg-slate-200 rounded-lg
        h-37.5 animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default IncomeList;
