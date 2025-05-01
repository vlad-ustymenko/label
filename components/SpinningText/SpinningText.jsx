import React from "react";
import SplitTextJS from "split-text-js";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import styles from "./SpinningText.module.css";

const SpinningText = ({ textArray, className }) => {
  const spinningRef = useRef(null);
  useEffect(() => {
    const titles = spinningRef.current.querySelectorAll("p");

    console.log(titles);
    const tl = gsap.timeline({ repeat: -1 });
    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);
      tl.from(
        splitTitle.chars,
        { opacity: 0, y: 20, rotateX: -90, stagger: 0.1 },
        "<0.1"
      ).to(
        splitTitle.chars,
        { opacity: 0, y: -20, rotateX: 90, stagger: 0.1 },
        "+=1"
      );
    });
  }, []);
  return (
    <div className={className} ref={spinningRef}>
      {textArray.map((text, index) => (
        <p key={index} className={styles.text}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default SpinningText;
