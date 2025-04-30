"use client";

import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Model() {
  const gltf = useGLTF("/models/room2.glb");
  const ref = useRef();
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set("#444444"); // сіро-середній
      child.material.roughness = 0.9; // необов'язково, для мати
    }
    // Обертання з затуханням
    // let elapsed = 0;
    // useFrame((_, delta) => {
    //   if (elapsed < 1) {
    //     elapsed += delta;
    // ref.current.rotation.x = Math.min(0.01, elapsed * 0.01);
    // ref.current.rotation.y = Math.min(0.6, elapsed * 0.6);
    // ref.current.rotation.z = Math.min(0.6, elapsed * 0.6);
    //   }
    // });
  });
  return <primitive ref={ref} object={gltf.scene} position={[70, 20, 0]} />;
}

function CameraAnimation() {
  const { camera } = useThree();
  const startPos = useRef([50, 100, 300]);
  const endPos = useRef([150, 100, 300]);
  const speed = 0.05;

  // Встановлюємо початкову позицію один раз
  useRef(() => {
    camera.position.set(...startPos.current);
  }, []);

  useFrame(() => {
    // Плавний перехід до endPos
    camera.position.x += (endPos.current[0] - camera.position.x) * speed;
    camera.position.y += (endPos.current[1] - camera.position.y) * speed;
    camera.position.z += (endPos.current[2] - camera.position.z) * speed;

    camera.updateProjectionMatrix();
  });

  return null;
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
      <Canvas camera={{ position: [50, 100, 300], fov: 50 }}>
        <CameraAnimation />
        <ambientLight intensity={0.3} />
        <directionalLight position={[100, 10, 50]} intensity={1} />
        <OrbitControls enableZoom={false} enableRotate={false} />
        <Environment preset="city" />
        <Model />
      </Canvas>
    </div>
  );
}
