import React from "react";
import { animatePageOut } from "@/utils/animation";
import { useRouter } from "next/navigation";
import styles from "./Button.module.css";

const Button = ({ title, className }) => {
  const router = useRouter();
  const onclick = () => {
    animatePageOut("/projects", router);
  };
  return (
    <button className={`${className} ${styles.button}`} onClick={onclick}>
      {title}
    </button>
  );
};

export default Button;
