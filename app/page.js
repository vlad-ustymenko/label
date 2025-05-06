"use client";
import MainScreen from "@/components/MainScreen/MainScreen";
import About from "@/components/About/About";
import BlurAnimation from "@/components/BlurAnimation/BlurAnimation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <MainScreen></MainScreen>
      {/* <BlurAnimation /> */}
      <About />
      <section style={{ height: "100vh" }}></section>
      <section className="hero card">
        <h1 className="inset_text" data-text="Створюємо простори майбутнього">
          Створюємо простори майбутнього
        </h1>
        <p>Архітектурний дизайн преміум-класу</p>
        <button className="btn">Переглянути проекти</button>
        <button className="btn2">Переглянути проекти</button>
        <button className="btn3">Переглянути проекти</button>
      </section>
    </>
  );
}
