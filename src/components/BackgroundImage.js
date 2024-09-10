import React from 'react';
import backgroundImage from '../assets/bgimg.jpg'; // Correct path to the image


export const BackgroundImage = () => {
  return (
    <div className="background">
      <img src={backgroundImage} alt="background" />
    </div>
 );
};