import { useState,useEffect } from "react";
import "./Banner.css";
import { useRef } from "react";

function Banner() {
  const [marginLeft, setMarginLeft] = useState(0);

  const slides = [
    "https://w7.pngwing.com/pngs/802/901/png-transparent-starbuck-cup-thumbnail.png",
    "https://www.pngall.com/wp-content/uploads/4/Starbucks-Cup-PNG-Free-Image.png",
    "https://w7.pngwing.com/pngs/802/901/png-transparent-starbuck-cup-thumbnail.png",
    "https://w7.pngwing.com/pngs/802/901/png-transparent-starbuck-cup-thumbnail.png",
    "https://w7.pngwing.com/pngs/802/901/png-transparent-starbuck-cup-thumbnail.png",
  ];
  const timeRef=useRef(null);
  const goToNext = () => {
    marginLeft === (slides.length - 1) * 100
      ? setMarginLeft(0)
      : setMarginLeft(marginLeft + 100);
  };
  const goToPrev = () => {
    marginLeft <= 0
      ? setMarginLeft((slides.length - 1) * 100)
      : setMarginLeft(marginLeft - 100);
  };
  useEffect(()=> {
    if(timeRef.current){
      clearTimeout(timeRef.current)
    }
    timeRef.current=setTimeout(()=>{
      goToNext()
    },3000)
    return () => clearInterval(timeRef.current)
  },[goToNext])

  return (
    <div className="py-10 w-full flex gap-4 justify-center items-center">
      <button className="z-10" onClick={goToPrev}>
        <i className="fa-solid fa-circle-chervon-left text-3x1"></i>
      </button>
      <div className="w-[600px] h-[300px] overflow-hidden">
        <div
          style={{ marginLeft: `-${marginLeft}%` }}
          className="flex w-full h-full duration-1000"
        >
          {slides.map((image) => (
            <img
              className="rounded object-cover object-center min-w-full min-h-full shadow-lg shadow-black"
              src={image}
              key={image}
            />
          ))}
        </div>
      </div>
      <button className="z-10 bg-gray
      sax w-10 h-10" onClick={goToNext}>
        <i className="fa-solid fa-circle-chervon-right text-3x1"></i>
      </button>
    </div>
  );
}

export default Banner;
