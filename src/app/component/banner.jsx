
import React from 'react';

 
const Banner = () => {
  
  return (
      <div className="sm:p-[15px] md:p-[25px] lg:p-[30px] sm:mt-[30px] md:mt-[40px] lg:mt-[64px] p-[12px] max-w-[1280px] mx-auto">
  <div className="hero-content grid grid-cols-1 lg:grid-cols-4 gap-8 items-center w-full max-w-none mx-auto p-[30px] sm:p-10 md:p-12 lg:p-14 bg-[#15171D] rounded-2xl ">
    
        <div className=' lg:col-span-3 '>
          <p className='sm:text-[11px] text-[#C2F800] font-bold mb-5'>WORKOUT LIBRARY</p>
      <p className="text-xl sm:text-3xl md:text-5xl lg:text-[60px] font-bold leading-[0.95] tracking-tight uppercase">TRAIN WITH INTENT. LOG <br/>
EVERY SET.</p>
      <p className="py-6">
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/>
{"into today's plan, and watch the week's work add up"}
      </p>
          <a href='/#library'
            className="btn btn-primary text-sm sm:text-[14px] px-[16px] sm:px-[24px] py-[8px] sm:py-[12px] rounded-[8px] bg-[#C2F800] text-black font-bold">BROWSE WORKOUTS
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
  </svg>
          </a>
        </div>

        <div className='lg:col-span-1 flex justify-center'>
          <img
      alt=""
      src="/banner.png"
      className="w-full max-w-sm rounded-[8px] sm:h-auto "
    />
        </div>

  </div>
</div>
   
  );
};

export default Banner;