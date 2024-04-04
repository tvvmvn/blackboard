import { useState, useEffect, useRef } from "react";
import Accordion from "./components/Accordion";
import Gallery from "./components/Gallery";

const PRODUCT = {
  productId: "g0",
  name: "Galaxy S24 512GB Amber Yellow",
  manufacturer: "SAMSUNG",
  price: 799,
  catalog: "catalog.png"
}

export default function App() {
  const [added, setAdded] = useState(localStorage.getItem("cart"));  
  const [active, setActive] = useState(false);

  function addToCart() {
    alert("Added");
    localStorage.setItem("cart", PRODUCT.productId);
    setAdded(PRODUCT.productId);
  }

  function toTop() {
    window.document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    document.title = `Amazon - ${PRODUCT.name}`;

    document.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      
      console.log("scroll top:", scrollTop);

      if (scrollTop > 1000) {
        setActive(true);
      } else {
        setActive(false);
      }
    })
  }, []);

  return (
    <div id="app">
      {/* Header */}
      <header className="border-b fixed top-0 left-0 z-10 w-full bg-white">
        <div className="flex justify-center items-center h-12">
          <img 
            className="h-6"
            src={process.env.PUBLIC_URL + "/images/logo.png"} 
            alt="logo" 
          />
        </div>
      </header>

      <main className="mt-16 max-w-md mx-auto px-4 pb-8">
        {/* Product name */}
        <small className="text-xs text-blue-400 font-semibold">
          {PRODUCT.manufacturer}
        </small>
        <h3 className="mb-4 text-gray-800">{PRODUCT.name}</h3>

        {/* Product photos */}
        <Gallery />

        <div className="text-4xl font-semibold my-8">
          ${PRODUCT.price}
        </div>

        {/* AddToCart button */}
        <button 
          type="button" 
          className="w-full p-3 bg-yellow-400 font-semibold rounded-full disabled:opacity-50"
          onClick={addToCart}
          disabled={added}
        >
          Add To Cart
        </button>

        {/* Product catalog */}
        <h3 className="my-4 font-semibold">
          From the manufacturer
        </h3>
        <img 
          src={process.env.PUBLIC_URL + "/images/" + PRODUCT.catalog} 
          alt={PRODUCT.catalog} 
        />

        {/* Accordion */}
        <Accordion />

        {/* Top button */}
        <svg 
          className="fixed w-8 right-4 bottom-8 opacity-50"
          onClick={toTop}
          style={{ display: active ? "block" : "none" }}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z"/>
        </svg>
      </main>
    </div>  
  )
}
