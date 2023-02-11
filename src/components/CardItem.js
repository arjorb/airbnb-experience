import React from 'react';

const CardItem = ({ img, rating, reviewCount, country, title, price }) => {
  return (
    <>
      <div>
        <div>
          <img src={`./${img}`} alt={title} className='w-48' />
        </div>
        <div className=' text-[12px] space-y-1'>
          <div className='flex gap-1 mt-2 items-center'>
            <img src='./star.svg' alt='star' />
            <p>{rating}</p>
            <p className='text-gray-400'>{reviewCount} . </p>
            <p className='text-gray-400'>{country}</p>
          </div>
          <p className='font-light'>{title}</p>
          <p className='font-light'>
            <span className='font-semibold'>From ${price}</span> / person
          </p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
