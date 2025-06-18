import React from "react";

import style from "./Category.module.css";
import { Back } from "../Elements/Back";
import { Label } from "../Home/Label";
import { NavLink, useParams } from "react-router";

import { laptops } from "../../common_imgs/ExampleDB/laptops";
import { CardLaptop } from "../CardLaptop/CardLaptop";

export const CategoryPage = () => {
  const { category } = useParams();

  const categoriesList = [
    "business",
    "gaming",
    "2 in 1",
    "chromebook",
    "workstation",
    "ultrabook",
  ];
  const filterCategories = categoriesList.filter((cat) => cat !== category);

  const filteredLaptops = laptops.filter(
    (laptop) => laptop.category === category
  );
  return (
    <div className={style.page}>
      <Back />
      <div className={style.content}>
        <div className={style.otherCategories}>
          <Label title={"Other Categories"} />
          <div className={style.others}>
            {filterCategories.map((cat, i) => (
              <NavLink key={i} to={`/categories/${cat}`}>
                {cat}
              </NavLink>
            ))}
          </div>
        </div>
        <div className={style.main}>
          <Label title={category} />
          <div className={style.list}>
            {filteredLaptops.map((laptop, i) => (
              <CardLaptop key={i} laptop={laptop} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
