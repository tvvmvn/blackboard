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
  name: "Galaxy S24",
  color: ["Black", "Grey", "Purple"],
  storage: [128, 256, 512],
  photos: ["Simba.webp", "Timon.webp", "Pumbaa.webp"],
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

  const [selected, setSelected] = useState({
    color: DATA.color[0],
    storage: DATA.storage[0],
  });

  const [acc, setAcc] = useState({
    features: false,
    details: false,
    measurements: false
  })

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setSelected({ ...selected, [name]: value});
  }

  function addToCart() {
    console.log(selected);

    localStorage.setItem("cart", JSON.stringify(selected));
  }

  function toTop() {
    window.document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <h1>Amazon</h1>
      <p>Appliance / Electric devices / Smartphones</p>
      <hr />

      <h3>Product Name</h3>
      <p>{DATA.name}</p>

      <h3>Photos</h3>
      <Gallery />

      <h3>Colors</h3>
      <ul>
        {DATA.color.map(item => (
          <label key={item}>
            <input 
              type="radio" 
              name="color" 
              value={item} 
              checked={item == selected.color}
              onChange={handleChange} 
            />
            {item} {" "}
          </label> 
        ))}
      </ul>

      <h3>Storage</h3>
      <ul>
        {DATA.storage.map(item => (
          <label key={item}>
            <input 
              type="radio" 
              name="storage" 
              value={item} 
              checked={item == selected.storage}
              onChange={handleChange} 
            />
            {item}GB {" "}
          </label>
        ))}
      </ul>

      <button type="button" onClick={addToCart}>
        Add To Cart
      </button>

      <hr />

      <h3>Product Details</h3>
      <h1 style={{ color: "#ddd" }}>{DATA.catalog}</h1>

      <hr />

      <h3>Product information (Accordion)</h3>

      <div className="">
        <section>
          <button 
            onClick={() => setAcc({ ...acc, features: !acc.features})}
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
        </section>
        <section>
          <button 
            onClick={() => setAcc({ ...acc, details: !acc.details})}
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
        </section>
        <section>
          <button 
            onClick={() => setAcc({ ...acc, measurements: !acc.measurements})}
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
        </section>
      </div>

      <hr />

      <button onClick={toTop}>Bring me TOP</button>
    </>  
  )
}

function Gallery() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <img 
        src={process.env.PUBLIC_URL + "/images/" + DATA.photos[index]} 
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
        alt=""
      />

      <p>
        <button onClick={() => setIndex(index - 1)}>Prev</button>
        <button onClick={() => setIndex(index + 1)}>Next</button>
      </p>

      <div className="">
        {DATA.photos.map((photo, i) => (
          <span
            key={i}
            style={{ 
              width: "100px", 
              height: "100px", 
              objectFit: "cover",
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