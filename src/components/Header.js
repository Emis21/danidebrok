import React from "react";
import "../assets/css/Home.css"
import cartImage from "../assets/statics/cart.png"
import goBackImage from "../assets/statics/goback.jpg"

export default function Header() {
  return (
    <>
      <a href="/cart">
        <img src={cartImage} alt="" className="cart" />
      </a>
      <a href="/">
        <img src={goBackImage} alt="" className="goback" />
      </a>
      <a href="/product">
        <img src="" alt="" />
      </a>
      <h1 className="title">DevrockStore</h1>
    </>
  );
}
