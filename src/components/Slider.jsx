import React, { useState } from 'react';
import './Slider.css';
import hand1 from '/images/hand1.jpg';
import hand2 from '/images/hand2.jpg';
import hand3 from '/images/hand3.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 0,
      image: hand1,
    },
    {
      id: 1,
      image: hand2,
    },
    {
      id: 2,
      image: hand3,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className='slider-container'>
      <div className='slider-wrapper'>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={
              slide.id === currentSlide
                ? 'slider-slide active'
                : 'slider-slide'
            }
          >
            <img src={slide.image} alt='slider image' />
          </div>
        ))}
        <div className='slider-arrow left' onClick={prevSlide}>
          &lt;
        </div>
        <div className='slider-arrow right' onClick={nextSlide}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export default Slider;
