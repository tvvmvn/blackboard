import { useState, useEffect, useRef } from "react";

/*
  # Amazon product details page

  1 Product photos
  Gallery

  2 Options & AddToCart
  localStorage

  3 Product details
  Accordion

  5 Reviews
  List rendering

  6 Top button
  scroll event
*/

const product = {
  name: "Galaxy S24",
  color: ["Black", "Grey", "Purple"],
  storage: [128, 256, 512]
}

export default function App() {

  const [cart, setCart] = useState({
    color: "",
    storage: "",
  });

  const [acc, setAcc] = useState({
    features: false,
    details: false,
    measurements: false
  })

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setCart({ ...cart, [name]: value});
  }

  function addToCart() {
    console.log(cart);
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
      <p>{product.name}</p>

      <h3>Images</h3>
      <p>Gallery</p>

      <h3>Colors</h3>
      <ul>
        {product.color.map(item => (
          <label key={item}>
            <input 
              type="radio" 
              name="color" 
              value={item} 
              onChange={handleChange} 
            />
            {item} {" "}
          </label> 
        ))}
      </ul>

      <h3>Storage</h3>
      <ul>
        {product.storage.map(item => (
          <label key={item}>
            <input 
              type="radio" 
              name="storage" 
              value={item} 
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

      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Facere ad odit assumenda quia perspiciatis corporis eaque itaque nulla eligendi, 
        debitis animi, magni fuga! Voluptas amet doloribus, 
        sapiente nihil rerum tempora?
      </h1>

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
            features...
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
            details...
          </div>
        </section>
      </div>

      <hr />

      <h3>Customer reviews</h3>
      <ul>
        <li>..</li>
        <li>..</li>
        <li>..</li>
      </ul>

      <button onClick={toTop}>Bring me TOP</button>
    </>  
  )
}