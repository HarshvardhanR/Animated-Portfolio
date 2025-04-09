import { motion } from "framer-motion";
import Lottie from "lottie-react";
import runningMan from "../assets/running-man.json";

const LoadingScreen = () => {
  return (
      <motion.div
        className="flex flex-col items-center justify-center h-screen bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-center justify-center"
        >
          <Lottie animationData={runningMan} loop={true} style={{ width: "96px", height: "96px" }} />
        </motion.div>
        <motion.h1
              className="mt-4 text-2xl font-lobster"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Loading 
              <motion.span
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0], 
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 3, 
                  delay: 1,
                }}
              >
                .
              </motion.span>
              <motion.span
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 3,
                  delay: 1.5,
                }}
              >
                .
              </motion.span>
              <motion.span
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 3,
                  delay: 2,
                }}
              >
                .
              </motion.span>
            </motion.h1>
</motion.div>
  );
};

export default LoadingScreen;
