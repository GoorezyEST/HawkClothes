import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import SingleProduct from "./components/single_product/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faq" element={<Contact />} />
        <Route
          path="/products/hodies"
          element={
            <SingleProduct
              url={[
                "https://i.imgur.com/yVCkug4.jpg",
                "https://i.imgur.com/Xz3GN5e.jpg",
              ]}
              name="Hawk Hodie"
              price="33.50"
              colors={["black", "lightgrey"]}
            />
          }
        />
        <Route
          path="/products/sweatshirt"
          element={
            <SingleProduct
              url={[
                "https://i.imgur.com/ZcMjCn6.jpg",
                "https://i.imgur.com/Ylex0Vf.jpg",
              ]}
              name="Hawk Sweatshirt"
              price="26.23"
              colors={["black", "lightgrey"]}
            />
          }
        />
        <Route
          path="/products/cap"
          element={
            <SingleProduct
              url={[
                "https://i.imgur.com/lE3XITO.jpg",
                "https://i.imgur.com/kFoelUR.jpg",
              ]}
              name="Hawk Cap"
              price="12.14"
              colors={["black", "lightgrey"]}
            />
          }
        />
        <Route
          path="/products/mask"
          element={
            <SingleProduct
              url={["https://i.imgur.com/IEe2aM4.jpg"]}
              name="Hawk Mask"
              price="5.00"
              colors={["black"]}
            />
          }
        />
        <Route
          path="/products/t-shirt"
          element={
            <SingleProduct
              url={[
                "https://i.imgur.com/1qMbOZ5.jpg",
                "https://i.imgur.com/st8xsV7.jpg",
                "https://i.imgur.com/l8ONIcL.jpg",
                "https://i.imgur.com/orTftOY.jpg",
              ]}
              name="Hawk T-Shirt"
              price="17.36"
              colors={["black", "lightgrey", "purple", "blue"]}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
