import React from 'react';
import aboutimage from '../../image/ILLUSTRATION 1.png';
import './styles.css';

function About() {
  return (
    <div className='about-container'>
        <div className='image'>
            <img src={aboutimage} alt="about image" />
        </div>
        <div className='text'>
            <h1>WHAT IS HACK BYUI?</h1>    
            <p>.........................................</p>
        </div> 
    </div>
  )
}

export default About
