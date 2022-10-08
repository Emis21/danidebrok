import React from "react";
import "../assets/css/Product.css"
import Img0 from "../assets/statics/pig.png";

export default function Product() {
  return (
    <>
      <div class="detail">
        <img src={Img0} alt="" class="detail-img" />
        <h1 className="home-item-title">Cerebrito Loquito</h1>
        <p className="home-item-measures">Medidas: 20 x 10</p>
        <div className="home-item-actions">
          <h3 className="home-item-price">$987</h3>
          <a href="cart.html">
          <button className="home-item-buy">+</button></a>
        </div>
        <p>You must have these stickers!</p>
      </div>
    </>
  );
}
