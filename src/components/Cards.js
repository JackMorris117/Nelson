import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      
     
      
          <ul className='cards__items'>
            <CardItem
               src='tart3.jpg'
              label='Cakes'
              path='/services'
            />
          
            <CardItem
               src='tart.jpg'
              label='Us'
              path='/products'
            />
            <CardItem
               src='tart5.jpg'
              label='Orders'
              path='/sign-up'
            />
            
            
          </ul>
          
        </div>

  );
}

export default Cards;