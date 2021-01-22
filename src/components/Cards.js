import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      
     
      
          <ul className='cards__items'>
            <CardItem
               src='tart3.jpg'
              label='Menu'
              path='/menu'
            />
          
            <CardItem
               src='tart.jpg'
              label='Orders'
              path='/contact'
            />
            <CardItem
               src='tart5.jpg'
              label='Gallery'
              path='/gallery'
            />
            
            
            
          </ul>
          
        </div>

  );
}

export default Cards;