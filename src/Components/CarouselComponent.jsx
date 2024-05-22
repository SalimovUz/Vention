import React, { useState, useEffect } from "react";
import image1 from "../../public/karuselone.jpg";
import image2 from "../../public/karuseltwo.jpg";
import image3 from "../../public/karuselth.jpg";
import image4 from "../../public/karuselfour.svg";
import "../App.css"

const numbers = ["01", "02", "03", "04"];
const colors = ["bg-orange-500", "bg-pink-500", "bg-orange-800", "bg-blue-500"];
const texts = [
  "Engineering peace of mind",
  "International Invention Day",
  "AI innovation",
  "Expert software development",
];
const images = [image1, image2, image3, image4];

function Pageone() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % numbers.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (i) => {
    setIndex(i);
  };

  return (
    <div id="carusel" className="flex flex-col items-center justify-center h-screen bg-white relative border-b-[1px]">
      <div
        className={`absolute top-0 left-0 m-4 mt-16 px-16 shadow-lg h-[30%] ${colors[index]}`}
      >
        <h1 id="blacked" className="text-8xl font-semibold text-black w-[700px] h-[50%]">
          {texts[index]}
        </h1>
      </div>
      <p className="text-black mt-40 w-[40%] mr-[30%] p-4">
        Vention developers partner with innovative companies from startups to
        Fortune 500s, lending the AI engineering expertise to propel them to new
        heights and the edge to outpace the competition.
      </p>
      <button
        className={`mt-24 px-4 py-2 ${colors[index]} text-white mr-80 w-[30%] h-[9%] mt-4`}
        onClick={() => handleClick(index)}
      >
        {texts[index]} Button
      </button>
      <div className="absolute top-20 right-10 flex items-end">
        {numbers.map((number, i) => (
          <div id="txt"
            key={i}
            onClick={() => handleClick(i)}
            className={`transition-transform duration-700 cursor-pointer w-16 ${
              i === index
                ? "text-4xl text-black border-b-4 w-32 "
                : "text-2xl text-gray-400 border-b-2"
            } mx-2 border-black`}
            style={{ transform: `translateX(${i === index ? "20px" : "30px"})` }}
          >
            {number}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 mb-[50px] right-4">
        <img
          src={images[index]}
          alt={`Slide ${index + 1}`}
          className="w-540 h-80 mr-16 shadow-lg"
        />
      </div>
    </div>
  );
}

export default Pageone;
