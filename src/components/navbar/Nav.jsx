import React, { useState } from "react";
import "./Nav.css";
import { useLocation, Link } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const [loading, IsLoading] = useState(true);

  return (
    <nav className="nav">
      <div className="nav_img">
        {loading && (
          <div className="nav_spinner_container">
            <div className="nav_spinner"></div>
          </div>
        )}

        <img
          src="https://svgur.com/i/rH5.svg"
          alt="Hawk Clothes logo"
          onLoad={() => IsLoading(false)}
          className={loading ? "hidden" : "null"}
        />
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
