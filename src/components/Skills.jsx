import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "cyan",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      color: "magenta",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "C#", ".NET"]
    },
    {
      title: "Tools & DevOps",
      color: "blue",
      skills: ["Git", "GitHub", "Docker", "Vercel", "VS Code", "Figma", "Webpack", "Vite"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Technical </span>
            <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-magenta-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-strong rounded-3xl p-8 relative overflow-hidden group"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8 relative z-10">
                <div className={`w-3 h-3 rounded-full mr-4 ${
                  category.color === 'cyan' ? 'bg-cyan-400 shadow-[0_0_10px_#00f0ff]' :
                  category.color === 'magenta' ? 'bg-magenta-400 shadow-[0_0_10px_#ff00e5]' :
                  'bg-blue-400 shadow-[0_0_10px_#4d7cfe]'
                }`} />
                <h3 className="text-2xl font-display font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 relative z-10"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full glass bg-white/5 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative Background */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${
                category.color === 'cyan' ? 'bg-cyan-500' :
                category.color === 'magenta' ? 'bg-magenta-500' :
                'bg-blue-500'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
