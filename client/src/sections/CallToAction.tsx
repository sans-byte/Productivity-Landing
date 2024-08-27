"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Cloud from "@/assets/Cloud.png";
import Plant from "@/assets/Plant.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
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
            <motion.img
              src={Cloud.src}
              alt="cloud"
              width={500}
              className="absolute bottom-[-100px] right-[-100px] max-lg:right-[-230px]"
              style={{
                translateY,
              }}
            />
            <motion.img
              src={Plant.src}
              alt="plant"
              width={500}
              className="absolute top-[-300px] left-[-100px] max-lg:left-[-200px]"
              style={{
                translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
