import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Cart from "../containers/Cart";
import Product from "../containers/Product";
import Layout from "../components/Layout";
import UseContext from "../context/UseContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UseContext>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/product" element={<Product />}></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
            </Routes>
          </Layout>
        </UseContext>
      </BrowserRouter>
    </>
  );
}
export default App;
