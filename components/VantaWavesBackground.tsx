"use client";

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    VANTA: {
      WAVES: (options: {
        el: HTMLElement;
        mouseControls: boolean;
        touchControls: boolean;
        gyroControls: boolean;
        minHeight: number;
        minWidth: number;
        scale: number;
        scaleMobile: number;
        color: number;
        shininess: number;
        waveHeight: number;
        waveSpeed: number;
        zoom: number;
        backgroundAlpha: number;
      }) => { destroy: () => void };
    };
    THREE: object;
  }
}

interface VantaWavesBackgroundProps {
  className?: string;
}

export function VantaWavesBackground({ className = "" }: VantaWavesBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<{ destroy: () => void; resizeHandler?: () => void } | null>(null);
  const [mounted, setMounted] = useState(false);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const checkScripts = () => {
      const threeLoaded = !!window.THREE;
      const vantaLoaded = !!window.VANTA;
      const wavesLoaded = !!(window.VANTA && window.VANTA.WAVES);

      console.log('📊 Script Status:', {
        THREE: threeLoaded,
        VANTA: vantaLoaded,
        WAVES: wavesLoaded
      });

      if (threeLoaded && vantaLoaded && wavesLoaded) {
        console.log('✅ All scripts loaded successfully');
        setScriptsLoaded(true);
        return true;
      }
      return false;
    };

    // Check if scripts are already loaded
    if (checkScripts()) {
      return;
    }

    // Wait for scripts to load with polling
    let attempts = 0;
    const maxAttempts = 100;
    const checkInterval = setInterval(() => {
      attempts++;
      console.log(`🔄 Checking scripts... Attempt ${attempts}/${maxAttempts}`);

      if (checkScripts()) {
        clearInterval(checkInterval);
      } else if (attempts >= maxAttempts) {
        console.error('❌ Failed to load Vanta scripts after maximum attempts');
        clearInterval(checkInterval);
      }
    }, 100);

    return () => {
      clearInterval(checkInterval);
    };
  }, [mounted]);

  useEffect(() => {
    if (!scriptsLoaded || !vantaRef.current || vantaEffect.current) return;

    // Patch: Ensure THREE.DoubleSide is defined
    if (window.THREE && typeof window.THREE.DoubleSide === 'undefined') {
      // @ts-ignore
      window.THREE.DoubleSide = 2;
    }

    try {
      console.log('🌊 Initializing Vanta Waves...');

      vantaEffect.current = window.VANTA.WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 0.80,
        color: 0x0a0a0a,
        shininess: 25.00,
        waveHeight: 12.00,
        waveSpeed: 0.60,
        zoom: 0.75,
        backgroundAlpha: 1.0
      });

      // Ensure the canvas stays behind content
      setTimeout(() => {
        const canvas = vantaRef.current?.querySelector('canvas');
        if (canvas) {
          canvas.style.position = 'fixed';
          canvas.style.top = '0';
          canvas.style.left = '0';
          canvas.style.zIndex = '-1000';
          canvas.style.pointerEvents = 'none';
          canvas.style.width = '100vw';
          canvas.style.height = '100vh';
          canvas.classList.add('vanta-canvas');
        }
      }, 100);

      console.log('✅ Vanta Waves initialized successfully');

      // Add resize handler to maintain background positioning
      const handleResize = () => {
        const canvas = vantaRef.current?.querySelector('canvas');
        if (canvas) {
          canvas.style.width = '100vw';
          canvas.style.height = '100vh';
        }
      };

      window.addEventListener('resize', handleResize);

      // Store the cleanup function
      vantaEffect.current.resizeHandler = handleResize;
    } catch (error) {
      console.error('❌ Error initializing Vanta Waves:', error);
    }

    return () => {
      if (vantaEffect.current) {
        try {
          // Remove resize handler
          if (vantaEffect.current.resizeHandler) {
            window.removeEventListener('resize', vantaEffect.current.resizeHandler);
          }

          vantaEffect.current.destroy();
          vantaEffect.current = null;
          console.log('🧹 Vanta effect destroyed');
        } catch (error) {
          console.error('❌ Error destroying Vanta effect:', error);
        }
      }
    };
  }, [scriptsLoaded]);

  if (!mounted || !scriptsLoaded) {
    return (
      <div
        className={`fixed inset-0 wave-fallback vanta-waves-bg ${className}`}
        style={{
          zIndex: -1000,
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          width: '100vw',
          height: '100vh',
        }}
      />
    );
  }

  return (
    <div
      ref={vantaRef}
      className={`fixed inset-0 vanta-waves-bg ${className}`}
      style={{
        zIndex: -1000,
        background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
