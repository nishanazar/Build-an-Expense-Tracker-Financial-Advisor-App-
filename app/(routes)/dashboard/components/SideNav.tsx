"use client"

import { useEffect } from "react"

import Image from "next/image"
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign
} from "lucide-react"

import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function SideNav() {

  const path = usePathname()

  useEffect(() => {
    console.log(path)
  }, [path])

  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard"
    },
    {
      id: 2,
      name: "Incomes",
      icon: CircleDollarSign,
      path: "/dashboard/incomes"
    },
    {
      id: 3,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets"
    },
    {
      id: 4,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses"
    },
    {
      id: 5,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade"
    }
  ]

  return (
    <div className="h-screen p-5 border shadow-sm">
      
      <div className="flex flex-row items-center gap-2">
        <Image
          src={"/chart-donut.svg"}
          alt="logo"
          height={25}
          width={40}
        />
        <span className="text-blue-800 font-bold text-xl">
          FinanSmart
        </span>
      </div>

      <div className="mt-5">

        {menuList.map((menu, index) => (
          
          <Link href={menu.path} key={index}>
            <h2 className={` flex items-center font-medium mb-2 gap-2 p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-100 rounded-full cursor-pointer ${path == menu.path && "text-primary bg-blue-100"}`}>
              
              <menu.icon />
              
              {menu.name}
            </h2>
          </Link>

        ))}

      </div>

    </div>
  )
}