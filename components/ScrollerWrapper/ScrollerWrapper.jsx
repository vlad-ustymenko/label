"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function ScrollWrapper({ children }) {
  const [scrollReady, setScrollReady] = useState(false);
  const locoScrollRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const initScroll = async () => {
      gsap.registerPlugin(ScrollTrigger);

      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const scrollContainer = document.querySelector("[data-scroll-container]");
      if (!scrollContainer) return;

      const locoScroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        lerp: 0.08,
        // smartphone: {
        //   smooth: true,
        // },
      });

      locoScrollRef.current = locoScroll;

      ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollContainer.style.transform ? "transform" : "fixed",
      });

      locoScroll.on("scroll", ScrollTrigger.update);
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

      await new Promise((resolve) => requestAnimationFrame(resolve));
      ScrollTrigger.refresh();

      setScrollReady(true);
    };

    initScroll();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      locoScrollRef.current?.destroy();
    };
  }, []);

  // ✅ Оновити locomotive після першого рендеру
  useEffect(() => {
    if (scrollReady) {
      locoScrollRef.current?.update();
    }
  }, [scrollReady]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      locoScrollRef.current?.update();
      ScrollTrigger.refresh();
    }, 500); // затримка, щоб контент встиг відрендеритися

    return () => clearTimeout(timeout);
  }, [pathname]);

  return <div data-scroll-container>{scrollReady ? children : null}</div>;
}
