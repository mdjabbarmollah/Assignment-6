'use client'

const PlanMetrics = ({ currentList = [] }) => {

  const totalExercises = currentList.length;


  const totalMinutes = currentList.reduce((acc, item) => {

    const val = item.duration ?? item.minutes ?? item.time ?? 0;

    return acc + (parseInt(val, 10) || 0);

  }, 0);

  
  const totalCalories = currentList.reduce((acc, item) => {

    const val = item.caloriesBurned ?? item.calories ?? item.calorie ?? 0;

    return acc + (parseInt(val, 10) || 0);

  }, 0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 bg-[#13161D] divide-y sm:divide-y-0 sm:divide-x divide-[#232732] p-5 rounded-2xl">

      <div>

        <p className="text-[#8A92A0] text-[12px]">Exercises</p>
        <h2 className="text-3xl font-bold mt-1 text-[#C2F800]">{totalExercises}</h2>

      </div>

      <div className="sm:pl-4 pt-2 sm:pt-0">

        <p className="text-[#8A92A0] text-[12px]">Minutes</p>
        <h2 className="text-3xl font-bold mt-1">{totalMinutes}</h2>

      </div>

      <div className="sm:pl-4 pt-2 sm:pt-0">

        <p className="text-[#8A92A0] text-[12px]">Calories</p>
        <h2 className="text-3xl font-bold mt-1">{totalCalories}</h2>

      </div>
      
    </div>
  );
};

export default PlanMetrics;