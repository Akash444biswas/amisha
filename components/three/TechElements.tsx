'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Text, Float } from '@react-three/drei';

interface FloatingTextProps {
  text: string;
  position: [number, number, number];
  scale?: number;
  color?: string;
}

function FloatingText({ text, position, scale = 1, color = '#88ccff' }: FloatingTextProps) {
  const textRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (textRef.current) {
      const time = state.clock.getElapsedTime();
      textRef.current.position.y = initialY + Math.sin(time + position[0]) * 0.2;
      textRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        ref={textRef}
        fontSize={0.5 * scale}
        position={position}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="sans-serif"
        characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.+-"
      >
        {text}
      </Text>
    </Float>
  );
}

function ParticleField() {
  const count = 500;
  const particlesRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;
      
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    
    return { positions, velocities };
  }, []);

  useFrame(() => {
    if (!particlesRef.current) return;
    
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] += particles.velocities[i];
      positions[i + 1] += particles.velocities[i + 1];
      positions[i + 2] += particles.velocities[i + 2];
      
      // Boundary check and reset
      if (Math.abs(positions[i]) > 10) particles.velocities[i] *= -1;
      if (Math.abs(positions[i + 1]) > 10) particles.velocities[i + 1] *= -1;
      if (Math.abs(positions[i + 2]) > 10) particles.velocities[i + 2] *= -1;
    }
    
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
          args={[particles.positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#88ccff" transparent opacity={0.6} />
    </points>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);
  const count = 50;

  const lines = useMemo(() => {
    const positions = new Float32Array(count * 6);
    const colors = new Float32Array(count * 6);
    
    for (let i = 0; i < count; i++) {
      const i6 = i * 6;
      positions[i6] = (Math.random() - 0.5) * 20;
      positions[i6 + 1] = (Math.random() - 0.5) * 20;
      positions[i6 + 2] = (Math.random() - 0.5) * 20;
      positions[i6 + 3] = (Math.random() - 0.5) * 20;
      positions[i6 + 4] = (Math.random() - 0.5) * 20;
      positions[i6 + 5] = (Math.random() - 0.5) * 20;
      
      const color = new THREE.Vector3(0.5, 0.8, 1);
      colors[i6] = color.x;
      colors[i6 + 1] = color.y;
      colors[i6 + 2] = color.z;
      colors[i6 + 3] = color.x;
      colors[i6 + 4] = color.y;
      colors[i6 + 5] = color.z;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const positions = linesRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count * 6; i += 6) {
      positions[i + 1] += Math.sin(time + i) * 0.01;
      positions[i + 4] += Math.sin(time + i + 3) * 0.01;
    }
    
    linesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count * 2}
          array={lines.positions}
          itemSize={3}
          args={[lines.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count * 2}
          array={lines.colors}
          itemSize={3}
          args={[lines.colors, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial vertexColors transparent opacity={0.4} />
    </lineSegments>
  );
}

export function TechElements() {
  return (
    <>
      <ParticleField />
      <ConnectionLines />
      <FloatingText text="AI" position={[-4, 2, -2]} scale={1.2} />
      <FloatingText text="ML" position={[4, 3, -3]} />
      <FloatingText text="React" position={[-3, -2, -1]} />
      <FloatingText text="Next.js" position={[3, -1, -2]} />
      <FloatingText text="TypeScript" position={[0, 4, -4]} scale={0.8} />
      <FloatingText text="Neural Networks" position={[-2, 1, -5]} scale={0.7} />
    </>
  );
} 