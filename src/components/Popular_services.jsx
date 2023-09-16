'use client';

import { Carousel } from 'flowbite-react';

function Popular_services() {
  return (
    <div className="w-full h-[1000px] bg-white flex-col space-y-10 p-20">

      {/* This is the heading of the popular Services */}
      <div className='pl-10'>
        <span className='text-6xl text-black font-bold'>Popular Services</span>
      </div>

      {/* This is the div that has the Carousel */}
      <div className='w-full h-[800px]'>
          <Carousel className='space-x-10'>
            <div className='w-full h-[700px] bg-white rounded-xl flex space-x-[80px] p-10'>
              {/* These are the cards inside the carousel when images are to be added */}
              <div className='w-1/4 h-full border-2 border-black bg-blue-600'></div>
              <div className='w-1/4 h-full border-2 border-black bg-blue-600'></div>
              <div className='w-1/4 h-full border-2 border-black bg-blue-600'></div>
              <div className='w-1/4 h-full border-2 border-black bg-blue-600'></div>
            </div>
            <div className='w-full h-[700px] bg-white rounded-xl flex space-x-[80px] p-10'>
              {/* These are the cards inside the carousel when images are to be added */}
              <div className='w-1/4 h-full border-2 border-black bg-blue-600'></div>
              <div className='w-1/4 h-full border-2 border-black bg-blue-600'></div>
              <div className='w-1/4 h-full border-2 border-black bg-blue-600'></div>
              <div className='w-1/4 h-full border-2 border-black bg-blue-600'></div>
            </div>
          </Carousel>
      </div>
    </div>
  );
}

export default Popular_services;