import React, { useState } from "react";
import "./SingleProduct.css";
import Nav from "../navbar/Nav";
import { Link } from "react-router-dom";

function SingleProduct({ url, name, price, colors }) {
  const [actualImg, setActualImg] = useState(url[0]);
  const [showPopUp, setShowPopUp] = useState(false);

  function handleImgChange(e) {
    let colorPicked = e.target.style.backgroundColor;
    if (colorPicked === "black") {
      setActualImg(url[0]);
    } else if (colorPicked === "lightgrey") {
      setActualImg(url[1]);
    } else if (colorPicked === "purple") {
      setActualImg(url[2]);
    } else if (colorPicked === "blue") {
      setActualImg(url[3]);
    } else {
      return;
    }
  }

  return (
    <section className="singleProduct_section">
      <div className={showPopUp ? "pop_up" : "hidden"}>
        <div>
          <p>
            Currently, to buy any of our products you can contact us at WhatsApp
            (555) 123-4567 or come to our store at 1234 Main Street, Anytown.
          </p>
          <button onClick={() => setShowPopUp(false)}>Got it</button>
        </div>
      </div>
      <Nav />
      <div className="singleProduct_main">
        <div className="singleProduct_content">
          <img src={actualImg} alt="Product" />
          <div className="singleProduct_info">
            <div className="infoContainer">
              <h3>{name}</h3>
              <span>US$ {price}</span>
              <div className="colorsContainer">
                {colors.map((item, i) => {
                  return (
                    <span
                      key={i}
                      className="colorOPT"
                      style={{ backgroundColor: `${item}` }}
                      onClick={(e) => handleImgChange(e)}
                    ></span>
                  );
                })}
              </div>
            </div>
            <div className="btnsContainer">
              <button className="contactBtn" onClick={() => setShowPopUp(true)}>
                I'm interested
              </button>
              <Link to="/products" className="returnBtn">
                Go back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
