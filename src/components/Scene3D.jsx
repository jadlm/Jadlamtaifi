import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';

// The HTML tags we want to float in 3D space
const tags = [
  '<div/>', '</>', '<span/>', '<section/>', '<header/>', '<footer/>',
  '<article/>', '<button/>', '<a/>', '<img/>', '<input/>', '<form/>',
  '<h1/>', '<p/>', '<label/>', '<strong/>', '<nav/>', '<main/>',
  '<ul/>', '<li/>', 'HTML', 'CSS', 'JS', 'TS', 'React', 'Node'
];

const FloatingTags = ({ count = 24 }) => {
  const group = useRef();

  const items = useMemo(() => {
    return new Array(count).fill().map(() => {
      const tag = tags[Math.floor(Math.random() * tags.length)];
      const position = [
        (Math.random() - 0.5) * 24,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 20 - 2,
      ];
      const rotation = [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ];
      const scale = 0.8 + Math.random() * 1.2;
      const color = Math.random() > 0.5 ? '#00f0ff' : '#ff00e5';
      const speed = 0.3 + Math.random() * 0.7;
      const delay = Math.random() * 5;
      return { tag, position, rotation, scale, color, speed, delay };
    });
  }, [count]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.03;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.03;
    }
  });

  return (
    <group ref={group}>
      {items.map((item, index) => (
        <FloatingTag key={index} {...item} />
      ))}
    </group>
  );
};

const FloatingTag = ({ tag, position, rotation, scale, color, speed, delay }) => {
  const group = useRef();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002 * speed;
      group.current.rotation.x += 0.001 * speed;
    }
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={1}
      floatIntensity={2}
      position={position}
    >
      <group ref={group} rotation={rotation} scale={scale}>
        <Html center style={{ pointerEvents: 'none', transformStyle: 'preserve-3d', opacity: 0.6 }}>
          <span
            className="floating-html-tag"
            style={{
              color,
              borderColor: color,
              animationDelay: `${delay}s`,
            }}
          >
            {tag}
          </span>
        </Html>
      </group>
    </Float>
  );
};

const Scene3D = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSmallScreen = window.matchMedia('(max-width: 900px)').matches;
    const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const saveData = navigator.connection?.saveData;

    if (!prefersReducedMotion && !isSmallScreen && !hasCoarsePointer && !saveData) {
      const id = window.setTimeout(() => setEnabled(true), 900);
      return () => window.clearTimeout(id);
    }
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-15">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1.25]}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 5, 5]} intensity={0.35} />
        <pointLight position={[-5, -5, 5]} intensity={0.15} />
        <FloatingTags count={24} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
