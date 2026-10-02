import React from 'react';
import Image  from 'next/image';
import Link from 'next/link';
const Workoutcard = ({ propss }) => {
  const { 
 id, 
    name, 
    image, 
    muscleGroups = [], 
    equipment, 
    duration, 
    caloriesBurned, 
    rating
} = propss||{};
  return (
    
    <Link href={`/workouts/${id}`}>
    <div className="card bg-[#15171D] w-full  text-white shadow-lg rounded-2xl overflow-hidden border justify-between border-[#9CA3AF] hover:border-amber-800 transition-all max-w-[400px] 
       
    ">
      
  
      <figure className="relative w-full h-[220px] overflow-hidden bg-[#15171D] mb-3.5
      ">

        <Image 
         width={400}
          height={500}
          src={image}
          alt="work out image"/>
       
      </figure>
      <div className='p-5'>

  <div className="mb-[8px] sm:mb-4 md:mb-4 lg:mb-4 md:mt-[6px] lg:mt-4 mt-[4px] flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              
              {muscleGroups.map((badge, forkey) => (
              
                <span key={forkey} className="bg-[#C2F800] text-black font-bold text-[11px] px-2.5 py-1 rounded uppercase ">
                  
                  {badge}
                  
    </span>
  ))}
   </div>
          </div>
          
          <div>
            
          <h1 className='font-bold text-[14px] sm:text-[14px] md:text-[16px] lg:text-[20px]'>{name}</h1>
            <p className='text-[#9CA3AF] '>{equipment} </p>
            
        </div>
        
          <div className="flex items-center justify-between text-[#9CA3AF] text-[12px] border-t border-[#2D313B] mt-2">
            
        <div className="flex items-center gap-4 pt-3">
          <span>⏱ {duration} min</span>
          <span>🔥 {caloriesBurned} kcal</span>
          <span>⭐ {rating}</span>
        </div>
        
      </div>
      

</div>

      </div>
      </Link>
  );
};

export default Workoutcard;