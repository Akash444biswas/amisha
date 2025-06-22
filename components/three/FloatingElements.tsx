"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";

interface FloatingElementsProps {
  scrollY: number;
}

function FloatingCube({ position, scale, speed }: { position: Vector3; scale: number; speed: number }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.008;
      meshRef.current.rotation.y += speed * 0.012;
      meshRef.current.position.y = position.y + Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.position.x = position.x + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#3b82f6"
        transparent
        opacity={0.2}
        wireframe
      />
    </mesh>
  );
}

function FloatingOctahedron({ position, scale, speed }: { position: Vector3; scale: number; speed: number }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.006;
      meshRef.current.rotation.z += speed * 0.009;
      meshRef.current.position.x = position.x + Math.cos(state.clock.elapsedTime * speed) * 0.4;
      meshRef.current.position.y = position.y + Math.sin(state.clock.elapsedTime * speed * 1.2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[1]} />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.25}
        wireframe
      />
    </mesh>
  );
}

function FloatingTorus({ position, scale, speed }: { position: Vector3; scale: number; speed: number }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01;
      meshRef.current.rotation.y += speed * 0.015;
      meshRef.current.position.z = position.z + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.3, 8, 16]} />
      <meshStandardMaterial
        color="#06b6d4"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}

export function FloatingElements({ scrollY }: FloatingElementsProps) {
  const elements = useMemo(() => {
    const cubes = [];
    const octahedrons = [];
    const toruses = [];

    // Generate random positions for cubes
    for (let i = 0; i < 6; i++) {
      cubes.push({
        position: new Vector3(
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15 - 5
        ),
        scale: Math.random() * 0.4 + 0.2,
        speed: Math.random() * 0.8 + 0.4,
      });
    }

    // Generate random positions for octahedrons
    for (let i = 0; i < 5; i++) {
      octahedrons.push({
        position: new Vector3(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 12 - 3
        ),
        scale: Math.random() * 0.3 + 0.15,
        speed: Math.random() * 0.6 + 0.3,
      });
    }

    // Generate random positions for toruses
    for (let i = 0; i < 4; i++) {
      toruses.push({
        position: new Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 8 - 2
        ),
        scale: Math.random() * 0.3 + 0.2,
        speed: Math.random() * 0.4 + 0.2,
      });
    }

    return { cubes, octahedrons, toruses };
  }, []);

  return (
    <group position={[0, 0, scrollY * -0.003]}>
      {elements.cubes.map((cube, index) => (
        <FloatingCube
          key={`cube-${index}`}
          position={cube.position}
          scale={cube.scale}
          speed={cube.speed}
        />
      ))}
      {elements.octahedrons.map((oct, index) => (
        <FloatingOctahedron
          key={`oct-${index}`}
          position={oct.position}
          scale={oct.scale}
          speed={oct.speed}
        />
      ))}
      {elements.toruses.map((torus, index) => (
        <FloatingTorus
          key={`torus-${index}`}
          position={torus.position}
          scale={torus.scale}
          speed={torus.speed}
        />
      ))}
    </group>
  );
}
