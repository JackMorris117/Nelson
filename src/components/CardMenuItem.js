import React from 'react';

function CardMenuItem(props) {
  return (
    <>
      <li className='cards__menu__item'>
          
          <figure className='cards__menu__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__menu__item__img'
              alt='Nelson Bakery'
              src={props.src}
            />
          </figure>
          <div className='cards__menu__item__info'>
            <h5 className='cards__menu__item__text'>{props.text}</h5>
          </div>
      </li>
    </>
  );
}

export default CardMenuItem;