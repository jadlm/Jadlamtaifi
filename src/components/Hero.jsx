import { motion } from 'framer-motion';

const Hero = () => {
  const text = "Jad Lamtaifi".split("");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-500/20 rounded-full blur-[120px] mix-blend-screen animate-[float_10s_ease-in-out_infinite_reverse]" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block px-4 py-1.5 rounded-full border border-white/10 glass bg-white/5"
        >
          <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent uppercase tracking-wider">
            Available for new opportunities
          </span>
        </motion.div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          {text.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          I craft pixel-perfect, engaging, and accessible digital experiences bridging design and engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
            data-cursor-hover
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-magenta-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View My Work</span>
          </a>
          <a
            href="#contact"
            className="group relative px-8 py-4 glass border border-white/20 text-white font-semibold rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-white/40"
            data-cursor-hover
          >
            <span className="relative z-10">Contact Me</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-magenta-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
