import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router";

import { CiShoppingCart } from "react-icons/ci";
import { FaLaptop } from "react-icons/fa6";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <FaLaptop className={style.icon} />
        <h1 className={style.title}>LapTrade</h1>
      </div>
      <nav className={style.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.activeLink}` : style.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.activeLink}` : style.link
          }
        >
          Categories
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.activeLink}` : style.link
          }
        >
          About us
        </NavLink>
      </nav>
      <div className={style.cart}>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? `${style.cartLink} ${style.activeLink}` : style.cartLink
          }
        >
          <CiShoppingCart className={style.cartIcon} />
        </NavLink>
      </div>
    </div>
  );
}
