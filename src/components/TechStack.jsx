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

const hoverVariant = {
  scale: 1.1,
  x: 10,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

const Section = ({ items, title }) => (
  <div className="space-y-8">
    {/* Section Title */}
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-white font-inter italic">
        {title.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </h3>
    </motion.div>

    {/* Stack Icons */}
    <motion.div
      className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
    >
      {items.map((src, i) => (
        <motion.img
          key={src}
          src={src}
          alt=""
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          custom={i}
          variants={itemVariants}
          whileHover={hoverVariant}
        />
      ))}
    </motion.div>
  </div>
);

const TechStack = () => {
  const text = "Tech Stack";

  return (
    <div className="text-white px-4 py-12 sm:px-6 md:px-12 lg:px-24 space-y-12">
      {/* Main Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-dancing text-white">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h2>
      </motion.div>

      {/* Skill Sections */}
      <Section items={Object.values(data.programmingLanguages)} title="Programming Languages" />
      <Section items={Object.values(data.frameworksAndLibraries)} title="Frameworks & Libraries" />
      <Section items={Object.values(data.developerTools)} title="Developer Tools" />
      <Section items={Object.values(data.databases)} title="Databases" />
      <Section items={Object.values(data.devopsAndCloud)} title="DevOps & Cloud" />
    </div>
  );
};

export default TechStack;
