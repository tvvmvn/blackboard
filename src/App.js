import { useState, useEffect, useRef } from "react";

/*
  # Amazon DATA details page

  1 Product photos
  Gallery

  2 Options & AddToCart
  localStorage

  3 Product details
  Accordion

  5 Reviews (-)
  List rendering

  6 Top button
  scroll event
*/

const DATA = {
  productId: "g0",
  name: "Galaxy S24 512GB Onyx Black",
  photos: ["Simba.webp", "Timon.webp", "Pumbaa.webp"],
  price: 999,
  catalog: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Facere ad odit assumenda quia perspiciatis corporis eaque itaque nulla eligendi, 
  debitis animi, magni fuga! Voluptas amet doloribus, 
  sapiente nihil rerum tempora?`,
  info: {
    features: {
      OS: "Android 14",
      Celluar: "5G Connector",
      Connector: "USB Type C"
    },
    details: {
      reviews: "3.9 out of 5",
      brand: "SAMSUNG",
      year: 2024
    },
    measurements: {
      weight: 197,
      dimension: "6.24 x 2.99 x 0.3"
    }
  }
}

export default function App() {

  const [added, addToCart] = useState(localStorage.getItem("cart"));  
  const [active, setActive] = useState(false);
  const [acc, setAcc] = useState({
    features: false,
    details: false,
    measurements: false
  })

  function toTop() {
    window.document.documentElement.scrollTop = 0;
  }

  // synchronize localStorage
  useEffect(() => {
    if (added) {
      localStorage.setItem("cart", DATA.productId);
    }
  }, [added])

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      
      console.log("scroll top:", scrollTop);

      if (scrollTop > 1000) {
        setActive(true);
      } else {
        setActive(false);
      }
    })
  }, [])

  return (
    <div id="app">
      <header className="border-b fixed top-0 left-0 z-10 w-full bg-white">
        <div className="flex justify-center items-center h-12">
          <h1 className="text-xl">Amazon</h1>
        </div>
      </header>

      <main className="mt-16 max-w-sm mx-auto">
        <h3 className="my-4 font-semibold">{DATA.name}</h3>

        <Gallery />

        <div className="text-4xl font-semibold my-4">
          ${DATA.price}
        </div>

        <button 
          type="button" 
          className="w-full p-2 bg-yellow-400 rounded-full disabled:opacity-50"
          onClick={() => addToCart(DATA.productId)}
          disabled={added}
        >
          Add To Cart
        </button>

        <h3 className="my-4 font-semibold">
          From the manufacturer
        </h3>
        <h1 className="text-6xl text-gray-200">{DATA.catalog}</h1>

        <h3 className="my-4 font-semibold">
          Product information
        </h3>

        <ul className="">
          <li className="mb-1">
            <button
              className="w-full p-2 bg-gray-200 text-left"
              onClick={() => setAcc({ ...acc, features: !acc.features })}
            >
              Feature & Specs
            </button>
            <div
              className="hidden"
              style={{ display: acc.features && "block" }}
            >
              <p>OS: {DATA.info.features.OS}</p>
              <p>Celluar Technology: {DATA.info.features.Celluar}</p>
              <p>Connector Type: {DATA.info.features.Connector}</p>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="w-full p-2 bg-gray-200 text-left"
              onClick={() => setAcc({ ...acc, details: !acc.details })}
            >
              Item Details
            </button>
            <div
              className="hidden"
              style={{ display: acc.details && "block" }}
            >
              <p>Customer Reviews: {DATA.info.details.reviews}</p>
              <p>Brand: {DATA.info.details.brand}</p>
              <p>Year: {DATA.info.details.year}</p>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="w-full p-2 bg-gray-200 text-left"
              onClick={() => setAcc({ ...acc, measurements: !acc.measurements })}
            >
              Measurements
            </button>
            <div
              className="hidden"
              style={{ display: acc.measurements && "block" }}
            >
              <p>Weight: {DATA.info.measurements.weight} grams</p>
              <p>Item Dimensions LxWxH: {DATA.info.measurements.dimension} inch</p>
            </div>
          </li>
        </ul>

        <button 
          className="fixed right-4 bottom-4 bg-gray-200 p-2"
          onClick={toTop}
          style={{ display: active ? "block" : "none" }}
        >
          TOP
        </button>
      </main>
      <footer className="p-8 bg-gray-400 mt-12 text-center">
        2024 Amazon
      </footer>
    </div>  
  )
}

function Gallery() {
  const [index, setIndex] = useState(0);

  const prevBtn = (
    <button 
      className="absolute top-0 left-0 h-full px-2 text-4xl text-white"
      onClick={() => setIndex(index - 1)}
    >
      &#10094;
    </button>
  )

  const nextBtn = (
    <button 
      className="absolute top-0 right-0 h-full px-2 text-4xl text-white"
      onClick={() => setIndex(index + 1)}
    >
      &#10095;
    </button>  
  )

  return (
    <>
      <div className="mx-auto w-[300px] h-[300px] relative border">
        <img 
          className="block w-full h-full object-cover"
          src={process.env.PUBLIC_URL + "/images/" + DATA.photos[index]} 
          alt=""
        />
        {(index != 0) && prevBtn}
        {(index != 2) && nextBtn}
      </div>


      <div className="flex justify-center">
        {DATA.photos.map((photo, i) => (
          <span
            key={i}
            className=""
            style={{ 
              color: index == i ? "red" : "black"
            }}
          >
            *
          </span>
        ))}
      </div>
    </>  
  )
}