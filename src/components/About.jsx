import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">About </span>
            <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-magenta-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-strong rounded-3xl p-8 md:p-12 relative group overflow-hidden"
          >
            {/* Animated border glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-magenta-500/0 group-hover:from-cyan-500/10 group-hover:to-magenta-500/10 transition-colors duration-500" />
            
            <h3 className="text-2xl font-display font-semibold mb-6 text-white relative z-10">
              Transforming ideas into <span className="text-gradient">digital reality</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 leading-relaxed relative z-10">
              <p>
                I'm Jad Lamtaifi, a passionate Full-Stack Developer from Morocco specializing in building exceptional digital experiences. With expertise spanning React, Next.js, TypeScript, and modern web technologies, I craft pixel-perfect interfaces that merge aesthetics with performance.
              </p>
              <p>
                My journey in tech is driven by a constant desire to learn and innovate. Whether I'm designing complex backend architectures or building fluid, interactive frontend interfaces, I focus on delivering code that is both elegant and maintainable.
              </p>
              <p>
                Currently, I'm exploring the intersection of creative web development and 3D experiences, constantly pushing the boundaries of what's possible in the browser.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <StatCard 
              number="46+" 
              label="Projects Completed" 
              delay={0.3} 
              color="cyan"
            />
            <StatCard 
              number="5+" 
              label="Years Experience" 
              delay={0.4} 
              color="magenta"
            />
            <StatCard 
              number="20+" 
              label="Technologies Mastered" 
              delay={0.5} 
              color="blue"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label, delay, color }) => {
  const colorMap = {
    cyan: "from-cyan-400 to-blue-500",
    magenta: "from-magenta-400 to-purple-500",
    blue: "from-blue-400 to-cyan-400"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl p-8 flex flex-col justify-center items-center text-center group hover:-translate-y-2 transition-transform duration-300"
    >
      <span className={`text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r ${colorMap[color]} mb-2`}>
        {number}
      </span>
      <span className="text-gray-400 font-medium uppercase tracking-wider text-sm">
        {label}
      </span>
    </motion.div>
  );
};

export default About;
