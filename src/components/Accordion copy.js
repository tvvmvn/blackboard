import { useState } from "react";

const DATA = {
  features: {
    os: "Android 14",
    celluar: "5G Connector",
    connector: "USB Type C"
  },
  details: {
    review: 3.9,
    brand: "SAMSUNG",
    year: 2024,
  },
  measurements: {
    weight: 197,
    dimension: "6.24 x 2.99 x 0.3",
  }
};

const keys = Object.keys(DATA);

export default function Accordion() {

  const accordions = keys.map(key => (
    <Tab name={key} info={DATA[key]} />
  ))

  return (
    <>
      <h3 className="my-4 font-semibold">
        Product information
      </h3>

      <ul className="">
        {accordions}
      </ul>  
    </>
  )
}

function Tab({ name, info }) {
  const [active, setActive] = useState(false);

  const keys = Object.keys(info);

  const dataList = keys.map(key => (
    <>
      <dt className="p-2 font-semibold">{key}</dt>
      <dd className="p-2">
        {info[key]}
      </dd>
    </>
  ))

  return (
    <li className="mb-1">
      <button
        className="w-full px-4 py-2 bg-gray-100 flex justify-between"
        onClick={() => setActive(!active)}
      >
        <p>{name}</p>
        <span>{active ? "-" : "+"}</span>
      </button>
      <dl
        className="grid grid-cols-2 overflow-hidden transition-all"
        style={{ maxHeight: active ? "200px" : "0px" }}
      >
        {dataList}
      </dl>
    </li>  
  )
}