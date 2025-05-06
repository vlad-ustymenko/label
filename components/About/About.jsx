"use client";

import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTextJS from "split-text-js";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll("span");

    spans.forEach((span) => {
      const split = new SplitTextJS(span);

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: containerRef.current,
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <div className={styles.wrapper}>
        <div className={styles.text} ref={containerRef}>
          <span className={styles.content}>контент</span>
          <span className={styles.content}>под ваши задачи:</span>
          <span className={styles.content}>3D / video / web / creative</span>
        </div>
      </div>
    </div>
  );
};

export default About;
