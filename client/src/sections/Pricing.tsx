"use client";
import Tick from "@/assets/check.svg";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="section-header">
          <h2 className="section-heading">Pricing</h2>
          <p>
            Free for lifetime, Upgrade for better task management, better
            productivity and exclusive features
          </p>
        </div>
        <div className="py-24 md:flex md:justify-center max-lg:flex-col md:items-center lg:justify-between lg:items-end">
          {pricingTiers.map(
            (
              { title, inverse, monthlyPrice, buttonText, features, popular },
              index
            ) => (
              <div
                key={index}
                className={`shadow-lg rounded-3xl p-6 px-10 my-12 ${
                  inverse ? "bg-black text-white" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={`py-6 font-bold ${
                      inverse ? "text-white/60" : "text-black/60"
                    } text-xl`}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="text-badge border-slate-800 ">
                      <motion.span
                        className="bg-[linear-gradient(to_right,#DD7DDf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#DD7DDf,#e1cd86,#bbcb92,#71c2ef,#3bffff)] [background-size:200%] text-transparent bg-clip-text font-medium"
                        animate={{
                          backgroundPositionX: "-200%",
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 2,
                          ease: "linear",
                        }}
                      >
                        Most Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="font-bold pb-12">
                  <span className="text-6xl">${monthlyPrice}</span>
                  <span
                    className={`${
                      !inverse ? "text-black/60" : "text-white/60"
                    }`}
                  >
                    /monthly
                  </span>
                </div>
                <button
                  className={`btn ${
                    inverse && "bg-white text-black"
                  } btn-primary w-full mb-12`}
                >
                  {buttonText}
                </button>
                <div>
                  {features.map((feature, index) => (
                    <div className="flex py-2 gap-6" key={index}>
                      <Tick className="h-6 w-6" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
