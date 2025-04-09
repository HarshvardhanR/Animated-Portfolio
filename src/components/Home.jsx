import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate, useSpring } from 'framer-motion';
import data from '../data';
import Projects from './Projects';
import Info from './Info';
import TechStack from './TechStack';

const COLORS = data.colors;

const Home = () => {
  const color = useMotionValue(COLORS[0]);
  const bgImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 500, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 500, damping: 20 });

  useEffect(() => {
    const colorAnimation = animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });

    return () => colorAnimation.stop();
  }, [color]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY); 
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove} 
      style={{
        backgroundImage: bgImage,
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          position: 'fixed',
          top: -75,
          left: -75,
          x: smoothX,
          y: smoothY, 
          width: 150,
          height: 150, 
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 80%)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)', 
          zIndex: 0, 
        }}
      />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Info />
        <TechStack />
        <Projects />
      </div>
    </motion.div>
  );
};

export default Home;
