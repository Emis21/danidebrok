import React from "react";
import axios from "axios";
import Contexto1 from "./Contexto1";
import Reducer from "./Reducer";
import { useReducer } from "react";

export default function UseContext(props) {
  const { children } = props;
  const initialState = {
    products: [],
    cart: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  const listProducts = async () => {
    const res = await axios.get(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    );
    dispatch({ type: "product_list", payload: res.data });
    console.log(res.data, "desde useContext");
  };
  const addCart = (item) => {
    console.log(item,"desde useContext");
    dispatch({ type: "add_cart", payload: item });
  };
  const deleteCart = (item) => {
    dispatch({ type: "delete_cart ", payload: item });
    console.log("blablab" + item);
  };

  return (
    <Contexto1.Provider
      value={{
        products: state.products,
        cart: state.cart,
        listProducts,
        addCart,
        deleteCart,
      }}
    >
      {children}
    </Contexto1.Provider>
  );
}
