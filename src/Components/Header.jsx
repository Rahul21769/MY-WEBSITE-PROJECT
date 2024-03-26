import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
export default function Header() {
    const[toggle,setToggle] = useState(false);
  return (
    <div className='bg-[#2699fb] p-4'>
    <div className='max-w-[1240px] items-center py-[12px]  flex justify-between border-black mx-auto'>
        <div className='text-3xl font-bold '>
            QUOTES IN LIFE
        </div>
        {
            toggle?
            <AiOutlineClose onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
            :
            <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
        }
        <ul className='hidden md:flex text-white gap-10'>
            <li>
                Home
            </li>
            <li>
                Company
            </li>
            <li>
                Resource 
            </li>
            <li>
                About
            </li>
            <li>
               ContactUS
            </li>
        </ul>
        {/* Responsive Menu/*/}
        <ul className={`duration-300 md:hidden w-full h-screen md:flex text-white fixed bg-black top-[92px] 
         ${toggle ? 'left-[0]' : 'left-[-100%]'}
         `}>
            <li className='p-5'>
                Home
            </li>
            <li className='p-5'>
                Company
            </li>
            <li className='p-5'>
                Resource 
            </li>
            <li className='p-5'>
                About
            </li>
            <li className='p-5'>
               ContactUS
            </li>
        </ul>
    </div>
    </div>
    )
}
