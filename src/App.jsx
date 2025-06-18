import { Routes, Route } from "react-router";
import Header from "./components/header/Header.jsx";
import "./index.css";
import { Home } from "./components/Home/Home.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { Explore } from "./components/Explore/Explore.jsx";
import { LaptopPage } from "./components/LaptopPage/LaptopPage.jsx";
import { CategoriesPage } from "./components/CategoriesPage/CategoriesPage.jsx";
import { CategoryPage } from "./components/CategoryPage/CategoryPage.jsx";
import { CartPage } from "./components/Cart/CartPage.jsx";
import { SellerPage } from "./components/SellerPage/SellerPage.jsx";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:query" element={<Explore />} />
          <Route path="/laptop/:name" element={<LaptopPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/seller/:seller" element={<SellerPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
