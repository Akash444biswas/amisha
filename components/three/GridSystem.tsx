"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface GridSystemProps {
  scrollY: number;
}

export function GridSystem({ scrollY }: GridSystemProps) {
  const gridRef = useRef<Mesh>(null);
  const grid2Ref = useRef<Mesh>(null);
  const grid3Ref = useRef<Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      gridRef.current.rotation.y = time * 0.05;
      gridRef.current.position.z = -5 + (scrollY * 0.001);
    }

    if (grid2Ref.current) {
      grid2Ref.current.rotation.x = -Math.sin(time * 0.15) * 0.1;
      grid2Ref.current.rotation.y = -time * 0.03;
      grid2Ref.current.position.z = -8 + (scrollY * 0.0015);
    }

    if (grid3Ref.current) {
      grid3Ref.current.rotation.z = time * 0.02;
      grid3Ref.current.position.z = -12 + (scrollY * 0.002);
    }
  });

  return (
    <>
      {/* Primary grid - main tech grid */}
      <mesh ref={gridRef} position={[0, 0, -5]}>
        <planeGeometry args={[25, 25, 25, 25]} />
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Secondary grid - diagonal overlay */}
      <mesh ref={grid2Ref} position={[0, 0, -8]} rotation={[0, Math.PI / 4, 0]}>
        <planeGeometry args={[18, 18, 18, 18]} />
        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.04}
        />
      </mesh>

      {/* Tertiary grid - depth layer */}
      <mesh ref={grid3Ref} position={[0, 0, -12]} rotation={[Math.PI / 6, 0, 0]}>
        <planeGeometry args={[30, 30, 15, 15]} />
        <meshBasicMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.03}
        />
      </mesh>
    </>
  );
}
