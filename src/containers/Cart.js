import React, { useContext } from "react";
import "../assets/css/Cart.css";
import CartItem from "../components/CartItem";
import Contexto1 from "../context/Contexto1";

export default function Cart() {
  const { cart } = useContext(Contexto1);
  return (
    <>
      <div className="cart1">
        <div className="cart-list">
          {" "}
          {cart.map((item) => (
            <CartItem {...item} key={item.id}></CartItem>
          ))}
        </div>
      </div>
    </>
  );
}
