'use client'

import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      
      <span className="loading loading-spinner text-info"></span>

      <p className='text-[#C2F10D] text-[18px]'> Loading workouts....</p>

    </div>
  );
};

export default Loading;