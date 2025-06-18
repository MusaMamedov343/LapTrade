import React from "react";

import style from "./SellerPage.module.css";
import { useParams } from "react-router";

import { laptops } from "../../common_imgs/ExampleDB/laptops.js";
import { Back } from "../Elements/Back";
import { Label } from "../Home/Label";
import { CardLaptop } from "../CardLaptop/CardLaptop.jsx";

import sellerImg from "../../common_imgs/Sellers/LapTech.png";

export const SellerPage = () => {
  const { seller } = useParams();
  const sellersLaptops = laptops.filter(
    (i) => i.seller.toLowerCase() === seller.toLocaleLowerCase()
  );
  return (
    <div className={style.page}>
      <Back />
      <div className={style.seller}>
        <div className={style.imgHolder}>
          <img src={sellerImg} alt="" />
        </div>
        <h1>{seller}</h1>
      </div>
      <Label title={"Laptops"} />
      <div className={style.list}>
        {sellersLaptops.map((laptop, i) => (
          <CardLaptop key={i} laptop={laptop} />
        ))}
      </div>
    </div>
  );
};
