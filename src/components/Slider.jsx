import React, { useState } from 'react';
import './Slider.css';
import hand1 from '/images/hand1.jpg';
import hand2 from '/images/hand2.jpg';
import hand3 from '/images/hand3.jpg';


const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hand1, hand2, hand3];

  const handleNextImage = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="slider">
      <button className="buttonLeft" onClick={handlePreviousImage}/>
      <img src={images[currentImage]} alt="slider" />
      <button className="buttonRight" onClick={handleNextImage}/>
    </div>
  );
}
export default Slider;