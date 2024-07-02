import React, { useState } from 'react';

const Carousel = ({ items, setCurrentCategory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel relative w-full">
        <div className="carousel-inner relative overflow-hidden flex justify-start gap-2">
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item w-full md:w-1/3 lg:w-1/5 xl:w-1/5 p-1 rounded-lg flex items-center justify-center ${
                index === currentIndex ? 'active' : ''
              }`}
            >
              <div className="bg-gray-200 rounded-full p-3">
                <a href="#" className="text-gray-800" onClick={()=> setCurrentCategory(item)}>
                  {item}
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev absolute top-0 left-0 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full z-10"
          onClick={handlePrevClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-800"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="carousel-control-next absolute top-0 right-0 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full z-10"
          onClick={handleNextClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-800"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
