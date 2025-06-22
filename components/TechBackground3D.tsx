'use client';

import { useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { TechElements } from './three/TechElements';
import { useTheme } from 'next-themes';

function Loader() {
  return <div className="fixed inset-0 bg-background" />;
}

export function TechBackground3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      scrollY.current = window.scrollY;
      containerRef.current.style.transform = `translateY(${scrollY.current * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{ 
        willChange: 'transform',
        pointerEvents: 'none',
      }}
    >
      <Canvas
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        style={{
          background: theme === 'dark' ? '#000' : '#fff',
        }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <TechElements />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
} 