import React from 'react'
import {NavLink} from "react-router-dom";
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1 hover:scale-105 hover:bg-gray-300' to="add">
            <img className='w-5 h-5' src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Add Items</p>
        </NavLink>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1 hover:scale-105 hover:bg-gray-300' to="list">
            <img className='w-5 h-5' src={assets.list_icon} alt="" />
            <p className='hidden md:block'>List Items</p>
        </NavLink>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1 hover:scale-110 hover:bg-gray-300' to="orders">
            <img className='w-5 h-5' src={assets.order_icon} alt="" />
            <p className='hidden md:block'>Orders</p>
        </NavLink>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1 hover:scale-110 hover:bg-gray-300' to="chat">
            <img className='w-5 h-5' src={assets.chat_icon} alt="" />
            <p className='hidden md:block'>Chats</p>
        </NavLink>
        <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1 hover:scale-110 hover:bg-gray-300' to="sendoffers">
            <img className='w-5 h-5' src={assets.email_icon} alt="" />
            <p className='hidden md:block'>Email Offers</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
