import { useState } from "react";

const PHOTOS = ["product-1.jpeg", "product-2.jpeg", "product-3.jpeg"];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const firstIndex = 0;
  const lastIndex = PHOTOS.length - 1;

  const prevBtn = (
    <button 
      className="absolute top-0 left-0 h-full px-2 text-4xl text-gray-400"
      onClick={() => setIndex(index - 1)}
    >
      &#10094;
    </button>
  )

  const nextBtn = (
    <button 
      className="absolute top-0 right-0 h-full px-2 text-4xl text-gray-400"
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
          src={process.env.PUBLIC_URL + "/images/" + PHOTOS[index]} 
          alt={PHOTOS[index]}
        />
        {(index != firstIndex) && prevBtn}
        {(index != lastIndex) && nextBtn}
      </div>


      <div className="flex justify-center my-4">
        {PHOTOS.map((photo, photoIndex) => (
          <span
            key={photoIndex}
            className="w-2 h-2 mx-1 rounded-full bg-gray-200"
            style={{ 
              backgroundColor: (index == photoIndex) && "orange"
            }}
          >
          </span>
        ))}
      </div>
    </>  
  )
}