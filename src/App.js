import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/home/Home";
import Product from "./pages/itemDetail/ItemDetailView";
import ProductList from "./pages/itemList/ProductList";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productList/:id" element={<ProductList />} />
      </Routes>
    </>
  );
};

export default App;
