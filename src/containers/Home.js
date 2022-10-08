import React, { useContext, useEffect } from "react";
import Contexto1 from "../context/Contexto1";
import "../assets/css/Home.css";
import Item from "../components/Item";

export default function Home() {
  useEffect(() => {
    listProducts();
  }, []);
  const { listProducts, products } = useContext(Contexto1);
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="home">
            {products.map((item) => (
              <Item {...item} key={item.id}></Item>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
