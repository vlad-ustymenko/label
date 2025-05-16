"use client";
import MainScreen from "@/components/MainScreen/MainScreen";
import About from "@/components/About/About";
import BlurAnimation from "@/components/BlurAnimation/BlurAnimation";
import styles from "./page.module.css";
import Roadmap from "@/components/Roadmap/Roadmap";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;

  //     new LocomotiveScroll({
  //       el: document.querySelector("[data-scroll-container]"),
  //       smooth: true, // обов'язково
  //       lerp: 0.05, // 0.01 - дуже плавно, 0.1 - швидше
  //       multiplier: 0.5, // швидкість прокрутки (1 = нормальна, <1 = повільніше)
  //       touchMultiplier: 2, // чутливість скролу на мобілках
  //       resetNativeScroll: true,
  //     });
  //   })();
  // }, []);

  return (
    <main data-scroll-container>
      <MainScreen />
      {/* <BlurAnimation /> */}
      <About />
      <Roadmap />
      <div style={{ height: "1000vh" }}></div>
    </main>
  );
}
