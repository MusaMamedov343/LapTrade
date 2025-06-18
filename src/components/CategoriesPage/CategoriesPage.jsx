import React from "react";

import style from "./CategoriesPage.module.css";

import { Back } from "../Elements/Back";
import { Label } from "../Home/Label.jsx";

import { GrLinkNext } from "react-icons/gr";

import businessImg from "../../common_imgs/categories/business.png";
import gamingImg from "../../common_imgs/categories/gaming-.png";
import twoInOneImg from "../../common_imgs/categories/2-in-1.png";
import chromebookImg from "../../common_imgs/categories/chromebook-.png";
import workstationImg from "../../common_imgs/categories/workstation--.png";
import ultrabookImg from "../../common_imgs/categories/ultraportable--.png";

import { NavLink } from "react-router";

export const CategoriesPage = () => {
  return (
    <div className={style.page}>
      <Back />
      <Label title={"Categories"} />
      <div className={style.list}>
        <CategoryLine name={"Business"} img={businessImg} />
        <CategoryLine name={"Gaming"} img={gamingImg} />
        <CategoryLine name={"2 in 1"} img={twoInOneImg} />
        <CategoryLine name={"Chromebook"} img={chromebookImg} />
        <CategoryLine name={"Workstation"} img={workstationImg} />
        <CategoryLine name={"Ultrabook"} img={ultrabookImg} />
      </div>
    </div>
  );
};

const CategoryLine = ({ name, img }) => {
  return (
    <NavLink to={`/categories/${name.toLowerCase()}`} className={style.row}>
      <div className={style.content}>
        <div className={style.imgHolder}>
          <img src={img} alt={name} />
        </div>
        <h2>{name}</h2>
      </div>
      <GrLinkNext />
    </NavLink>
  );
};
