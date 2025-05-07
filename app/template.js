"use client";
import React, { useEffect } from "react";
import { animatePageIn } from "@/utils/animation";
import styles from "./template.module.css";

const Template = ({ children }) => {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div className="baner"></div>
      {children}
    </div>
  );
};

export default Template;
