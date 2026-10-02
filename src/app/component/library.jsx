
import Workoutcard from '../workoutcard/workoutcard';


const datafetch = async()=>{
const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
  const rb = await res.json();
  return rb
}

const Workout =async () => {
const resolvedata = await datafetch();
  return (

    <div className='p-[12px] sm:p-[15px] md:p-[25px] lg:p-[30px] sm:mt-[30px] md:mt-[40px] lg:mt-[64px] max-w-[1280px] mx-auto'>

      <h1 className='text-white font-bold text-[30px]'>The Library</h1>

      <p className='text-[#9CA3AF] mb-[15px] sm:mb-[25px] md:mb-[40px] lg:mb-[64px] '>Twelve lifts covering every major muscle group.</p>

      <div className=' mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 md:gap-3 lg:gap-6 justify-between'>

        {
          resolvedata.map((item) => <Workoutcard key={item.id} propss={item} />)
        }
        
      </div>

    </div>
  );
};

export default Workout;