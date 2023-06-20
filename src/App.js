import { useState, useEffect } from "react";

export default function App() {

  const [data, setData] = useState(localStorage.getItem("data") || "");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.title = "nigrojin's board"
  })

  function handleChange(e) {

    const value = e.target.value;
    
    setData(value);

    localStorage.setItem("data", value);
  }

  return (
    <div id="app" className="border-8 h-screen">
      <textarea 
        className="w-full p-4 outline-none h-full"
        value={data}
        onChange={handleChange}
      />
      <img
        className="fixed right-0 bottom-0 w-1/2"
        src="/cat.png"
        alt=""
      />
    </div>
  );
}

