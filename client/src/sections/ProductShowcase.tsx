import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import Product from "@/assets/product.png";
import Lock from "@/assets/Lock.png";
import Sheild from "@/assets/Shield.png";
import Task from "@/assets/task.svg";
import Time from "@/assets/time.svg";
import Focus from "@/assets/focus.svg";
import Goal from "@/assets/goal.svg";
export const ProductShowcase = () => {
  return (
    <div className="bg-gradient-to-b from-[#eaeefe] to-[#5f8de46b] overflow-x-clip">
      <div className="container py-24">
        <div className="max-w-[540px] mx-auto flex flex-col items-center justify-center text-center">
          <div className="text-badge">Be More Productive</div>
          <div className="text-4xl md:text-6xl header-text py-6">
            Track your progress effortlessly, Get things done quicker
          </div>
          <div>
            Your personalized productivity companion. Streamline your tasks,
            track your progress, and stay organized with our intuitive tools.
            Unlock a more productive you!
          </div>
        </div>
        <div className="relative">
          <Image src={Product} alt="product" className="py-12" />
          <div className="hidden md:block">
            <Image
              src={Lock}
              alt="lock"
              height={240}
              width={240}
              className="absolute bottom-20 lg:bottom-52 left-[-140px]"
            />
            <Image
              src={Sheild}
              alt="=shield"
              height={240}
              width={240}
              className="absolute top-0 lg:top-20 right-[-100px]"
            />
          </div>
        </div>
        <section className="md:grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          <div className="py-12">
            <Task className="h-6 w-6" />
            <h5 className="text-lg font-bold py-2">Task Management</h5>
            <p>
              Organize and prioritize your tasks with ease, using our intuitive
              drag-drop interface.
            </p>
            <button className="btn btn-text flex items-center px-0">
              <span>Learn more</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="py-12">
            <Time className="h-6 w-6" />
            <h5 className="text-lg font-bold py-2">Time Tracking</h5>
            <p>
              Understand how you spend your time with our automatic time
              tracking feature.
            </p>
            <button className="btn btn-text flex items-center px-0">
              <span>Learn more</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="py-12">
            <Focus className="h-6 w-6" />
            <h5 className="text-lg font-bold py-2">Focus Mode</h5>
            <p>
              Eliminate distractions and stay focused on your goals with our
              customizable focus mode.
            </p>
            <button className="btn btn-text flex items-center px-0">
              <span>Learn more</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="py-12">
            <Goal className="h-6 w-6" />
            <h5 className="text-lg font-bold py-2">Goal Setting</h5>
            <p>
              Set and achieve your long-term goals with our goal-setting
              framework.
            </p>
            <button className="btn btn-text flex items-center px-0">
              <span>Learn more</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
