import React from 'react';
import Image from 'next/image';
import { foridfetchfromsap } from '../../secendapi/api'
import Addbutton from '@/app/button/button';
import { notFound } from 'next/navigation';

const Carddetails = async ({ params }) => {

  const { workoutdetails } = await params
  const details = await foridfetchfromsap(workoutdetails)

  if (!details || !details.name) {
    notFound();
  }

  const {
    name,
    image,
    description,
    muscleGroups = [],
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions = [],
  } = details;

  return (
    <div className="max-w-[1280px] mx-auto p-[12px] sm:p-[15px] md:p-[25px] lg:p-[30px]">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#0F1115] rounded-2xl p-6 sm:p-8 lg:p-10">


        <div className="relative w-full h-[380px] sm:h-[500px] lg:h-[675px] rounded-2xl overflow-hidden">

          <Image
            src={image}
            alt={name}
            fill className="object-cover"
          />

        </div>


        <div>

          <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold uppercase text-white">

            {name}
          </h1>
          <p className="text-[#9CA3AF] mt-3 text-[14px] sm:text-[16px]">

            {description}

          </p>


          <div className="flex flex-wrap gap-2 mt-4">

            {muscleGroups.map((tag, i) => (

              <span key={i} className="bg-[#C2F800] text-black font-bold text-[11px] px-2.5 py-1 rounded uppercase"

              >
                {tag}

              </span>
            ))}

          </div>

          <div className="bg-[#151922] rounded-xl mt-6  text-[#E5E7EB]">

            <div className="flex justify-between px-4 py-3 text-[14px] border-b border-[#2D313B]">

              <span className="text-[#9CA3AF]">EQUIPMENT</span>

              <span className="font-semibold">{equipment}</span>

            </div>

            <div className="flex justify-between border-b border-[#2D313B]  px-4 py-3 text-[14px]">

              <span className="text-[#9CA3AF]">DIFFICULTY</span>

              <span className="font-semibold">{difficulty}</span>

            </div>

            <div className="flex justify-between px-4 py-3 text-[14px] border-b border-[#2D313B] ">

              <span className="text-[#9CA3AF]">SETS</span>

              <span className="font-semibold">{sets}</span>

            </div>

            <div className="flex justify-between px-4 py-3 text-[14px] border-b border-[#2D313B]">

              <span className="text-[#9CA3AF]">REPS</span>

              <span className="font-semibold">{reps}</span>
            </div>

            <div className="flex justify-between px-4 py-3 text-[14px] border-b border-[#2D313B]">

              <span className="text-[#9CA3AF]">DURATION</span>

              <span className="font-semibold">{duration} min</span>

            </div>

            <div className="flex justify-between px-4 py-3 text-[14px] border-b border-[#2D313B]">

              <span className="text-[#9CA3AF]">CALORIES</span>

              <span className="font-semibold">{caloriesBurned} kcal</span>

            </div>

            <div className="flex justify-between px-4 py-3 text-[14px]  border-[#2D313B]">

              <span className="text-[#9CA3AF]">RATING</span>

              <span className="font-semibold">{rating}</span>

            </div>

          </div>


          <div className="mt-6">

            <h2 className="font-bold text-[18px] mb-3">
              INSTRUCTIONS
            </h2>

            <ol className="flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] lg:gap-[10px]" >

      {instructions.map((step, i) => (

        <li key={i} className="flex gap-3 text-[14px] text-[#9CA3AF]">

                  <span >

                    {i + 1}.</span>

                  <span>{step}</span>

                </li>
              ))}
            </ol>
          </div>


          <div className="flex flex-wrap gap-3 mt-6">

            <Addbutton workout={details} />


          </div>
        </div>

      </div>
    </div>
  );
};

export default Carddetails;