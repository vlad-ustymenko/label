import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, className }) => {
  return (
    <a href="#" className={`${className} ${styles.button} `}>
      {title}
    </a>
  );
};

export default Button;
