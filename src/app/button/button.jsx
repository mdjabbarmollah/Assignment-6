'use client'

import React, { useContext } from 'react';
import { workoutContext } from '../context/context';
const Addbutton = ({workout}) => {

  const {addWorkout,forsave} = useContext(workoutContext);
 

  const handelCarddetails = () => {
  addWorkout(workout);
}
  const handelForsave = () => {
    forsave(workout)
  };

  return (
    <div className="flex flex-wrap gap-3 mt-6">

      <button className="bg-[#C2F800] text-black font-bold px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-[12px] sm:text-[14px] w-auto" onClick={() => handelCarddetails()}>
                
        <span className='flex items-center justify-center gap-[4px] '>
                  
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
          </svg>
          {`Add to today's plan`}
                            
        </span>
                
      </button>
    

      <button className=" border-[#9CA3AF] text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-[12px] sm:text-[14px] text-[14px]" onClick={() => handelForsave()}>

        <span className='flex gap-[4px] items-center justify-center'>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
  
          </svg>
          Save for later
                
        </span>
               
                
      </button>
  
    </div>
  );
};

export default Addbutton;