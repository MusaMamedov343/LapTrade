import React from "react";
import { useNavigate, useParams } from "react-router";
import style from "./Explore.module.css";

import { filter } from "./filters.js";
import { laptops } from "../../common_imgs/ExampleDB/laptops";
import { Back } from "../Elements/Back.jsx";

import newArrivals from "../../common_imgs/new_arrivals.jpg";

import { GrLinkNext } from "react-icons/gr";
import { CardLaptop } from "../CardLaptop/CardLaptop";
import { Label } from "../Home/Label";

export const Explore = () => {
  const { query } = useParams();
  const [search, setSearch] = React.useState(query || "");
  const [categories, setCategories] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  const [maxPrice, setMaxPrice] = React.useState(4000);
  const navigate = useNavigate();

  const filteredLaptops = filter(laptops, query, categories, brands, maxPrice);

  const handleSearch = () => {
    if (search) {
      navigate(`/explore/${search}`);
    } else {
      navigate("/explore");
    }
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setCategories((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };

  const handleBrandChange = (e) => {
    const { value, checked } = e.target;
    setBrands((prev) =>
      checked ? [...prev, value] : prev.filter((brand) => brand !== value)
    );
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setMaxPrice(value);
  };

  return (
    <div className={style.explore}>
      <Back />
      <div
        style={{
          backgroundImage: `url(${newArrivals})`,
        }}
        className={style.imgHolder}
      >
        <h1>New Arrivals in Laptops</h1>
      </div>
      <div className={style.searchCon}>
        <h2>Results</h2>
        <div className={style.inputCon}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Find your laptop"
          />
          <button onClick={handleSearch}>
            <GrLinkNext />
          </button>
        </div>
      </div>
      <div className={style.shop}>
        <aside className={style.aside}>
          <Label title={"Filters"} />
          <div className={style.filters}>
            <div className={style.filterGroup}>
              <h4>Categories</h4>
              <div className={style.groupContent}>
                {[
                  "business",
                  "gaming",
                  "2 in 1",
                  "chromebook",
                  "workstation",
                  "ultrabook",
                ].map((category) => (
                  <label
                    key={category}
                    className={
                      categories.includes(category)
                        ? `${style.activeBox} ${style.box}`
                        : `${style.box}`
                    }
                  >
                    <input
                      type="checkbox"
                      value={category}
                      onChange={handleCategoryChange}
                      hidden
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
            <div className={style.filterGroup}>
              <h4>Brands</h4>
              <div className={style.groupContent}>
                {[
                  "asus",
                  "acer",
                  "hp",
                  "apple",
                  "msi",
                  "lenovo",
                  "dell",
                  "google",
                  "microsoft",
                  "lg",
                ].map((brand) => (
                  <label
                    key={brand}
                    className={
                      brands.includes(brand)
                        ? `${style.activeBox} ${style.box}`
                        : `${style.box}`
                    }
                  >
                    <input
                      type="checkbox"
                      value={brand}
                      onChange={handleBrandChange}
                      hidden
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>
            <div className={style.filterGroup}>
              <h4>Max Price</h4>
              <span>{maxPrice}$</span>
              <input
                value={maxPrice}
                type="range"
                min="400"
                max="4000"
                step="200"
                onChange={handlePriceChange}
              />
            </div>
          </div>
        </aside>
        <div className={style.main}>
          <Label title={"Laptops"} />
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
