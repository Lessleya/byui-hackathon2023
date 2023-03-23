import React from 'react';
import './card.css';
import white from '../../image/white.png';

function Card({title,imageurl,body}) {
  return (
    <div className='card-container'>
        <div className='image-contaniner'>
            <img className='card-image' src={imageurl} alt='' />
        </div>
        <div className='text-container'>
            <h2>
                {title}
            </h2>
            <p1>
                {body}
            </p1>
        </div>
         
    </div>
  )
}

export default Card