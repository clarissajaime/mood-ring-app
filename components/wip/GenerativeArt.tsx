"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

type Mood = "anger" | "fear" | "joy" | "love" | "sadness" | "surprise";

const moodColors: Record<Mood, string> = {
  anger: "#F44336",
  fear: "#9C27B0",
  joy: "#FFEB3B",
  love: "#E91E63",
  sadness: "#2196F3",
  surprise: "#FF9800",
};

const GenerativeArt: React.FC<{ mood: Mood }> = ({ mood }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Sphere visible args={[1, 100, 200]} scale={2.7}>
        <MeshDistortMaterial
          color={moodColors[mood]}
          attach="material"
          distort={0.3}
          speed={2}
        />
      </Sphere>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default GenerativeArt;
