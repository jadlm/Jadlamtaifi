import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Experience = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      title: "Freelance Full-Stack Developer",
      period: "2023 - Present",
      description: "Building custom web solutions for international clients. Specializing in e-commerce platforms, SaaS applications, and creative websites using React, Next.js, and modern web stack.",
      color: "cyan"
    },
    {
      title: "Frontend Developer",
      period: "2022 - 2023",
      description: "Developed responsive web applications and e-commerce platforms. Built SmartLifeMaroc, ClickShopMA, and multiple client projects with focus on performance and UX.",
      color: "magenta"
    },
    {
      title: "Web Developer & Designer",
      period: "2021 - 2022",
      description: "Started professional career building websites and web apps. Mastered HTML, CSS, JavaScript fundamentals and began exploring the React ecosystem.",
      color: "blue"
    }
  ];

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="section-title mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">My </span>
            <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-magenta-500 rounded-full mx-auto md:mx-0" />
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 via-magenta-500 to-blue-500 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <TimelineItem 
                key={idx} 
                experience={exp} 
                index={idx} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ experience, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Node Dot */}
      <div className="absolute left-[-33px] md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-white md:-translate-x-1/2 z-10 flex items-center justify-center">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, type: "spring" }}
          className={`w-2 h-2 rounded-full ${
            experience.color === 'cyan' ? 'bg-cyan-400 shadow-[0_0_10px_#00f0ff]' :
            experience.color === 'magenta' ? 'bg-magenta-400 shadow-[0_0_10px_#ff00e5]' :
            'bg-blue-400 shadow-[0_0_10px_#4d7cfe]'
          }`} 
        />
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full md:w-5/12 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}
      >
        <div className="glass-strong rounded-2xl p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 group">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono mb-4 border border-white/10 ${
            experience.color === 'cyan' ? 'text-cyan-300 bg-cyan-500/10' :
            experience.color === 'magenta' ? 'text-magenta-300 bg-magenta-500/10' :
            'text-blue-300 bg-blue-500/10'
          }`}>
            {experience.period}
          </span>
          <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
            {experience.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            {experience.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
