import React from 'react';
import Card from './card';
import './styles.css';
import image1 from '../../image/image1.png';
import image2 from '../../image/image2.png';
import image3 from '../../image/image3.png';
import image4 from '../../image/image4.png';
import image5 from '../../image/image5.png';

function Categories({title,imageurl,body }) {
  return (

    <div className='categories'>
      <div className='title'>
        Categories
      </div>
      <div className='cards-container'>
        <Card 
        title='Web Design/Mobile Development'
        imageurl={image1}
        body="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <Card 
        title='Data Science'
        imageurl={image2}
        body="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <Card
        title='Game Design'
        imageurl={image3}
        body='test 1'
        />
        <Card
        title='Hadware'
        imageurl={image4}
        body='test2'
        />
        <Card
        title='General'
        imageurl={image5}
        body='test 3 '
        />
      </div>
    </div>
  )
}

export default Categories
