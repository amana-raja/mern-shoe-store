import React, { useEffect, useRef, useState, useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [showCategory, setShowCategory] = useState(false);

  const [categories, setCategories] = useState([]);

  const { cart } = useContext(CartContext);

  const getCategories = async () => {
    let response = await axios.get("http://localhost:5174/category");
    setCategories(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);
  // console.log(categories);

  const dropDownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropDownRef.current && // if dropDown exists  AND the click was not inside the dropdown
        !dropDownRef.current.contains(event.target)
      ) {
        setShowCategory(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="bg-[#F5EFE6] relative z-50 text-[#1F1F1F] text-2xl mt-4 p-2 flex justify-between items-center gap-4 ">
        <div className="font-bold  ">LOGO</div>

        {/* ...........CATEGORIES  */}

        <div ref={dropDownRef} className="relative">
          <button
            className=" flex  justify-center items-center gap-2 cursor-pointer rounded-md bg-[#D89B3D] hover:bg-[#B87920] text-[#1F1F1F]  p-3 px-5 text-2xl font-semibold"
            onClick={() => setShowCategory(!showCategory)}
          >
            Categories
            <FaAngleDown
              className={`text-2lg ${showCategory ? "rotate-180" : ""}`}
            />
          </button>

          {/* .........DROP DOWN  */}

          <div
            className={`border border-[#D6C9B8] rounded-md shadow-md select-none  bg-[#FFFCF7] w-45 top-full mt-2 absolute flex flex-col  items-center p-2 transition-all duration-400 ${showCategory ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
          >
            {categories.map((category) => {
              return (
                <Link
                  className="relative py-2 group hover:font-semibold"
                  key={category._id}
                  to={`/${category.name.toLowerCase()}`}
                >
                  {category.name}
                  {/* UNDERLINE effect */}
                  <span className=" absolute bottom-0 left-0 w-0 h-0.5 bg-[#D89B3D] transition-all duration-300 group-hover:w-full  "></span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* .............SEARCH BAR  */}

        <div className="flex items-center relative">
          <input
            className="bg-[#FFFCF7] border border-[#D6C9B8] rounded-md px-4 py-2 pr-10"
            type="text"
            placeholder="Search shoes....."
          />
          <div className="absolute right-3 text-gray-500">
            <CiSearch />
          </div>
        </div>

        {/* CART SECTION  */}
        <div className="flex items-center gap-1">
          <button className=" font-semibold  cursor-pointer text-2xl text-[#1F1F1F]">
            Cart
          </button>
          <div className="cursor-pointer text-4xl">
            <GiShoppingCart />
          </div>
          <div className="rounded-full bg-[#D89B3D] flex justify-center items-center text-md h-8 w-8 font-semibold p-1">
            {cart.length}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
