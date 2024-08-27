"use client";
import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import Product from "@/assets/product.png";
import Lock from "@/assets/Lock.png";
import Sheild from "@/assets/Shield.png";
import Task from "@/assets/task.svg";
import Time from "@/assets/time.svg";
import Focus from "@/assets/focus.svg";
import Goal from "@/assets/goal.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const ProductShowcase = () => {
  const productShowcaseRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productShowcaseRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  return (
    <div
      ref={productShowcaseRef}
      className="bg-gradient-to-b from-[#eaeefe] to-[#5f8de46b] overflow-x-clip"
    >
      <div className="container py-24">
        <div className="section-header">
          <div className="text-badge">Be More Productive</div>
          <div className="section-heading">
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
            <motion.img
              src={Lock.src}
              alt="lock"
              height={280}
              width={280}
              className="absolute bottom-20 lg:bottom-52 left-[-140px]"
              style={{
                translateY,
              }}
            />
            <motion.img
              src={Sheild.src}
              alt="=shield"
              height={280}
              width={280}
              className="absolute top-0 lg:top-20 right-[-100px]"
              style={{
                translateY,
              }}
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
