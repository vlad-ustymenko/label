"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Roadmap.module.css";

gsap.registerPlugin(ScrollTrigger);

const RoadmapHorizontal = () => {
  const pathRef = useRef(null);
  const textRefs = useRef([]);
  const circleRefs = useRef([]);

  const points = [10, 200, 400, 600]; // X-координати точок

  useEffect(() => {
    const path = pathRef.current;
    const totalLength = path.getTotalLength();
    const labels = textRefs.current;
    const circles = circleRefs.current;

    // Початковий стан лінії
    gsap.set(path, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
    });

    // Початковий стан кіл
    circles.forEach((circle) => {
      gsap.set(circle, { opacity: 0, scale: 0 });
    });

    // Анімація лінії
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".non",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });

    tl.to(path, {
      strokeDashoffset: 0,
      ease: "none",
    });

    // Анімація появи кіл та тексту по довжині лінії
    ScrollTrigger.create({
      trigger: ".non",
      start: "top center",
      end: "bottom center",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

        points.forEach((x, i) => {
          const threshold = (i + 1) / (points.length + 1);

          if (progress >= threshold) {
            gsap.to(circles[i], { opacity: 1, scale: 1, duration: 0.4 });
            gsap.to(labels[i], { opacity: 1, y: 0, duration: 0.4 });
          } else {
            gsap.to(circles[i], { opacity: 0, scale: 0, duration: 0.3 });
            gsap.to(labels[i], { opacity: 0, y: 20, duration: 0.3 });
          }
        });
      },
    });
  }, []);

  return (
    <div className={`${styles.roadmapWrapper} non`}>
      <div className={styles.roadmapHorizontal}>
        <svg
          className={styles.roadmapSvg}
          viewBox="0 0 1920 1080"
          // preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          width={"100%"}
          height={"100vh"}
        >
          <path
            ref={pathRef}
            d="M0.00 180.03C260.12 153.41 408.31 219.40 332.23 374.59 169.11 485.15 92.50 646.15 131.01 942.14 158.54 1034.02 404.04 1070.90 463.36 937.13 520.45 771.34 615.09 576.49 802.32 549.94 999.58 541.06 1322.97 587.46 1331.47 740.34 1288.50 876.48 1920.00 998.58 1729.83 564.33 1886.46 208.57 2099.15 0.00 2080.83 588.62 2499.37 600.12"
            stroke="white"
            strokeWidth="4"
            fill="none"
          />

          {points.map((x, i) => (
            <circle
              key={i}
              ref={(el) => (circleRefs.current[i] = el)}
              cx={x}
              cy={100}
              r="6"
              fill="white"
            />
          ))}
        </svg>

        <div className={styles.labelsHorizontal}>
          {["План", "Дизайн", "Розробка", "Запуск"].map((label, i) => (
            <div
              key={i}
              ref={(el) => (textRefs.current[i] = el)}
              className={styles.labelHorizontal}
              style={{
                left: `${points[i]}px`,
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapHorizontal;
