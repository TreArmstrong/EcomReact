import React from 'react';
import './styles.css';
import Video from './videos-images /heroVid.mp4' 




function HeroSection() {
  return (
    <section className="hero">
      <video id="hero-video" autoPlay loop>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button id="mute-toggle">Mute</button>
    </section>
  );
}




export default HeroSection;
