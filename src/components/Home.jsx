import React, { useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import data from '../data';
import Projects from './Projects';
import Info from './Info'
import TechStack from './TechStack';

const COLORS = data.colors;

const Home = () => {
  const color = useMotionValue(COLORS[0]);
  const bgImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

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
    <motion.div style={{ backgroundImage: bgImage }}>
      <Info />
      <TechStack />
      <Projects />
    </motion.div>
  );
};

export default Home;
