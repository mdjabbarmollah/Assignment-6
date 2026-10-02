const PlanControls = ({
  currentbutton,
  setactiveFunction,
  sortBy,
  setSortBy,
  todayCount,
  savedCount,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
    
      <div className="inline-flex bg-[#13161D] p-1 rounded-xl border border-[#232732]">

        <button onClick={() => setactiveFunction('today')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
            currentbutton === 'today'
              ? 'bg-[#1E222D] text-white shadow'
              : 'text-[#8A92A0] hover:text-white'
          }`}
        >

          {" Today's Plan"} ({todayCount})
          
        </button>


        <button onClick={() => setactiveFunction('saved')}
          
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
            
            currentbutton === 'saved'
              ? 'bg-[#1E222D] text-white shadow'
              : 'text-[#8A92A0] hover:text-white'
            }`
          
          }
        >
          Saved ({savedCount})

        </button>

      </div>

     
      <div className="flex items-center gap-2">

        <span className="text-[#8A92A0] text-xs font-medium">
          Sort By
        </span>

        <div className="dropdown dropdown-end">

          <div tabIndex={0} role="button"
            className="btn btn-sm bg-[#13161D] hover:bg-[#1E222D] text-white border-[#232732] rounded-lg font-normal text-xs capitalize"
          >

            {sortBy}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-[#13161D] border border-[#232732] rounded-box w-36 text-xs text-white z-10"
          >
            <li><a onClick={() => setSortBy('Duration')}>Duration</a></li>
           
            <li><a onClick={() => setSortBy('Calories')}>Calories</a></li>
            <li><a onClick={() => setSortBy('Rating')}>Rating</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlanControls;