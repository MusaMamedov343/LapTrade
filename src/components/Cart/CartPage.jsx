import React from "react";
import { useCart } from "../../CartProvider";

import style from "./Cart.module.css";

import { Back } from "../Elements/Back.jsx";
import { Label } from "../Home/Label.jsx";
import { CardLaptop } from "../CardLaptop/CardLaptop.jsx";

export const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className={style.page}>
      <Back />
      <div className={style.main}>
        <div className={style.sum}>
          <Label title={"Total"} />
          <div className={style.sumContent}>
            <h2>{cart.reduce((p, c) => (p += c.price), 0)}$</h2>
            <button>Buy</button>
          </div>
        </div>
        <div className={style.cart}>
          <Label title={"Cart"} />
          <div className={style.list}>
            {cart.length > 0 ? (
              cart.map((laptop, i) => <CardLaptop key={i} laptop={laptop} />)
            ) : (
              <h1 style={{ paddingLeft: "20px", width: "100%" }}>
                Your cart is empty
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
