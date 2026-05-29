import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const duration = 450;
    const start = performance.now();
    let frameId;

    const tick = (now) => {
      const nextProgress = Math.min(((now - start) / duration) * 100, 100);
      setProgress(Math.round(nextProgress));

      if (nextProgress < 100) {
        frameId = requestAnimationFrame(tick);
        return;
      }

      setIsLoaded(true);
      window.setTimeout(() => {
        if (onComplete) onComplete();
      }, 350);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {/* Top Half Exit Animation */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-[#050505] z-10"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          />
          
          {/* Bottom Half Exit Animation */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#050505] z-10"
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          />

          <div className="relative z-20 flex flex-col items-center w-full max-w-sm px-6">
            {/* Logo */}
            <motion.div
              animate={{
                textShadow: [
                  "0 0 10px rgba(0, 240, 255, 0.5)",
                  "0 0 20px rgba(255, 0, 229, 0.5)",
                  "0 0 10px rgba(0, 240, 255, 0.5)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-6xl font-display font-bold tracking-tighter mb-12"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">J</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-400 to-purple-500">L</span>
            </motion.div>

            {/* Progress Container */}
            <div className="w-full">
              <div className="flex justify-between text-sm font-mono text-gray-400 mb-3">
                <span>SYSTEM INIT</span>
                <span>{progress}%</span>
              </div>
              
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-magenta-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
