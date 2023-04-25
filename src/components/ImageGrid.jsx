import React, { useState, useEffect } from 'react';


const ImageGrid = () => {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      fetch('https://example.com/api/images')
        .then((response) => response.json())
        .then((data) => setImages(data));
    }, []);
  
    return (
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.picture} alt={image.name} />
            <h3>{image.name}</h3>
            <p>{image.details}</p>
          </div>
        ))}
      </div>
    );
  };


  export default ImageGrid;