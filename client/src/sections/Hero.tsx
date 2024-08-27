"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Gear from "@/assets/Gear.png";
import Image from "next/image";
import Screw from "@/assets/Screw.png";
import Bulb from "@/assets/Light Bulb.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={heroRef} className="section-gradient-bg">
      <div className="container md:flex items-center">
        <div className="md:flex-1">
          <div className="text-badge">Version 3.0 is here</div>
          <h1 className="text-6xl md:text-8xl header-text mt-6 md:w-[438px]">
            Focus On Forward
          </h1>
          <p className="text-xl tracking-tight mt-6">
            Boost your productivity and achieve more in less time. Stay focused,
            prioritize tasks, and manage your day with ease. Unlock your full
            potential and make the most of your time."
          </p>
          <div className="flex mt-8 gap-3 items-center">
            <button className="btn btn-primary">Get for free</button>
          </div>
        </div>
        <div className="md:h-[648px] md:flex-1 relative">
          <motion.img
            src={Gear.src}
            alt="gear"
            height={1000}
            width={1000}
            className="rotate-[-45deg] md:absolute md:h-full md:w-auto md:max-w-none md:-left-20 lg:left-0"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            animate={{
              translateY: [-30, 30],
            }}
            style={{
              rotate: -40,
            }}
          />
          <motion.img
            src={Screw.src}
            alt="screw"
            height={200}
            width={200}
            className="rotate-[-120deg] hidden md:block"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={Bulb.src}
            alt="screw"
            height={300}
            width={300}
            className="absolute bottom-[-140px] right-[-80px] hidden md:block"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
