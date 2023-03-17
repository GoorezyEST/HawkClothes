import React from "react";
import "./Home.css";
import Nav from "../navbar/Nav";
import Image from "../../assets/hawkClothesFullLogo.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home_section">
      <Nav />
      <div className="home_content">
        <div className="home_text">
          <h1>Hawk Clothes</h1>
          <p>Assurance of comfort, style you can rely on</p>
          <Link className="home_button" to="/products">
            Our products
          </Link>
        </div>
        <img src={Image} alt="Hawk Clothes logotype" />
      </div>
    </section>
  );
}

export default Home;
