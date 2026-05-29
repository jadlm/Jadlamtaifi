import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: "SmartLifeMaroc",
      description: "Full-stack smart home e-commerce platform built with modern web technologies. Features product management, user authentication, and responsive design.",
      tech: ["TypeScript", "React", "Node.js", "MongoDB"],
      category: "Full-Stack",
      repo: "SmartLifeMaroc",
      color: "cyan"
    },
    {
      id: 2,
      title: "ClickShopMA",
      description: "Moroccan e-commerce marketplace with product listings, shopping cart, and payment integration. Clean UI with focus on user experience.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      category: "Full-Stack",
      repo: "ClickShopMA",
      color: "magenta"
    },
    {
      id: 3,
      title: "jadcosmetics",
      description: "Premium cosmetics e-commerce store with product catalog, cart functionality, and modern design aesthetic.",
      tech: ["JavaScript", "React", "CSS"],
      category: "Frontend",
      repo: "jadcosmetics",
      color: "blue"
    },
    {
      id: 4,
      title: "Blog-jad",
      description: "Personal blog platform with article management, responsive design, and dynamic content rendering.",
      tech: ["JavaScript", "React", "Node.js"],
      category: "Full-Stack",
      repo: "Blog-jad",
      color: "cyan"
    },
    {
      id: 5,
      title: "MaintenanceApp",
      description: "Desktop maintenance management application for tracking equipment, scheduling repairs, and generating reports.",
      tech: ["C#", ".NET", "SQL Server"],
      category: "Desktop",
      repo: "MaintenanceApp-",
      color: "magenta"
    },
    {
      id: 6,
      title: "PORTFOLIO",
      description: "Creative developer portfolio showcasing projects and skills with modern animations and interactions.",
      tech: ["JavaScript", "React", "CSS"],
      category: "Frontend",
      repo: "PORTFOLIO",
      color: "blue"
    }
  ];

  const categories = ['All', 'Frontend', 'Full-Stack', 'Desktop'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="section-title mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Featured </span>
              <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-magenta-500 rounded-full mx-auto md:mx-0" />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                    : 'glass text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                data-cursor-hover
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    // Calculate mouse position relative to card center (-1 to 1)
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x, y });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: 0, y: 0 });
      }}
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered 
          ? `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${-mousePos.y * 10}deg)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
        transition: isHovered ? 'none' : 'transform 0.5s ease'
      }}
      className="glass-strong rounded-3xl p-1 relative overflow-hidden group h-full"
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent group-hover:from-white/20 transition-colors" />
      
      {/* Hover Spotlight */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay z-10"
        style={{
          background: `radial-gradient(circle 200px at ${(mousePos.x + 1) * 50}% ${(mousePos.y + 1) * 50}%, rgba(255,255,255,0.15), transparent)`
        }}
      />

      <div className="bg-[#0a0a0a] rounded-[22px] p-6 h-full flex flex-col relative z-20">
        <div className="flex justify-between items-start mb-6">
          <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${
            project.color === 'cyan' ? 'text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.1)]' :
            project.color === 'magenta' ? 'text-magenta-400 shadow-[0_0_15px_rgba(255,0,229,0.1)]' :
            'text-blue-400 shadow-[0_0_15px_rgba(77,124,254,0.1)]'
          }`}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <a 
            href={`https://github.com/jadlm/${project.repo}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors"
            data-cursor-hover
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
        </div>

        <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map(t => (
            <span key={t} className="text-xs font-mono text-gray-300 px-2 py-1 rounded bg-white/5 border border-white/5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
