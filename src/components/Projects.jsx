import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import data from '../data';
import '../index.css';

const Projects = () => {
  const projects = data.projects;
  const text = "Projects";
  const splitText = text.split("");

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-6xl font-bold text-white font-dancing">
          {splitText.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </h2>
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-16 px-4">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className="flex items-center justify-center w-full max-w-6xl bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className={`flex w-full items-stretch ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-x-12`}>
                
                {/* Image Section */}
                <motion.div
                  className="w-1/2"
                  initial={{ x: isEven ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative w-full h-96 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover ${isEven ? 'rounded-l-lg' : 'rounded-r-lg'}`}
                      style={{
                        animation: "rotateEarth 10s linear infinite",
                      }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="w-1 bg-white rounded-full"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  style={{ transformOrigin: 'top' }}
                />

                {/* Text Section */}
                <motion.div
                  className="w-1/2 p-6 flex flex-col justify-center"
                  initial={{ x: isEven ? 100 : -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-semibold text-white font-roboto">{project.title}</h3>
                  <p className="text-gray-400 mt-2 text-white font-roboto">{project.description}</p>

                  <div className="flex gap-6 mt-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl"
                        whileHover={{ scale: 1.2 }}
                      >
                        <FaGithub />
                      </motion.a>
                    )}

                    {project.svgs && project.svgs.map((Svg, svgIndex) => (
                      <motion.div
                        key={svgIndex}
                        className="text-white text-2xl"
                        whileHover={{ scale: 1.2 }}
                      >
                        <img src={Svg} alt={`SVG ${svgIndex}`} className="w-8 h-8" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
