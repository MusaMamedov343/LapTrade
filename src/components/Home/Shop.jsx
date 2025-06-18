import React from "react";

import style from "./Shop.module.css";

import LapTech from "../../common_imgs/Sellers/LapTech.png";
import latestImg from "../../common_imgs/latest_img.png";
import bigBusiness from "../../common_imgs/categories/businessBig.jpg";
import bigGaming from "../../common_imgs/categories/gamingBig.jpeg";

import { laptops } from "../../common_imgs/ExampleDB/laptops";
import { CardLaptop } from "../CardLaptop/CardLaptop";
import { NavLink } from "react-router";

import { CountdownTimer } from "./CountdownTimer.jsx";
import { Label } from "./Label.jsx";

export const Shop = () => {
  return (
    <div className={style.shop}>
      <aside className={style.shopAside}>
        <Label title={"Special Offers"} />
        <SideCard
          title="Featured"
          subtitle="by LapTech"
          img={LapTech}
          circleTxt="20% OFF"
          buttonTxt="Buy now"
          link={"/seller/LapTech"}
        />
        <SideCard
          title="New Arrivals"
          subtitle={"Indroducing the latest"}
          img={latestImg}
          circleTxt="Limited time"
          buttonTxt={"Explore"}
          link={"/explore"}
        />

        <div
          style={{ flexGrow: "1", marginBottom: "20px" }}
          className={style.sideCard}
        >
          <h2>Special offer</h2>
          <p>Ends soon</p>
          <CountdownTimer />
        </div>
      </aside>
      <div className={style.shopMain}>
        <Label title={"Trending laptops"} />
        <div className={style.laptops}>
          {laptops.slice(0, 6).map((laptop, i) => (
            <CardLaptop key={i} laptop={laptop} />
          ))}
        </div>
        <Label title={"Laptop Categories"} />
        <div className={style.categories}>
          <Category
            title="Gaming laptops"
            img={bigGaming}
            text="Immerse yourself in the gaming"
            link={"/categories/gaming"}
          />
          <Category
            title="Work laptops"
            img={bigBusiness}
            text="Boost your productivity"
            link={"/categories/business"}
          />
        </div>
      </div>
    </div>
  );
};

const SideCard = ({ title, subtitle, img, circleTxt, buttonTxt, link }) => {
  return (
    <div className={style.sideCard}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className={style.imgHolder}>
        <img src={img} alt={subtitle} />
        <span>
          <p>{circleTxt}</p>
        </span>
      </div>
      <NavLink to={link}>
        <button>{buttonTxt}</button>
      </NavLink>
    </div>
  );
};

const Category = ({ title, img, text, link }) => {
  return (
    <div
      className={style.category}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className={style.title}>{title}</h2>
      <p className={style.subtitle}>{text}</p>
      <NavLink to={link}>
        <button>Discover</button>
      </NavLink>
    </div>
  );
};
