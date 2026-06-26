import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { ModeToggle } from './Toggle'

function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
      
      <div>
      </div>

      <div className='flex gap-3'>
        <div><ModeToggle/></div>
        
        <UserButton />
      </div>

    </div>
  )
}

export default DashboardHeader