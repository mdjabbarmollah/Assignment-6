import React from 'react';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className=' bg-[#090A0D] border border-[#1A1D24] sm:p-[14px] md:p-[15px] lg:p-[25px] flex justify-between items-center'>
       <div className='flex gap-3 items-center'>
                <Image
               src='/SVG.png'
               alt='Logo'
               width={28}
               height={28}
             />
                    
      <span className='text-sm sm:text-[14px] md:text-[16px] font-bold font-semibold'>FITLOG</span>
      </div>
      
      <div>
        <p className='text-[#6B7280] '>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </div>
  );
};

export default Footer;