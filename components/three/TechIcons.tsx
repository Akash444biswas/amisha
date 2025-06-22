"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";

interface TechIconsProps {
  scrollY: number;
}

function CodeBrackets({ position, scale, speed }: { position: Vector3; scale: number; speed: number }) {
  const groupRef = useRef<any>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed * 0.01;
      groupRef.current.position.y = position.y + Math.sin(state.clock.elapsedTime * speed) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Left bracket */}
      <mesh position={[-0.3, 0, 0]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} />
      </mesh>
      <mesh position={[-0.3, 0.4, 0]}>
        <boxGeometry args={[0.3, 0.1, 0.1]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} />
      </mesh>
      <mesh position={[-0.3, -0.4, 0]}>
        <boxGeometry args={[0.3, 0.1, 0.1]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} />
      </mesh>
      
      {/* Right bracket */}
      <mesh position={[0.3, 0, 0]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} />
      </mesh>
      <mesh position={[0.3, 0.4, 0]}>
        <boxGeometry args={[0.3, 0.1, 0.1]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} />
      </mesh>
      <mesh position={[0.3, -0.4, 0]}>
        <boxGeometry args={[0.3, 0.1, 0.1]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function DatabaseIcon({ position, scale, speed }: { position: Vector3; scale: number; speed: number }) {
  const groupRef = useRef<any>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += speed * 0.005;
      groupRef.current.rotation.z += speed * 0.008;
      groupRef.current.position.x = position.x + Math.cos(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Database cylinders */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 8]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.5} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 8]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.5} />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 8]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

function CloudIcon({ position, scale, speed }: { position: Vector3; scale: number; speed: number }) {
  const groupRef = useRef<any>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed * 0.006;
      groupRef.current.position.z = position.z + Math.sin(state.clock.elapsedTime * speed) * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Cloud spheres */}
      <mesh position={[-0.2, 0, 0]}>
        <sphereGeometry args={[0.2, 8, 8]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.4} />
      </mesh>
      <mesh position={[0.1, 0.1, 0]}>
        <sphereGeometry args={[0.25, 8, 8]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.4} />
      </mesh>
      <mesh position={[0.3, -0.05, 0]}>
        <sphereGeometry args={[0.18, 8, 8]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export function TechIcons({ scrollY }: TechIconsProps) {
  const icons = useMemo(() => {
    const brackets = [];
    const databases = [];
    const clouds = [];
    
    // Generate code brackets
    for (let i = 0; i < 3; i++) {
      brackets.push({
        position: new Vector3(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10 - 8
        ),
        scale: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.5 + 0.3,
      });
    }
    
    // Generate database icons
    for (let i = 0; i < 2; i++) {
      databases.push({
        position: new Vector3(
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 8 - 6
        ),
        scale: Math.random() * 0.4 + 0.2,
        speed: Math.random() * 0.4 + 0.2,
      });
    }
    
    // Generate cloud icons
    for (let i = 0; i < 2; i++) {
      clouds.push({
        position: new Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 6 - 4
        ),
        scale: Math.random() * 0.6 + 0.4,
        speed: Math.random() * 0.3 + 0.2,
      });
    }
    
    return { brackets, databases, clouds };
  }, []);

  return (
    <group position={[0, 0, scrollY * -0.001]}>
      {icons.brackets.map((bracket, index) => (
        <CodeBrackets
          key={`bracket-${index}`}
          position={bracket.position}
          scale={bracket.scale}
          speed={bracket.speed}
        />
      ))}
      {icons.databases.map((db, index) => (
        <DatabaseIcon
          key={`db-${index}`}
          position={db.position}
          scale={db.scale}
          speed={db.speed}
        />
      ))}
      {icons.clouds.map((cloud, index) => (
        <CloudIcon
          key={`cloud-${index}`}
          position={cloud.position}
          scale={cloud.scale}
          speed={cloud.speed}
        />
      ))}
    </group>
  );
}
