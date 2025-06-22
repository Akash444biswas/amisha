"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { FloatingElements } from "./FloatingElements";
import { GridSystem } from "./GridSystem";
import { CodeParticles } from "./CodeParticles";
import { TechIcons } from "./TechIcons";

interface TechBackgroundProps {
  scrollY: number;
}

export function TechBackground({ scrollY }: TechBackgroundProps) {
  return (
    <div className="fixed inset-0 -z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{ antialias: false, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting setup */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.3} color="#3b82f6" />
          <pointLight position={[-10, -10, -10]} intensity={0.2} color="#8b5cf6" />

          {/* Background elements */}
          <GridSystem scrollY={scrollY} />
          <FloatingElements scrollY={scrollY} />
          <CodeParticles scrollY={scrollY} />
          <TechIcons scrollY={scrollY} />
        </Suspense>
      </Canvas>
    </div>
  );
}
