"use client";
import MainScreen from "@/components/MainScreen/MainScreen";
import About from "@/components/About/About";
import BlurAnimation from "@/components/BlurAnimation/BlurAnimation";
import styles from "./page.module.css";
import Roadmap from "@/components/Roadmap/Roadmap";

export default function Home() {
  return (
    <>
      <MainScreen></MainScreen>
      {/* <BlurAnimation /> */}
      <About />
      <Roadmap></Roadmap>
      <div style={{ height: "1000vh" }}></div>
    </>
  );
}
