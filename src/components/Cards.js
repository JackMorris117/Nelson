import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      
     
      
          <ul className='cards__items'>
            <CardItem
               src='tart3.jpg'
              label='find out more'
              path='/services'
            />
            <CardItem
               src='tart.jpg'
              label='find out more'
              path='/products'
            />
            <CardItem
               src='tart5.jpg'
              label='find out morefind out morefind out morefind out morefind out morefind out morefind out morefind out more'
              path='/sign-up'
            />
            
            
          </ul>
          <ul className='cards__items'>
            <CardItem
               src='cake3.jpg'
              label='find out more'
              path='/services'
            />
            <CardItem
               src='cake4.jpg'
              label='find out more'
              path='/products'
            />
            <CardItem
               src='cake5.jpg'
              label='find out morefind out morefind out morefind out morefind out morefind out morefind out morefind out more'
              path='/sign-up'
            />
            <CardItem
               src='cake6.jpg'
              label='find out morefind out morefind out morefind out morefind out morefind out morefind out morefind out more'
              path='/sign-up'
            />
            <CardItem
               src='cake6.jpg'
              label='find out morefind out morefind out morefind out morefind out morefind out morefind out morefind out more'
              path='/sign-up'
            />
            
          </ul>
        </div>

  );
}

export default Cards;