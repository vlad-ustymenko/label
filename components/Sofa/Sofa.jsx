"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Model() {
  const gltf = useGLTF("/models/sofa.gltf");
  const ref = useRef();
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set("#272727"); // сіро-середній
      child.material.roughness = 0.9; // необов'язково, для мати
    }

    // Обертання з затуханням
    let elapsed = 0;

    useFrame((_, delta) => {
      if (elapsed < 1) {
        elapsed += delta;
        // Наприклад: поворот до 45° по X і Y
        ref.current.rotation.x = Math.min(0.01, elapsed * 0.01); // 0.785 ≈ 45°
        ref.current.rotation.y = Math.min(0.6, elapsed * 0.6);
      }
    });
  });
  return <primitive ref={ref} object={gltf.scene} />;
}

export default function Sofa() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "1",
      }}
    >
      <Canvas camera={{ position: [0, 3, 4], fov: 20 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <Environment preset="city" />
        <Model />
      </Canvas>
    </div>
  );
}
