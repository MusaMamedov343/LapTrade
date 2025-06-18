import React from "react";
import { FaLaptop } from "react-icons/fa6";
import style from "./Shop.module.css";

export const Label = ({ title }) => {
  return (
    <div className={style.label}>
      <FaLaptop className={style.icon} />
      <h2 className={style.title}>{title}</h2>
    </div>
  );
};
