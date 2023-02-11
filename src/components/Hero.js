import React from 'react';

const Hero = () => {
  return (
    <>
      <div className='p-7'>
        <div className='flex justify-center'>
          <img src='./showcase.png' alt='showcase' className='w-96' />
        </div>
        <div className='mt-5'>
          <h1 className=' text-3xl font-semibold tracking-wide'>Online Experience</h1>
          <p className='text-sm font-light w-72 mt-2'>
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
