import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import data from '../data';

const Footer = () => {
  const text = "Let's Connect";
  const textArray = text.split('');

  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-900 text-white">
      {/* Animated Heading */}
      <motion.div
        className="text-3xl sm:text-4xl font-bold font-dancing text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        {textArray.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05, duration: 1 }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Social Icons and Email */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 mt-6">
        <motion.a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl sm:text-3xl"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href={`mailto:${data.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-white"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="text-2xl sm:text-3xl" />
          <span className="text-sm sm:text-lg italic">{data.email}</span>
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;
