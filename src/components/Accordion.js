import { useState } from "react";

export default function Accordion({ info }) {

  const list = [
    {
      name: "Feature & Specs",
      dl: [
        { dt: "OS", dd: info.features.os },
        { dt: "Cellular Technology", dd: info.features.cellular },
        { dt: "Connector", dd: info.features.connector },
      ]
    },
    {
      name: "Item Details",
      dl: [
        { dt: "Customer Reviews", dd: info.details.reviews },
        { dt: "Brand", dd: info.details.brand },
        { dt: "Year", dd: info.details.year },
      ]
    },
    {
      name: "Measurements",
      dl: [
        { dt: "Weight", dd: info.measurements.weight },
        { dt: "Item Dimension", dd: info.measurements.dimension },
      ]
    },
  ]

  const l = list.map(item => (
    <Tab name={item.name} dl={item.dl} />
  ))

  return (
    <>
      <h3 className="my-4 font-semibold">
        Product information
      </h3>

      <ul className="">
        {l}
      </ul>  
    </>
  )
}

function Tab({ name, dl }) {
  const [active, setActive] = useState(false);

  const data = dl.map(item => (
    <>
      <dt className="font-semibold p-2">{item.dt}</dt>
      <dd className="p-2">{item.dd}</dd>
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
        {data}
      </dl>
    </li>
  )
}