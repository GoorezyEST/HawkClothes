import React from "react";
import "./Products.css";
import Nav from "../navbar/Nav";
import Logo from "../../assets/hawkClothesFullLogo.svg";
import { Link } from "react-router-dom";

function Products() {
  const clothes = [
    {
      url: "https://i.imgur.com/yVCkug4.jpg",
      link: "/products/hodies",
    },
    {
      url: "https://i.imgur.com/ZcMjCn6.jpg",
      link: "/products/sweatshirt",
    },
    {
      url: "https://i.imgur.com/m7WDOlQ.jpg",
      link: "/products/t-shirt",
    },
    {
      url: "https://i.imgur.com/lE3XITO.jpg",
      link: "/products/cap",
    },
    {
      url: "https://i.imgur.com/QTekdHB.jpg",
      link: "/products/mask",
    },
  ];

  return (
    <section className="products_section">
      <Nav />
      <div className="products_main">
        <div className="products_content">
          {clothes.map((item, i) => {
            return (
              <Link
                key={i}
                to={item.link}
                className="products_card"
                style={{ backgroundImage: `url(${item.url})` }}
              ></Link>
            );
          })}
          <img
            src={Logo}
            className="products_logo"
            alt="Hawk Clothes logotype"
          />
        </div>
      </div>
    </section>
  );
}

export default Products;
