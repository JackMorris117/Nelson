import React from 'react';
import './CardsMenu.css';
import CardMenuItem from './CardMenuItem';

function CardsMenu() {
  return (
    <div className='cards__menu'>
      
     
      
          <ul className='cards__menu__items'>
            <CardMenuItem
               src='tart3.jpg'
              label='Raspberry tarts £3 each'
              
            />
            <CardMenuItem
               src='bun.jpg'
               label='Friands £2.50 each'
              
            />
            
            <CardMenuItem
               src='carrot.jpg'
               label='Carrot Loaf £15'
              
            />
            </ul>

            <ul className='cards__menu__items'>

            
            <CardMenuItem
               src='strawberry.jpg'
               label='Chocolate and Strawberry mini cakes £3.00 each'
              
            />
             <CardMenuItem
               src='pistacio.jpg'
               label='6" Lime and Raspberry Celebration cake £35'
              
            />
             <CardMenuItem
               src='tart5.jpg'
               label='8" Frangipane tart £22'
              
            />
            
          </ul>
          <ul className='cards__menu__items'>

            
            <CardMenuItem
               src='cake-bespoke1.jpg'
               label='6" Lemon and Raspberry Cake £35'
              
            />
            <CardMenuItem
               src='cake-bespoke3.jpg'
               label='6" Vanilla and Strawberry Cake £35'
              
            />
             <CardMenuItem
               src='cake-bespoke2.jpg'
               label='8" Chocolate Cake £50'
              
            />
      
            
          </ul>
        
          
        </div>

  );
}

export default CardsMenu;