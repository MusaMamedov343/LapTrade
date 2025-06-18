import React from "react";

import { NavLink } from "react-router";
import { IoIosArrowBack } from "react-icons/io";

import style from "./Elements.module.css";

export const Back = () => {
  return (
    <div className={style.back}>
      <NavLink to="/">
        <IoIosArrowBack />
        <h5>Back</h5>
      </NavLink>
    </div>
  );
};
