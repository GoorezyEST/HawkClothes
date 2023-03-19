import React, { useState } from "react";
import "./Home.css";
import Nav from "../navbar/Nav";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);

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
        {loading && (
          <div className="home_spinner_container">
            <div className="home_spinner"></div>
          </div>
        )}
        <img
          src="https://svgur.com/i/rFs.svg"
          alt="Hawk Clothes logotype"
          onLoad={() => setLoading(false)}
          className={loading ? "hidden" : "null"}
        />
      </div>
    </section>
  );
}

export default Home;
