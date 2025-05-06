"use client";
import React, { useEffect } from "react";
import styles from "./MainScreen.module.css";
import Sofa from "@/components/Sofa/Sofa";
import Button from "@/components/Button/Button";
import SpinningText from "../SpinningText/SpinningText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
gsap.registerPlugin(ScrollTrigger);

const MainScreen = () => {
  // useEffect(() => {
  //   Scrollbar.init(document.body, {
  //     damping: 0.1,
  //     renderByPixels: true,
  //   });
  // }, []);
  const spinningText = [
    "Авторський нагляд",
    "3D візуалізація",
    "Ландшафтний дизайн",
    "Дизайн інтер'єру",
    "Дизайн просторів",
  ];

  useEffect(() => {
    gsap.to(".title", {
      letterSpacing: "0px",
      ease: "power2.out",
      delay: 1,
      duration: 2,
    });
    gsap.to(".title2", {
      letterSpacing: "0px",
      ease: "power2.out",
      delay: 1,
      duration: 2,
    });
    gsap.to(".subtitle", {
      letterSpacing: "0px",
      ease: "power2.out",
      delay: 1,
      duration: 2,
    });

    gsap.to(".subtitle", {
      letterSpacing: "0px",
      ease: "power2.out",
      delay: 1,
      duration: 2,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.mainScreen}`,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(".title", { y: 200, letterSpacing: "10px" })
      .to(".title2", { y: 200, letterSpacing: "10px" }, "<")
      .to(".subtitle", { letterSpacing: "10px" }, "<");

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className={`${styles.mainScreen} main`}>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "2",
        }}
      ></div>
      <Button title="Портфоліо" className={styles.button} />

      <h1 className="title">LABEL</h1>
      <div className="title2">
        LABEL<h2 className="subtitle">studio</h2>
      </div>

      <div className="subtitle2">
        Архітектурний дизайн
        <br /> преміум-класу
      </div>

      <SpinningText textArray={spinningText} className={styles.spinningText} />
      <Sofa />
    </section>
  );
};

export default MainScreen;
