import React from "react";

import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import style from "./CardLaptop.module.css";
import { NavLink } from "react-router";
import { StarRating } from "../Elements/StarRating";
import { useCart } from "../../CartProvider";

export const CardLaptop = ({ laptop }) => {
  const { cart, addToCart, setCart } = useCart();
  let isInCart = cart.some((item) => item.name === laptop.name);
  const handleCartClick = (e) => {
    e.preventDefault();
    if (isInCart) {
      setCart(cart.filter((item) => item.name !== laptop.name));
    } else {
      addToCart(laptop);
    }
    isInCart = !isInCart;
  };

  return (
    <NavLink to={`/laptop/${laptop.name}`} className={style.card}>
      <div className={style.imgHolder}>
        <img src={laptop.img} alt="" />
        <button className={style.openButton}>Open</button>
      </div>
      <div className={style.content}>
        <h3 className={style.name}>{laptop.name}</h3>
        <div className={style.rating}>
          <StarRating rating={laptop.rating} />
        </div>
        <div className={style.bottom}>
          <p className={style.price}>{laptop.price}$</p>
          {isInCart ? (
            <IoMdClose
              className={style.cartIcon}
              onClick={(e) => handleCartClick(e)}
            />
          ) : (
            <CiShoppingCart
              className={style.cartIcon}
              onClick={(e) => {
                handleCartClick(e);
              }}
            />
          )}
        </div>
      </div>
    </NavLink>
  );
};
