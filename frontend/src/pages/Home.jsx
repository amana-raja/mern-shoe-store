import React from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      {/* ............HERO SECTION   */}
      <div
        className="relative z-0 mx-6 mt-6 h-70 md:h-85 overflow-hidden rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1800&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#F5EFE6] via-[#F5EFE6]/90 to-transparent"></div>

        <div className="relative z-10 flex h-full items-center px-6 md:px-14">
          <div className="max-w-md">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#B87920]">
              Find Your Perfect Pair
            </p>

            <h1 className="text-3xl font-bold leading-tight text-[#1F1F1F] md:text-5xl">
              Step Into Your Style
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
              Discover beautiful heels, comfortable slippers, and stylish boots
              for every occasion.
            </p>

            <button
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="mt-5 rounded-md bg-[#B87920] px-6 py-3 font-semibold text-white transition hover:bg-[#966018]"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div id="products">
        {" "}
        <ProductCard />
      </div>
    </>
  );
};

export default Home;
