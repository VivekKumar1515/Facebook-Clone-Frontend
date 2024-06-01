import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import RightSideBar from './RightSideBar'

export default function UserPage() {
  return (
    <div>
      <header className='sticky'> 
      <Header/>
      </header>
      <main className='flex'>

        {/* left sidebar  */}
        <Sidebar />


        {/* feed  */}
        <Feed />


        {/* right sidebar  */}
        <RightSideBar />
      </main>
    </div>
  )
}
