import React from "react";
import "./RollingGallery.css";

const RollingGallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-item">
        <img 
          src={process.env.PUBLIC_URL + "/images/couple_1.jpeg"} 
          alt="Wedding couple" 
          className="gallery-img" 
        />
      </div>
    </div>
  );
};

export default RollingGallery; 