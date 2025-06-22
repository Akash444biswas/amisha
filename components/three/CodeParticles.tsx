"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointsMaterial } from "three";
import * as THREE from "three";

interface CodeParticlesProps {
  scrollY: number;
}

export function CodeParticles({ scrollY }: CodeParticlesProps) {
  const pointsRef = useRef<Points>(null);
  const points2Ref = useRef<Points>(null);
  const materialRef = useRef<PointsMaterial>(null);
  const material2Ref = useRef<PointsMaterial>(null);

  const { particlesPosition, particlesPosition2 } = useMemo(() => {
    const positions = new Float32Array(800 * 3);
    const positions2 = new Float32Array(600 * 3);

    // Primary particle system
    for (let i = 0; i < 800; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40; // z
    }

    // Secondary particle system
    for (let i = 0; i < 600; i++) {
      positions2[i * 3] = (Math.random() - 0.5) * 80;     // x
      positions2[i * 3 + 1] = (Math.random() - 0.5) * 60; // y
      positions2[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }

    return { particlesPosition: positions, particlesPosition2: positions2 };
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.015;
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      pointsRef.current.position.z = scrollY * -0.002;
    }

    if (points2Ref.current) {
      points2Ref.current.rotation.y = -time * 0.01;
      points2Ref.current.rotation.z = time * 0.005;
      points2Ref.current.position.z = scrollY * -0.001;
    }

    if (materialRef.current) {
      materialRef.current.opacity = 0.4 + Math.sin(time * 2) * 0.2;
    }

    if (material2Ref.current) {
      material2Ref.current.opacity = 0.3 + Math.cos(time * 1.5) * 0.15;
    }
  });

  return (
    <>
      {/* Primary particle system */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={800}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          ref={materialRef}
          color="#3b82f6"
          size={0.015}
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Secondary particle system */}
      <points ref={points2Ref}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={600}
            array={particlesPosition2}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          ref={material2Ref}
          color="#8b5cf6"
          size={0.01}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}
