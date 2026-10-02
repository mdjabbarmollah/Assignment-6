import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-base-200 px-4 py-12">
      <section className="w-full max-w-md text-center flex flex-col items-center justify-center">
       
        <div className="flex items-end justify-center gap-2 mb-6">
          <span className="text-7xl sm:text-8xl font-black text-primary">4</span>
          <svg className="w-20 h-28 sm:w-24 sm:h-32" viewBox="0 0 100 150" aria-hidden="true">
            <defs>
              <clipPath id="env">
                <path d="M50 4C22 4 4 24 4 48c0 20 12 36 26 50l6 8h28l6-8c14-14 26-30 26-50C96 24 78 4 50 4z"></path>
              </clipPath>
              <radialGradient id="shine" cx="34%" cy="28%" r="70%">
                <stop offset="0" stopColor="#fff" stopOpacity=".55"></stop>
                <stop offset=".5" stopColor="#fff" stopOpacity="0"></stop>
                <stop offset="1" stopColor="#000" stopOpacity=".28"></stop>
              </radialGradient>
            </defs>
            <g clipPath="url(#env)">
              <rect width="100" height="110" fill="#f4efe6"></rect>
              <path d="M50 4C34 20 30 50 36 106H64C70 50 66 20 50 4z" fill="#e8553d"></path>
              <path d="M4 48C10 20 30 6 50 4C28 26 26 70 36 106H30C14 90 4 70 4 48z" fill="#1f4e79"></path>
              <path d="M96 48C90 20 70 6 50 4C72 26 74 70 64 106H70C86 90 96 70 96 48z" fill="#1f4e79"></path>
              <rect y="66" width="100" height="9" fill="#f4b942" opacity=".95"></rect>
              <rect width="100" height="110" fill="url(#shine)"></rect>
            </g>
            <path d="M36 106L44 126M64 106L56 126M50 106V126" stroke="#5b4636" strokeWidth="1.4"></path>
            <rect x="41" y="126" width="18" height="13" rx="2" fill="#a3703f"></rect>
            <rect x="41" y="126" width="18" height="4" rx="1.5" fill="#7c5230"></rect>
            <path d="M45 126v13M50 126v13M55 126v13" stroke="#7c5230" strokeWidth=".8" opacity=".7"></path>
          </svg>
          <span className="text-7xl sm:text-8xl font-black text-primary">4</span>
        </div>

    
        <h1 className="text-3xl sm:text-4xl font-extrabold text-base-content tracking-tight">
          We can’t find that page
        </h1>
        <p className="mt-4 text-sm sm:text-base text-base-content/70 leading-relaxed max-w-sm">
          The link may be broken, or the page may have moved. Head back home or return to where you were.
        </p>

        
        <div className="mt-8 flex justify-center w-full">
          <Link href="/" className="btn btn-primary px-8 text-base">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}