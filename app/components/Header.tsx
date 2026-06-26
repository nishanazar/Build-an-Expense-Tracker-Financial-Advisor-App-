"use client"

import React from "react"
import Image from "next/image"
import {Button} from "@/components/ui/button"

import { UserButton, useUser } from "@clerk/nextjs"
import Link from "next/link"

function Header(){
    const {user  , isSignedIn} = useUser();
    return (
        <div className="p-5 flex items-center border shadow-sm justify-between">
            <div className="flex flex-row items-center">
                {/* {logo} */}
                <Image src={"\chart-donut.svg"} alt={"logo"} height={40} width={25}/>
                <span className="text-blue-800 font-bold text-xl">FinanSmart</span>
            </div>
            
            <div className="flex gap-3 items-center">
                {isSignedIn ? (
                    <>
                        <Link href="/dashboard">
                            <Button variant="outline" className="rounded-full">Dashboard</Button>
                        </Link>
                        <UserButton />
                    </>
                ) : (
                    <>
                        <Link href="/dashboard">
                            <Button variant="outline" className="rounded-full">Dashboard</Button>
                        </Link>
                        <Link href="/dashboard">
                            <Button className="rounded-full bg-blue-800">Get Started</Button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header;