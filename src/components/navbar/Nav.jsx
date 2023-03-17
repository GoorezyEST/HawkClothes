import React from "react";
import "./Nav.css";
import Image from "../../assets/hawkClothesLogo.svg";
import { useLocation, Link } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="nav_img">
        <img src={Image} alt="Hawk Clothes logo" />
      </div>
      <div className="nav_items">
        <Link
          className={
            location.pathname === "/home" ? "active nav_item" : "nav_item"
          }
          to="/home"
        >
          HOME
        </Link>
        <Link
          className={
            location.pathname.includes("/products")
              ? "active nav_item"
              : "nav_item"
          }
          to="/products"
        >
          PRODUCTS
        </Link>
        <Link
          className={
            location.pathname === "/faq" ? "active nav_item" : "nav_item"
          }
          to="/faq"
        >
          FAQ
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
