'use client'
import Link from "next/link";
import Image from "next/image";

const WorkoutList = ({
  currentList,
  currentbutton,
  markdone,
  removedWorkout,
  removedsaved,
  children, 
}) => {
  if (currentList.length === 0)
  {
    return <>
      
      {children}
    </>;
  }

  return (

    <div className="flex flex-col gap-4">

      {currentList.map((item) => (

        <div
          key={item.id}

          className={`flex flex-col sm:flex-row justify-between items-center bg-[#13161D] p-4 rounded-xl border ${
            item.done ? 'border-[#C2F800]/40 bg-[#13161D]/80' : 'border-[#232732]'
          } gap-4`}
        >
         
          <div className="flex items-center gap-4 w-full sm:w-auto">

            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-[#1E222D]">

              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"

              />

            </div>

            <div>

              <h3 className={`font-bold text-base sm:text-lg ${item.done ? 'line-through text-[#8A92A0]' : 'text-white'}`}>

                {item.name}

              </h3>

              <p className="text-[#8A92A0] text-xs sm:text-sm">

                {item.equipment}

              </p>

              <div className="flex gap-3 text-xs text-[#8A92A0] mt-1.5">

                <span>⏱ {item.duration} min</span>

                <span>🔥 {item.caloriesBurned} kcal</span>
          
                <span>⭐ {item.rating}</span>
              </div>
            </div>
          </div>

         
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">

            <Link
              href={`/workouts/${item.id}`}
              className="bg-[#1E222D] hover:bg-[#2A2F3D] text-white px-3 py-2 rounded-lg text-xs font-medium transition-all"
            >

              View Details

            </Link>

            {currentbutton === 'today' && (

              <button
                onClick={() => markdone(item.id)}

                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${

                  item.done
                    ? 'bg-[#C2F800]/20 text-[#C2F800] border border-[#C2F800]'
                  : 'bg-[#C2F800] text-black hover:bg-[#b0df00]'
                  
                  }`
                }
              >

                {item.done ? '✓ Done' : 'Mark as Done'}
              </button>

            )}

            <button onClick={() =>
              
              currentbutton === 'today'
                
                  ? removedWorkout(item.id)
                  : removedsaved(item.id)
              }

              className="bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white px-3 py-2 rounded-lg text-xs font-semibold transition-all"

            >
              ✕ 
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;