'use client'

import Link from 'next/link';
import React, { useContext } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { workoutContext } from '../context/context';
const Navbar = () => {

  const { selectedworkouts, selectedworkoutsforsave } = useContext(workoutContext)
  
  const pathname = usePathname();
  
  const isWorkouts = pathname === '/' || pathname.startsWith('/workouts');
  
const isPlan = pathname === '/my-plan';
  const links = <>
  
    <li><Link href="/"
      
      
      className={`font-semibold text-sm sm:text-[14px] md:text-[16px] lg:text-[25px] ${isWorkouts ? 'text-[#C2F800]' : 'text-[#9CA3AF]'}`}>
      
      Workouts
    
    </Link>
    </li>

    <li>
      <Link href="/my-plan"
            className={`font-semibold text-sm sm:text-[14px] md:text-[16px] lg:text-[25px] ${isPlan ? 'text-[#C2F800]' : 'text-[#9CA3AF]'}`}>
        My Plan
        
    </Link>
    </li>
   
  </>

  return (
  <div className="navbar sticky top-0 z-50 bg-[#0C0D10] p-3 shadow-sm border border-[#2D313B] bg-[#0C0D10] sm:px-[14px] md:px-[15px] lg:px-[25px] ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor "> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        {links}
        
      </ul>
        </div>
        
        <Link href='/' className='flex gap-3 items-center'>
           <div>
           <Image
          src='/logo.png'
          alt='Logo'
          width={28}
          height={28}
        />
          </div>
          
          <span className='text-sm sm:text-[14px] md:text-[16px] lg:text-[25px] font-semibold'>FITLOG</span>
          
       </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
        <Link href="/my-plan" className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
          <span className="text-[#D1D5DB]  font-semibold text-sm sm:text-[14px] md:text-[16px] lg:text-[18px]">Plan</span>

          <span className="bg-[#C2F800] text-[#000000] border border-[#232732] text-xs font-bold px-[8px] py-[2px] w-6 h-6 rounded-full flex items-center justify-center">
{selectedworkouts.length}
          </span>
        </Link>
        <div>
            <Link href='/my-plan' className= "flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className=" text-[#D1D5DB]  font-semibold text-sm sm:text-[14px] md:text-[16px] lg:text-[18px]">Saved</span>
            <span className=" text-[#D1D5DB] border border-[#9CA3AF] text-[12px] font-bold px-[8px] py-[2px] rounded-full rounded w-6 h-6 flex items-center justify-center">
{selectedworkoutsforsave.length }
            </span>
            
        </Link>
        </div> 
  </div>
</div>
  );
};

export default Navbar;