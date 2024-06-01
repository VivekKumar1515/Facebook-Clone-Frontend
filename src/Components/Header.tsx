import React from 'react'
import { GoSearch } from "react-icons/go";
import { SlHome } from "react-icons/sl";
import { LuMonitorPlay } from "react-icons/lu";
import { LuStore } from "react-icons/lu";
import { HiUserGroup } from "react-icons/hi";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { User, useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from './Logout';


export default function Header() {


    const { user, isLoading, logout } = useAuth0();
    const navigate = useNavigate();

    function logoutUser(e: any) {
        e.preventDefault();
        navigate("/logout")
    }

  return (
    <div className='bg-white justify-between flex  items-center px-3 py-2 shadow-md top-0 z-50 h-16'>
        {/* left  */}
        <div className='flex mr-[6rem]'>
            <img src="https://static-00.iconduck.com/assets.00/facebook-color-icon-2048x2048-bfly1vxr.png" alt="" className='h-10 w-10 mr-3'/>
            <div className='flex items-center bg-gray-100 space-x-2 lg:pl-4 rounded-full  lg:rounded-[4rem] px-3'>
                <GoSearch />
                <input type="text" name="" id="" placeholder='Search Facebook' className='hidden lg:w-[250px] lg:inline-flex bg-gray-100 border-none outline-none font-normal'/>
            </div>
        </div>


        {/* middle  */}
        <div className=' flex flex-grow max-w-[33rem] self-center justify-between'>
        <a href="#"><SlHome  className='h-6 w-6'/></a>
        <a href="#"><LuMonitorPlay  className='h-6 w-6'/></a>
        <a href="#"><LuStore  className='h-6 w-6'/></a>
        <a href="#"><HiUserGroup  className='h-6 w-6'/></a>
        <a href="#"><IoGameControllerOutline  className='h-6 w-6'/></a>
        </div>

        {/* right  */}
        <div className='flex space-x-2 ml-[6rem]'>
            <div className='h-10 w-10  bg-gray-200 justify-center items-center rounded-full hidden lg:inline-flex'>
            <a href="#"><BsFillGrid3X3GapFill  className='h-5 w-5'/></a>
            </div>

            <div className='h-10 w-10  bg-gray-200 justify-center items-center rounded-full hidden lg:inline-flex'>
            <a href="#"><FaFacebookMessenger className='h-5 w-5'/></a>
            </div>

            <div className='h-10 w-10  bg-gray-200 justify-center items-center rounded-full hidden lg:inline-flex'>
                <a href="#"><FaBell className='h-5 w-5'/></a>
            </div>

            <a href="#" className='flex items-center font-semibold space-x-3 text-[1.1rem]' onClick={(e) => logoutUser(e)}>
                <img className='h-10 w-10 rounded-full' loading='eager' src={user?.picture} alt=""/>
                <p className='hidden xl:inline-block' >{!isLoading? user?.given_name : ""}</p>
            </a>
        </div>
    </div>
  )
}
