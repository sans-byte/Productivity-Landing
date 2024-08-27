import ArrowRight from "@/assets/arrow-right.svg";
import Gear from "@/assets/Gear.png";
import Image from "next/image";
import Screw from "@/assets/Screw.png";
import Bulb from "@/assets/Light Bulb.png";
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#3573dc,#eaeefe_100%)] overflow-x-clip">
      <div className="container md:flex items-center">
        <div className="md:flex-1">
          <div className="px-4 py-1 text-sm border-black/10 rounded-full border inline-flex tracking-tight">
            Version 3.0 is here
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-black to-blue-500 text-transparent bg-clip-text mt-6 md:w-[438px]">
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
        <div className="md:h-[648px] md:flex-1 relative">
          <Image
            src={Gear}
            alt="gear"
            height={1000}
            width={1000}
            className="rotate-[-45deg] md:absolute md:h-full md:w-auto md:max-w-none md:-left-20 lg:left-0"
          />
          <Image
            src={Screw}
            alt="screw"
            height={200}
            width={200}
            className="rotate-[-120deg] hidden md:block"
          />
          <Image
            src={Bulb}
            alt="screw"
            height={300}
            width={300}
            className="absolute bottom-[-140px] right-[-80px] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};
