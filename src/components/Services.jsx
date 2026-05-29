import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with React, Next.js, and modern frameworks. Pixel-perfect, responsive, and performant.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "cyan"
    },
    {
      title: "E-Commerce Solutions",
      description: "End-to-end e-commerce platforms with payment integration, inventory management, and beautiful storefronts.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "magenta"
    },
    {
      title: "UI/UX Design",
      description: "Intuitive interfaces designed with user experience in mind. From wireframes to polished designs.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Full-Stack Development",
      description: "Complete solutions from database to frontend. RESTful APIs, authentication, and scalable architecture.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "cyan"
    }
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">My </span>
            <span className="text-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-magenta-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass p-1"
            >
              {/* Animated Gradient Border Layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="bg-[#0a0a0a]/90 backdrop-blur-xl rounded-[22px] p-8 md:p-10 h-full relative z-10 hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/10 ${
                  service.color === 'cyan' ? 'text-cyan-400 bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]' :
                  service.color === 'magenta' ? 'text-magenta-400 bg-magenta-500/10 group-hover:shadow-[0_0_20px_rgba(255,0,229,0.3)]' :
                  'text-blue-400 bg-blue-500/10 group-hover:shadow-[0_0_20px_rgba(77,124,254,0.3)]'
                } transition-all duration-300 group-hover:scale-110`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
