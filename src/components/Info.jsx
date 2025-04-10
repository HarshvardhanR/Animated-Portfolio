import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import data from '../data';

const Info = () => {
  const text = data.text;
  const textArray = text.split('');

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 sm:px-6 md:px-8 min-h-screen">
      {/* Animated Text */}
      <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-white font-dancing text-center break-words max-w-screen-sm sm:max-w-screen-md">
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

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
        {/* GitHub */}
        <motion.a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl sm:text-4xl"
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FaGithub />
          </motion.div>
        </motion.a>

        {/* LeetCode */}
        <motion.a
          href={data.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl sm:text-4xl"
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
              delay: 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FaCode />
          </motion.div>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl sm:text-4xl"
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
              delay: 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FaLinkedin />
          </motion.div>
        </motion.a>
      </div>
    </div>
  );
};

export default Info;
