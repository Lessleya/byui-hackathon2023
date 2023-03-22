import React from 'react';
import aboutimage from '../../image/ILLUSTRATION 1.png';
import greenCirle from '../../image/greenCirle.png';
import './styles.css';


function About() {
  return (
    <div className='about-container' style={{ position: 'relative' }}>
        <div className='image'>
            <img className='image1' src={greenCirle} alt="green cirle"  />
            <img className='image2' src={aboutimage} alt="about image"  />
        </div>
        <div className='text'>
            <h1>WHAT IS HACK BYUI?</h1>    
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
        </div> 
    </div>
  )
}

export default About
