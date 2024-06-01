import React, { Component } from 'react'

export default function SidebarItems({Icon, value} :any) {
  return (
    
        <div id="friends" className='flex space-x-3 font-semibold items-center text-lg mt-[3rem] hover:cursor-pointer'>
            <Icon className='h-8 w-8 text-blue-500 '/>
            <p>{value}</p>
        </div>
    
  )
}
