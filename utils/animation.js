import gsap from "gsap";

export const animatePageOut = (href, router) => {
  gsap.fromTo(
    ".baner",
    { yPercent: 100 }, // спочатку банер знизу
    {
      yPercent: 0, // рухаємо його до верху
      duration: 1,
      ease: "power4.inOut",
      onComplete: () => {
        router.push(href); // виконуємо перехід після анімації
      },
    }
  );
};

export const animatePageIn = () => {
  gsap.fromTo(
    ".baner",
    { yPercent: 0 }, // починаємо з 0
    { yPercent: -100, duration: 1, ease: "power4.inOut" } // анімація до -100
  );
};
