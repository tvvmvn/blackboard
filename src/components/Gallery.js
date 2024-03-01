import { useState } from "react";

export default function Gallery({ photos }) {
  const [index, setIndex] = useState(0);
  const firstIndex = 0;
  const lastIndex = photos.length - 1;

  const prevBtn = (
    <button 
      className="absolute top-0 left-0 h-full px-2 text-4xl"
      onClick={() => setIndex(index - 1)}
    >
      &#10094;
    </button>
  )

  const nextBtn = (
    <button 
      className="absolute top-0 right-0 h-full px-2 text-4xl"
      onClick={() => setIndex(index + 1)}
    >
      &#10095;
    </button>  
  )

  return (
    <>
      <div className="mx-auto w-inherit h-80 border relative flex justify-center">
        <img 
          className="h-full object-cover"
          src={process.env.PUBLIC_URL + "/images/" + photos[index]} 
          alt={photos[index]}
        />
        {(index != firstIndex) && prevBtn}
        {(index != lastIndex) && nextBtn}
      </div>


      <div className="flex justify-center my-4">
        {photos.map((photo, i) => (
          <span
            key={i}
            className="w-2 h-2 mx-1 rounded-full bg-gray-200"
            style={{ 
              backgroundColor: (index == i) && "orange"
            }}
          >
          </span>
        ))}
      </div>
    </>  
  )
}