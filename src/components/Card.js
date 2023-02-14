import React from 'react';
import CardItem from './CardItem';
import data from '../data';

const Card = () => {
  const cardElement = data.map(data => {
    return <CardItem data={data} />;
  });
  return (
    <>
      <div className='p-7 flex gap-5 overflow-x-auto'>{cardElement}</div>
    </>
  );
};

export default Card;
