import { motion } from 'framer-motion';

export default function SectionDivider({ className = '' }) {
  return (
    <div className={`relative w-full py-12 flex items-center justify-center ${className}`}>
      {/* Base line */}
      <div className="relative w-full max-w-4xl h-px">
        {/* Gradient background line */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #00f0ff 30%, #ff00e5 70%, transparent 100%)',
          }}
        />

        {/* Animated shimmer overlay */}
        <motion.div
          className="absolute inset-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, transparent 30%, #00f0ff 45%, #ffffff 50%, #ff00e5 55%, transparent 70%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0%', '-200% 0%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 h-px blur-sm"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, transparent 30%, #00f0ff 45%, #ffffff 50%, #ff00e5 55%, transparent 70%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['200% 0%', '-200% 0%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Center dot accent */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: '#00f0ff',
              boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff',
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>
    </div>
  );
}
