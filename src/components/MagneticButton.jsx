import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, className = '', href, onClick, ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    setPosition({ x: distX * 0.3, y: distY * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Tag = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        className={`
          relative inline-flex items-center justify-center
          px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase
          transition-all duration-300 cursor-pointer
          hover:shadow-[0_0_30px_rgba(0,240,255,0.4),0_0_60px_rgba(255,0,229,0.2)]
          active:scale-95
          ${className}
        `}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
