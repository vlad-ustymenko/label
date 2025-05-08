"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePageTransition } from "../../hooks/usePageTransition";
import { projects } from "@/DTO/projects";
import gsap from "gsap";
import st from "./projects.module.css";

const Page = () => {
  const animateTransition = usePageTransition();
  const cardsRef = useRef([]);

  useEffect(() => {
    setTimeout(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const screenWidth = window.innerWidth;
        const col = index % 3;

        let animationFrom = {};

        if (col === 0) {
          animationFrom = { x: -100, opacity: 0 };
        } else if (col === 1) {
          animationFrom = { scale: 0, opacity: 0 };
        } else {
          animationFrom = { x: 100, opacity: 0 };
        }

        gsap.fromTo(card, animationFrom, {
          x: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          autoAlpha: 1,
          ease: "power3.out",
          delay: index * 0.1,
        });
      });
    }, 300);
  }, []);

  return (
    <>
      <Link
        href="/"
        onClick={(e) => {
          e.preventDefault();
          window.history.replaceState({ customState: true }, "", "/projects");
          animateTransition("/");
        }}
      >
        Назад
      </Link>

      <div>page</div>

      <div className={st.wrapper}>
        {projects.map((project, i) => (
          <div
            key={project.id + i}
            className={st.card}
            ref={(el) => (cardsRef.current[i] = el)}
            style={{
              position: "relative",
              width: "100%",
              height: "200px",
              overflow: "hidden",
            }}
          >
            <Image
              fill
              sizes="33vw"
              src={project.url}
              alt={project.title}
              style={{ objectFit: "cover" }}
              className={st.image}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
