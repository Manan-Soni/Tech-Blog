import React, { useState, useEffect, useRef } from 'react';
import img1 from 'D:/React/blogwebsite/src/assets/h1.png';
import img2 from 'D:/React/blogwebsite/src/assets/h2.png';
import img3 from 'D:/React/blogwebsite/src/assets/h3.png';

const images = [
  img1,
  img2,
  img3,
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Automatically change slides
  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'transform 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);


  return (
    <div className="slideshow-container">
      <div className="slides" ref={slideRef}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slide-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
