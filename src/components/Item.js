import React, { useContext } from "react";
import "../assets/css/Item.css";
import Contexto1 from "../context/Contexto1";

export default function Item(props) {
  const {nombre, precio, medidas, img, id } = props;
  const { addCart } = useContext(Contexto1);
  return (
    <>
      <div className="home-item">
        <img src={img} alt="" className="home-item-img" />
        <div className="home-item-info">
          <h1 className="home-item-title">{nombre}</h1>
          <p className="home-item-measures">Medidas: {medidas}</p>
          <div className="home-item-actions">
            <h3 className="home-item-price">Price $ {precio}</h3>
            <button
              className="home-item-buy"
              onClick={() => {
                addCart(id);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
