"use client";
import React, { useEffect } from "react";
import SideNav from "./components/SideNav";
import DashboardHeader from "./components/Dashboard_Header";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    // Since this is a frontend portfolio project, we simulate the check
    console.log("Checking user budgets (Mocked)...");
    
    // Simulate a small delay as if calling an API
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // For a portfolio demo, we can assume the user has budgets 
    // or just remove the automatic redirection to avoid confusing the viewer.
    const hasBudgets = true; 
    
    if (!hasBudgets) {
      router.replace("/dashboard/budgets");
    }
  };
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block ">
        <SideNav />
      </div>
      <div className="md:ml-64 ">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;