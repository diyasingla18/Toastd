import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle }) => {
  return (
    <div className='Hero'>
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
