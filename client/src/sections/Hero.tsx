import ArrowRight from "@/assets/arrow-right.svg";

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="px-4 py-1 text-sm mt-2 border-black/10 rounded-full border inline-flex tracking-tight">
          Version 3.0 is here
        </div>
        <h1 className="text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-blue-500 text-transparent bg-clip-text mt-6">
          Focus On Forward
        </h1>
        <p className="text-xl tracking-tight mt-6">
          Boost your productivity and achieve more in less time. Stay focused,
          prioritize tasks, and manage your day with ease. Unlock your full
          potential and make the most of your time."
        </p>
        <div className="flex mt-8 gap-3 items-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text flex items-center gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
