import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { HashLink as Link } from 'react-router-hash-link';


import blog1 from './img/blog1.jpg';
import blog2 from './img/blog2.jpg';
import blog3 from './img/blog3.jpg';
import blog4 from './img/blog4.jpg';
import blog5 from './img/blog5.jpg';

function Cards() {
  return (
    
    <div className='cards'>
      <h1>Check out these Podcasts!</h1>
      {/* <Link to="home-page#section-three">Section three</Link> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src={blog1}
              text='Listen to podcast #1! Listen to podcast #1! Listen to podcast #1!'
              label='Dame Lillard'
              path='/services'
            />
            <CardItem
              src={blog2}
              text='Listen to podcast #1! Listen to podcast #1! Listen to podcast #1!'
              label='Kevin Durant'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={blog3}
              text='Listen to podcast #1! Listen to podcast #1! Listen to podcast #1!'
              label='Lebron James'
              path='/services'
            />
            <CardItem
              src={blog4}
              text='Listen to podcast #1! Listen to podcast #1! Listen to podcast #1!'
              label='Paul George'
              path='/products'
            />
            <CardItem
              src={blog5}
              text='Listen to podcast #1! Listen to podcast #1! Listen to podcast #1!'
              label='Steph Curry'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
