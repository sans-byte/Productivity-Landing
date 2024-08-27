import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import Cloud from "@/assets/Cloud.png";
import Plant from "@/assets/Plant.png";
export const CallToAction = () => {
  return (
    <section className="py-24">
      <div className="overflow-x-clip">
        <div className="container relative">
          <div className="section-header">
            <div className="section-heading">Sign up for free today</div>
            <div className="pb-12">
              <p>
                Celebrate the joy of accomplishment with an app designed to
                track your progress and motivate your efforts.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="btn btn-primary">Get for free</button>{" "}
              <button className="btn btn-text flex items-center gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src={Cloud}
              alt="cloud"
              width={400}
              className="absolute top-0 right-[-100px] max-lg:right-[-230px]"
            />
            <Image
              src={Plant}
              alt="plant"
              width={400}
              className="absolute top-[-200px] left-[-100px] max-lg:left-[-200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
