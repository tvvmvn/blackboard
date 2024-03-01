import { useState } from "react";

export default function Accordion({ info }) {
  
  const [features, setFeatures] = useState(false);
  const [details, setDetails] = useState(false);
  const [measurements, setMesurements] = useState(false);

  return (
    <>
    <h3 className="my-4 font-semibold">
      Product information
    </h3>

    <ul className="">
      <li className="mb-1">
        <button
          className="w-full p-2 border flex justify-between"
          onClick={() => setFeatures(!features)}
        >
          <p>Feature & Specs</p>
          <span>{features ? "-" : "+"}</span>
        </button>
        <div
          className="hidden"
          style={{ display: features && "block" }}
        >
          <p>OS: {info.features.OS}</p>
          <p>Celluar Technology: {info.features.Celluar}</p>
          <p>Connector Type: {info.features.Connector}</p>
        </div>
      </li>

      <li className="mb-1">
        <button
          className="w-full p-2 border text-left"
          onClick={() => setDetails(!details)}
        >
          Item Details
        </button>
        <div
          className="hidden"
          style={{ display: details && "block" }}
        >
          <p>Customer Reviews: {info.details.reviews}</p>
          <p>Brand: {info.details.brand}</p>
          <p>Year: {info.details.year}</p>
        </div>
      </li>

      <li className="mb-1">
        <button
          className="w-full p-2 border text-left"
          onClick={() => setMesurements(!measurements)}
        >
          Measurements
        </button>
        <div
          className="hidden"
          style={{ display: measurements && "block" }}
        >
          <p>Weight: {info.measurements.weight} grams</p>
          <p>Item Dimensions LxWxH: {info.measurements.dimension} inch</p>
        </div>
      </li>
    </ul>  
    </>
  )
}
