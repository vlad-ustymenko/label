"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Sofa.module.css";

function Model() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gltf = useGLTF("/models/room2.glb");
  const ref = useRef();
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set("#444444");
      // child.material.roughness = 0.9;
    }
  });
  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      position={[isMobile ? 0 : 70, isMobile ? -30 : 20, isMobile ? -100 : 0]}
    />
  );
}

gsap.registerPlugin(ScrollTrigger);

function CameraAnimation() {
  const { camera } = useThree();
  const animationDone = useRef(false);

  const startPos = { x: 50, y: 100, z: 300 };
  const endPos = { x: 150, y: 100, z: 300 };

  useEffect(() => {
    // Встановити початкову позицію
    camera.position.set(startPos.x, startPos.y, startPos.z);

    // Початкова анімація
    gsap.to(camera.position, {
      x: endPos.x,
      y: endPos.y,
      z: endPos.z,
      duration: 2,
      ease: "power2.out",
    });

    gsap.to(camera.position, {
      z: 400,
      ease: "none",
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, [camera]);

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
      className="ok"
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
