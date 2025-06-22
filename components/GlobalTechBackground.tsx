"use client";

import { TechBackground } from "@/components/three/TechBackground";
import { useScrollY } from "@/hooks/useScrollY";

export function GlobalTechBackground() {
  const scrollY = useScrollY();

  return <TechBackground scrollY={scrollY} />;
}
