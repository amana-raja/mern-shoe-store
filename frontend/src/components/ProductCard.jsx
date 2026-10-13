import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import productData from "../products.jsx";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ categoryName }) => {
  const [products, setProducts] = useState([]);

  const { cart, setCart } = useContext(CartContext);
  console.log(cart);

  // coming data from backend
  const getProducts = async () => {
    let response = await axios.get("http://localhost:5174/product");
    // console.log(response.data);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filterProducts = categoryName
    ? products.filter((product) => product.category?.name === categoryName)
    : products;

  // send data to backend
  const addProducts = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5174/product",
        productData,
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 p-6 ">
        {filterProducts.map((product) => {
          return (
            <div
              className="  cursor-pointer border border-[#D6C9B8] w-full max-w-sm  shadow-md rounded-lg p-4 overflow-hidden "
              key={product._id}
            >
              <div className="overflow-hidden rounded-md ">
                <img
                  className="w-full h-65 object-cover rounded-md transition-transform duration-200 ease-out hover:scale-105"
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
              </div>

              <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-2">
                {product.description}
              </p>
              <p className="text-lg font-bold mt-2">Rs. {product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 font-semibold rounded-md p-1.5 bg-[#D89B3D] hover:bg-[#B87920] cursor-pointer shadow-md"
              >
                Add to Cart
              </button>
              <p className="text-sm text-gray-500 mt-1">
                {product.category?.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCard;
