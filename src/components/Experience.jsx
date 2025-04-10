import React from 'react';
import { motion } from 'framer-motion';
import data from '../data';

const Experience = () => {
  const exp = data.experience;
  const text = "Experience";
  const splitText = text.split("");

  return (
    <div className="bg-gray-900 px-4 py-12 mb-12">
      {/* Animated Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-dancing">
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

      {/* Experience Cards */}
      <div className="flex flex-col items-center gap-12">
        {exp.map((job, index) => (
          <motion.div
            key={index}
            className="w-full max-w-6xl bg-gray-800 rounded-xl p-6 flex flex-col md:flex-row gap-6 md:gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Role & Company Info */}
            <div className="md:w-1/3 text-white flex flex-col justify-center font-roboto space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold">{job.role}</h2>
              <h3 className="text-base sm:text-lg font-medium">{job.company}</h3>
              <p className="text-sm text-gray-400">{job.location}</p>
              <p className="text-sm text-gray-400">{job.date}</p>
            </div>

            {/* Divider Line */}
            <motion.div
              className="h-1 md:h-auto md:w-1 bg-white rounded-full self-center md:self-auto"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              style={{ transformOrigin: 'top' }}
            />

            {/* Description */}
            <div className="md:w-2/3 text-white font-roboto text-sm sm:text-base">
              <p>{job.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
