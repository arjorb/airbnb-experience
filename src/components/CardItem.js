import React from 'react';

const CardItem = props => {
  return (
    <>
      <div className='min-w-[11rem]'>
        <div>
          <img src={`./${props.data.coverImg}`} alt={props.title} className='min-w-44' />
        </div>
        <div className=' text-[12px] space-y-1'>
          <div className='flex gap-1 mt-2 items-center'>
            <img src='./star.svg' alt='star' />
            <span>{props.data.stats.rating}</span>
            <span className='text-gray-400'>{props.data.stats.reviewCount} . </span>
            <span className='text-gray-400'>{props.data.location}</span>
          </div>
          <p className='font-light'>{props.data.title}</p>
          <p className='font-light'>
            <span className='font-semibold'>From ${props.data.price}</span> / person
          </p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
