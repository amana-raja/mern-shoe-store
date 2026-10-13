import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Heels from "./pages/Heels";
import Slippers from "./pages/Slippers";
import Boots from "./pages/Boots";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <Navbar />
        {/* <ProductCard /> */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/heels" element={<Heels />}></Route>
          <Route path="/slippers" element={<Slippers />}></Route>
          <Route path="/boots" element={<Boots />}></Route>
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
