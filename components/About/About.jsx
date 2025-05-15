"use client";

import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTextJS from "split-text-js";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    // SplitTextJS (твоя анімація тексту)
    const spans = container.querySelectorAll("span");
    spans.forEach((span) => {
      const split = new SplitTextJS(span);
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "restart none none reverse",
        },
        scaleY: 0,
        y: -10,
        transformOrigin: "top",
        opacity: 0,
        stagger: 0.02,
        duration: 0.3,
      });
    });

    // Анімація картинки
    gsap.set(image, {
      x: "0%",
      y: "0%",
      rotate: -10,
    });

    // Scroll-залежна анімація
    gsap.to(image, {
      x: "5%",
      y: "5%",
      rotate: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom top",
        ease: "power8.out",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div style={{ height: "100vh", position: "relative" }} className="about">
      <Image
        src="/2.png"
        alt="background"
        width={2000}
        height={2000}
        className={styles.background}
        ref={imageRef}
      />
      <div className={styles.wrapper}>
        <div className={styles.text} ref={containerRef}>
          <span className={styles.content}>
            Вкласти в кожен сантиметр вашого простору
          </span>
          <span className={styles.content}>
            ергономіку, стиль і функціональність.
          </span>
          <span className={styles.content}>Кожна деталь має значення.</span>
          <div className={styles.mission}>Наша місія</div>
        </div>
      </div>
    </div>
  );
};

export default About;
