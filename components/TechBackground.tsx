'use client';

import { useEffect, useRef, useState } from 'react';

const BINARY_STRINGS = [
  '01001010',
  '10101101',
  '11001010',
  'AI',
  'ML',
  'React',
  'Next.js',
  '< / >',
  '{code}',
  '0101',
];

const MATRIX_CHARS = '01ABCDEF'.split('');

export function TechBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

    // Create floating elements
    const createFloatingElement = () => {
      if (!containerRef.current) return;
      
      const element = document.createElement('div');
      element.className = 'floating-element binary';
      element.textContent = BINARY_STRINGS[Math.floor(Math.random() * BINARY_STRINGS.length)];
      element.style.left = `${Math.random() * 100}%`;
      element.style.animationDuration = `${15 + Math.random() * 10}s`;
      element.style.opacity = '0';
      containerRef.current.appendChild(element);

      // Remove element after animation
      element.addEventListener('animationend', () => {
        if (element.parentNode === containerRef.current) {
          element.remove();
        }
      });
    };

    // Create matrix rain elements
    const createMatrixRain = () => {
      if (!containerRef.current) return;
      
      const element = document.createElement('div');
      element.className = 'matrix-rain';
      element.style.left = `${Math.random() * 100}%`;
      element.style.animationDuration = `${5 + Math.random() * 5}s`;
      
      // Create random string of matrix characters
      const chars = Array.from({ length: 10 }, () => 
        MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
      ).join('\n');
      
      element.textContent = chars;
      containerRef.current.appendChild(element);

      // Remove element after animation
      element.addEventListener('animationend', () => {
        if (element.parentNode === containerRef.current) {
          element.remove();
        }
      });
    };

    // Start animations
    const floatingInterval = setInterval(createFloatingElement, 2000);
    const matrixInterval = setInterval(createMatrixRain, 500);

    // Initial elements
    createFloatingElement();
    createMatrixRain();

    return () => {
      clearInterval(floatingInterval);
      clearInterval(matrixInterval);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="tech-background">
        <div className="circuit-grid" />
        <div ref={containerRef} className="floating-elements" />
      </div>
    );
  }

  return (
    <div className="tech-background">
      <div className="circuit-grid" />
      <div ref={containerRef} className="floating-elements" />
    </div>
  );
} 