import { useState } from "react";
import { useNavigate, NavLink } from "react-router";

import style from "./Home.module.css";

import { ImSearch } from "react-icons/im";

import laptopImg from "../../common_imgs/laptop_banner.png";
import businessImg from "../../common_imgs/categories/business.png";
import gamingImg from "../../common_imgs/categories/gaming-.png";
import twoInOneImg from "../../common_imgs/categories/2-in-1.png";
import chromebookImg from "../../common_imgs/categories/chromebook-.png";
import workstationImg from "../../common_imgs/categories/workstation--.png";
import ultrabookImg from "../../common_imgs/categories/ultraportable--.png";
import { Shop } from "./Shop";

export const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && search) {
      navigate(`/explore/${search}`);
    }
  };

  return (
    <div className={style.home}>
      <main>
        <div className={style.leftMain}>
          <div className={style.leftContent}>
            <div className={style.find}>
              <h1>
                Find the perfect laptop for your <br /> needs
              </h1>
              <p>Browse by brand, specs or deals</p>
            </div>
            <div className={style.search}>
              <div className={style.inputHolder}>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyPress}
                  type="text"
                  placeholder="Find your ideal laptop model"
                />
                <ImSearch />
              </div>
              <NavLink to={search ? `/explore/${search}` : "#"}>
                <button disabled={!search}>Search</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className={style.imgHolder}>
          <img src={laptopImg} alt="Laptop Banner" />
        </div>
      </main>
      <div className={style.categories}>
        <h1>Categories</h1>
        <div className={style.categoryList}>
          <NavLink to={"/categories/business"}>
            <CategoryCard title={"Business"} img={businessImg} />
          </NavLink>
          <NavLink to={"/categories/gaming"}>
            <CategoryCard title={"Gaming"} img={gamingImg} />
          </NavLink>
          <NavLink to={"/categories/2 in 1"}>
            <CategoryCard title={"2-in-1"} img={twoInOneImg} />
          </NavLink>
          <NavLink to={"/categories/chromebook"}>
            <CategoryCard title={"Chromebook"} img={chromebookImg} />
          </NavLink>
          <NavLink to={"/categories/workstation"}>
            <CategoryCard title={"Workstations"} img={workstationImg} />
          </NavLink>
          <NavLink to={"/categories/ultrabook"}>
            <CategoryCard title={"Ultrabook"} img={ultrabookImg} />
          </NavLink>
        </div>
      </div>
      <Shop />
    </div>
  );
};

const CategoryCard = ({ img, title }) => {
  return (
    <div className={style.categoryCard}>
      <h2>{title}</h2>
      <div className={style.imgHolderCard}>
        <img src={img} alt={title} />
      </div>
    </div>
  );
};
