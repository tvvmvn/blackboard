import { useState, useEffect } from "react";

export default function App() {

  const [data, setData] = useState(localStorage.getItem("data") || "");

  function handleChange(e) {

    const value = e.target.value;
    
    setData(value);

    localStorage.setItem("data", value);
  }

  return (
    <div id="app" className="h-screen">
      <textarea 
        className="w-full h-full p-4 outline-none resize-none bg-neutral-200"
        value={data}
        onChange={handleChange}
      />
      <img
        className="fixed right-0 bottom-0 w-1/2"
        src="./cat.png"
        alt=""
      />
    </div>
  );
}

