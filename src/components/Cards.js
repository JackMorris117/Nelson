import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <ul className='cards__items'>
           
           <CardItem
               src='shori-image-danny.jpg'
               text='lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
               label='find out more'
               path='/services'
             />
              <CardItem
               src='shori-image-danny.jpg'
               text='lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
               label='find out more'
               path='/services'
             />
           </ul>
     
      
          <ul className='cards__items'>
            <CardItem
              src='shori-background-test.png'
              text='lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
              label='find out more'
              path='/services'
            />
            <CardItem
              src='shori_logo.png'
              text='lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
              label='find out more'
              path='/products'
            />
            <CardItem
              src='shori-background-test.png'
              text='lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
              label='find out more'
              path='/sign-up'
            />
          </ul>
        </div>

  );
}

export default Cards;