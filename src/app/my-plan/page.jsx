'use client'
import { useState, useContext } from "react";
import { workoutContext } from "../context/context";
import Link from "next/link";
import PlanMetrics from "./countpart";
import PlanControls from "./barpart";
import WorkoutList from "./listpart";


const Myplan = () => {
  const {
    selectedworkouts,
    selectedworkoutsforsave,
    removedWorkout,
    removedsaved,
    markdone,
  } = useContext(workoutContext);

  const [currentbutton, setactiveFunction] = useState('today');

  const [sortBy, setSortBy] = useState('Duration');
  
 


  const rawList =
    currentbutton === 'today'
      ? (selectedworkouts || []) : (selectedworkoutsforsave || []);

  const currentList = [...rawList].sort((a, b) => {

    if (sortBy === 'Duration') {

      return (parseInt(a.duration) || 0) - (parseInt(b.duration) || 0);

    }

    if (sortBy === 'Calories') {

      return (parseInt(b.caloriesBurned) || 0) - (parseInt(a.caloriesBurned) || 0);

    }

    if (sortBy === 'Rating') {

      return (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0);

    }

    return 0;
  });



  return (

    <div className="p-[12px] sm:p-[15px] md:p-[25px] lg:p-[30px] max-w-[1280px] mx-auto text-white">
      <div>

        <h1 className="text-[18px] sm:text-[25px] md:text-[27px] lg:text-[30px] font-bold">
          MY PLAN
        </h1>

        <p className="text-[14px] text-[#8A92A0] mb-[12px] sm:mb-[15px] md:mb-[20px] lg:mb-[24px]">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <PlanMetrics currentList={currentList} />

      </div>

      <PlanControls
        currentbutton={currentbutton}
        setactiveFunction={setactiveFunction}
        sortBy={sortBy}
        setSortBy={setSortBy}
        todayCount={selectedworkouts.length}
        savedCount={selectedworkoutsforsave.length}

      />

      <WorkoutList
        currentList={currentList}
        currentbutton={currentbutton}
        markdone={markdone}
        removedWorkout={removedWorkout}
        removedsaved={removedsaved}

      >
        <div className="border border-dashed border-[#232732] rounded-2xl bg-[#0D0F14]/50 p-12 sm:p-20 text-center flex flex-col items-center justify-center min-h-[300px]">
          
          <h2 className="text-white font-bold text-xl sm:text-2xl tracking-wide mb-2">
            NOTHING HERE YET
          </h2>

          <p className="text-[#8A92A0] text-xs sm:text-sm max-w-sm mb-6">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="bg-[#C2F800] hover:bg-[#b0df00] text-black font-semibold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-all shadow-md inline-block"
          >
            Go to workouts
          </Link>

        </div>

      </WorkoutList>

    </div>
  );
};

export default Myplan;