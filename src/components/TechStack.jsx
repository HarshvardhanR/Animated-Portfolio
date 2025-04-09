import React from "react";
import { motion } from "framer-motion";
import data from "../data";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: i * 0.05,
    },
  }),
};

const hoverVariants = {
  hover: {
    scale: 1.1,
    x: 10, 
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const Section = ({ items }) => (
  <motion.div
    key={items.join("-")}
    className="flex items-center justify-center"
    variants={containerVariants}
    initial="hidden"
    animate="show"
    whileInView="show"
    viewport={{ once: false, amount: 0.5 }}
  >
    {items.map((src, i) => (
      <motion.img
        key={src} // Ensure that every item has a unique key to trigger the animation reset
        src={src}
        alt=""
        className="w-16 h-16 object-contain mr-24"
        custom={i}
        variants={itemVariants}
        whileInView="show"
        initial="hidden"
        whileHover={hoverVariants.hover} // Apply hover animation directly
      />
    ))}
  </motion.div>
);

const TechStack = () => {
  const text = "Tech Stack";
  return (
    <div className="text-white p-8 space-y-12">
      {/* Title Animation */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-6xl font-bold text-white font-dancing">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                opacity: { delay: index * 0.1, duration: 0.5 },
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h2>
      </motion.div>

      {/* Tech Stack Sections */}
      <Section items={Object.values(data.programmingLanguages)} />
      <Section items={Object.values(data.frameworksAndLibraries)} />
      <Section items={Object.values(data.developerTools)} />
      <Section items={Object.values(data.databases)} />
      <Section items={Object.values(data.devopsAndCloud)} />
    </div>
  );
};

export default TechStack;
