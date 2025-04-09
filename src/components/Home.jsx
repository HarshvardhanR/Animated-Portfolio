import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import data from '../data';

const COLORS = data.colors;

const Home = () => {
  const text = data.text;
  const color = useMotionValue(COLORS[0]);
  const bgImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  const textArray = text.split('');

  useEffect(() => {
    const colorAnimation = animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });

    return () => colorAnimation.stop();
  }, [color]);

  return (
    <motion.div
      style={{ backgroundImage: bgImage }}
      className="flex flex-col items-center justify-center p-8 min-h-screen"
    >
      <div className="text-6xl font-bold text-white font-dancing">
        {textArray.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Animated Icons */}
      <div className="flex space-x-6 mt-6">
        <motion.a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl"
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }} // Popping up and down effect
            transition={{
              duration: 1,
              delay: 0, // Starts immediately
              repeat: Infinity, // Do not repeat animation
              ease: 'easeInOut',
            }}
          >
            <FaGithub />
          </motion.div>
        </motion.a>

        <motion.a
          href={data.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl"
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }} // Popping up and down effect
            transition={{
              duration: 1,
              delay: 1.2, // Starts after 1.2 seconds (after GitHub animation)
              repeat: Infinity, // Do not repeat animation
              ease: 'easeInOut',
            }}
          >
            <FaCode />
          </motion.div>
        </motion.a>

        <motion.a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl"
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }} // Popping up and down effect
            transition={{
              duration: 1,
              delay: 2.4, // Starts after 2.4 seconds (after LeetCode animation)
              repeat: Infinity, // Do not repeat animation
              ease: 'easeInOut',
            }}
          >
            <FaLinkedin />
          </motion.div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Home;
