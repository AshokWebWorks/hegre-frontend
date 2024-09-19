import React from "react";

 import HeroImage from '../../assets/mira-nude-beach-photo-shoot-07.jpg'
function Hero() {
  return (
    <div id="hero-section">
      <div className="w-full h-full">
        <img
         src={HeroImage} 
              
        
          className=" object-cover w-full h-full object-center"
          alt="Hero Section Image"
        />
      </div>
    </div>
  );
}

export default Hero;
