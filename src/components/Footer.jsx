import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import data from '../data'; // Assuming this contains the necessary links

const Footer = () => {
  const text = "Let's Connect"; // You can change this or fetch it from data
  const textArray = text.split('');

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-900 text-white">
      <motion.div
        className="text-4xl font-bold font-dancing"
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

      <div className="flex space-x-6 mt-6">
        <motion.a
          href={data.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href={`mailto:${data.email}`} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl flex items-center space-x-2"
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
