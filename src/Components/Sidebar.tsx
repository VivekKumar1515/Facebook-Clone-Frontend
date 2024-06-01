import React from 'react'
import SidebarItems from './SidebarItems'
import { IoPeople } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { BsHandbag } from "react-icons/bs";
import { HiDesktopComputer } from "react-icons/hi";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { useAuth0 } from '@auth0/auth0-react';

export default function Sidebar() {

    const {user, isLoading} = useAuth0();

  return (
    <div className='mt-[3rem] ml-[1.5rem] mr-[5rem]'>
        <div className='flex space-x-4 items-center'>
        <img src={user?.picture} alt="" className='h-16 w-16 rounded-full shadow-md z-20'/>
        <p className='font-semibold text-lg'>{user?.name}</p>
        </div>

        
        <SidebarItems Icon={IoPeople} value="Friends"/>
        <SidebarItems Icon={MdGroups} value="Groups"/>
        <SidebarItems Icon={BsHandbag} value="Marketplace"/>
        <SidebarItems Icon={HiDesktopComputer} value="Watch"/>
        <SidebarItems Icon={BsCalendarDateFill} value="Events"/>
        <SidebarItems Icon={FaClock} value="Memories"/>
        <SidebarItems Icon={FaChevronDown} value="See More"/>
        
    </div>
  )
}
