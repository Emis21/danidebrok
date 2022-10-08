import React from "react";
import "../assets/css/CartItem.css";
import Delete from "../assets/statics/delete.png"

export default function CartItem(props) {
  const { nombre, precio, img, id} = props[0];
  console.log(props, " como llegan a carrito");
  const handleDelete = () => {
    props.delete_cart(id);
  };

  return (
    <>
      <div className="cart-item">
        <img src={img} alt="" className="cart-item-img" />
        <div className="cart-text">
          <h1 className="cart-item-title">{nombre}</h1>
          <h3 className="cart-item-price">${precio}</h3>
        </div>
        <img
          src={Delete}
          alt=""
          className="cart-item-delete"
          onClick={handleDelete}
        />
      </div>
    </>
  );
}
