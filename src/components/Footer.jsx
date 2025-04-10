import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import data from '../data'; // Assuming this contains the necessary links

const Footer = () => {
  const text = "Let's Connect"; // You can change this or fetch it from data
  const textArray = text.split('');

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-900 text-white">
      {/* Animated "Let's Connect" text */}
      <div className="text-4xl font-bold font-dancing">
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

      {/* Social Media Links */}
      <div className="flex space-x-6 mt-6">
        {/* LinkedIn */}
        <motion.a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl"
        >
          <FaLinkedin />
        </motion.a>

        {/* Email */}
        <motion.a
          href={`mailto:${data.email}`} // Correctly formatted mailto link
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl flex items-center space-x-2" // Added flex and space for proper alignment
        >
          <FaEnvelope />
          {/* Display email text */}
          <span className="text-lg italic">{data.email}</span>
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;
