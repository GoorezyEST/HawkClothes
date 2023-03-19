import React, { useState, useEffect, useMemo } from "react";
import "./Products.css";
import Nav from "../navbar/Nav";
import { Link } from "react-router-dom";

function Products() {
  const clothes = useMemo(
    () => [
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
    ],
    []
  );

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = clothes.map((item) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = item.url;
        img.onload = () => {
          resolve();
        };
      });
    });

    Promise.all(images).then(() => {
      setImagesLoaded(true);
    });
  }, [clothes]);

  return (
    <section className="products_section">
      <Nav />
      <div className="products_main">
        {imagesLoaded ? (
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
              src="https://svgur.com/i/rFs.svg"
              className="products_logo"
              alt="Hawk Clothes logotype"
            />
          </div>
        ) : (
          <div className="products_spinner_container">
            <div className="products_spinner"></div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
