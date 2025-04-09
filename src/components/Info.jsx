import {motion} from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import data from '../data'

const Info = () =>{

    const text = data.text;
    const textArray = text.split('');

    return(
        <div className="flex flex-col items-center justify-center p-8 min-h-screen">
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

      <div className="flex space-x-6 mt-6">
        <motion.a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl"
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
              delay: 0,
              repeat: Infinity,
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
            animate={{ y: [0, -10, 0] }} 
            transition={{
              duration: 1,
              delay: 1.2, 
              repeat: Infinity, 
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
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
              delay: 2.4, 
              repeat: Infinity, 
              ease: 'easeInOut',
            }}
          >
            <FaLinkedin />
          </motion.div>
        </motion.a>
      </div>
      </div>
    )
}

export default Info;