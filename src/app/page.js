
import Banner from "./component/banner";
import Workout from "./component/library";
import { Suspense } from "react";

export default function Home() {
  return (


    <main>
      <Banner></Banner>
 <section id="library" className="scroll-mt-20">
      <Suspense fallback={ 
<div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <span className="loading loading-spinner text-info"></span>

      <p className='text-[#C2F10D] text-[18px]'>Loading</p>
    </div>
}>
        <Workout />
      </Suspense>

</section>
    </main>
  );
}
