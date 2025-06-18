import style from "./LaptopPage.module.css";

import { laptops } from "../../common_imgs/ExampleDB/laptops";
import { NavLink, useParams } from "react-router";
import { Back } from "../Elements/Back";

import seller from "../../common_imgs/Sellers/LapTech.png";
import { StarRating } from "../Elements/StarRating";
import { useCart } from "../../CartProvider.jsx";

import { CiShoppingCart } from "react-icons/ci";
import { GoCpu } from "react-icons/go";
import { BsGpuCard } from "react-icons/bs";
import { RiRam2Line } from "react-icons/ri";
import { FaWeightHanging } from "react-icons/fa";
import { TbArrowsDiagonalMinimize } from "react-icons/tb";

import { Label } from "../Home/Label";

export const LaptopPage = () => {
  const { cart, addToCart, setCart } = useCart();
  const { name } = useParams();
  const laptop = laptops.find((laptop) => laptop.name === name);

  const handleCartButton = () => {
    if (cart.some((item) => item.name === laptop.name)) {
      setCart(cart.filter((item) => item.name !== laptop.name));
    } else {
      addToCart(laptop);
    }
  };

  return (
    <div className={style.page}>
      <Back />
      <div className={style.content}>
        <div className={style.imgHolder}>
          <img src={laptop.img} alt="" />
        </div>
        <div className={style.trade}>
          <div className={style.top}>
            <h2>{laptop.name}</h2>
            <h3>{laptop.price} $</h3>
          </div>
          <NavLink to={`/seller/${laptop.seller}`} className={style.seller}>
            <div className={style.imgSeller}>
              <img src={seller} alt="" />
            </div>
            <h4>{laptop.seller}</h4>
          </NavLink>
          <div className={style.rating}>
            <StarRating size={"28px"} rating={laptop.rating} />
          </div>

          <p className={style.desc}>
            A reliable and productive laptop, ideal for a wide range of tasks.
            It ensures comfortable work, study, and entertainment thanks to its
            balanced configuration and user-friendly design.
          </p>
          <button onClick={handleCartButton} className={style.card}>
            Add to Card <CiShoppingCart />{" "}
          </button>
        </div>
      </div>
      <Label title={"Details"} />
      <div className={style.details}>
        <div className={style.detail}>
          <h5>
            <GoCpu />
            CPU
          </h5>
          <p>{laptop.cpu}</p>
        </div>
        <div className={style.detail}>
          <h5>
            <BsGpuCard />
            GPU
          </h5>
          <p>{laptop.gpu}</p>
        </div>
        <div className={style.detail}>
          <h5>
            <RiRam2Line />
            RAM
          </h5>
          <p>{laptop.ram}</p>
        </div>
        <div className={style.detail}>
          <h5>
            <FaWeightHanging />
            Weight
          </h5>
          <p>{laptop.weight}kg</p>
        </div>
        <div className={style.detail}>
          <h5>
            <TbArrowsDiagonalMinimize />
            Diagonal
          </h5>
          <p>{laptop.diagonal}''</p>
        </div>
      </div>
    </div>
  );
};
