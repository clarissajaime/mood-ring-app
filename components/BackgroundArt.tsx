import React from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Plane } from "@react-three/drei";

type Mood = "anger" | "fear" | "joy" | "love" | "sadness" | "surprise";

const bgTexturePaths: Record<Mood, string> = {
  anger: "/textures/anger-bg.jpg",
  fear: "/textures/fear-bg.png",
  joy: "/textures/anger-bg.jpg",
  love: "/textures/love-bg.png",
  sadness: "/textures/sadness-bg.png",
  surprise: "/textures/surprise-bg.png",
};

interface BackgroundProps {
  mood: Mood;
}

const Background: React.FC<BackgroundProps> = ({ mood }) => {
  const texture = useLoader(THREE.TextureLoader, bgTexturePaths[mood]);

  return (
    <Plane args={[5, 5]} scale={[100, 100, 1]} rotation={[0, 0, 0]}>
      <meshBasicMaterial attach="material" map={texture} />
    </Plane>
  );
};

export default Background;
