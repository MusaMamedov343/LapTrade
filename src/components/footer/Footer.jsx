import React from "react";

import style from "./Footer.module.css";

import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.left}>
        <h1>LapTrade</h1>
        <div className={style.icons}>
          <FaLinkedin />
          <FaXTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className={style.right}>
        <FooterColumn
          title={"Support"}
          links={["Help Center", "Support Services", "How-to Videos"]}
        />
        <FooterColumn
          title={"About Us"}
          links={["Privacy Guidlines", "Site Map", "Membership Plans"]}
        />
        <FooterColumn
          title={"Get in Touch"}
          links={["info@laptrade.com", "+123-456-7890"]}
        />
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => {
  return (
    <div className={style.column}>
      <h5>{title}</h5>
      {links.map((link, index) => (
        <a key={index} href="#">
          {link}
        </a>
      ))}
    </div>
  );
};
