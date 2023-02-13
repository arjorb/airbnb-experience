import React from 'react';
import CardItem from './CardItem';

const Card = () => {
  return (
    <>
      <div className='p-7 flex gap-5 overflow-x-auto'>
        <CardItem
          img='swim.png'
          rating={Math.floor(5).toFixed(1)}
          reviewCount={6}
          country='USA'
          title='Life lessons with Katie Zaferes'
          price={136}
        />
        <CardItem
          img='swim.png'
          rating={Math.floor(5).toFixed(1)}
          reviewCount={6}
          country='USA'
          title='Life lessons with Katie Zaferes'
          price={136}
        />
        <CardItem
          img='swim.png'
          rating={Math.floor(5).toFixed(1)}
          reviewCount={6}
          country='USA'
          title='Life lessons with Katie Zaferes'
          price={136}
        />
        <CardItem
          img='swim.png'
          rating={Math.floor(5).toFixed(1)}
          reviewCount={6}
          country='USA'
          title='Life lessons with Katie Zaferes'
          price={136}
        />
      </div>
    </>
  );
};

export default Card;
