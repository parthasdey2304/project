'use client';

import { Carousel } from "flowbite-react";

function Testimonials() {
  return (
    <div className="w-full h-[1100px] bg-gradient-to-b from-blue-950 to-violet-950 p-10 flex-col">
      {/* This contains the heading */}
      <div className="pl-10 pt-10">
        <span className="text-white text-6xl italic font-bold">Testimonials</span>
      </div>

      {/* This contains the carousel  */}
      <div className="w-full h-[900px] p-20">
        <Carousel className="w-full h-full" slideInterval={2000}>
          <div className="w-full h-full bg-white flex space-x-10 p-10">
            {/* This is the list of all the cards */}
            <div className="w-1/4 h-full bg-blue-600 rounded-lg"></div>
            <div className="w-3/4 h-full bg-blue-600 rounded-lg"></div>
          </div>
          
          <div className="w-full h-full bg-white flex space-x-10 p-10">
            {/* This is the list of all the cards */}
            <div className="w-3/4 h-full bg-blue-600 rounded-lg"></div>
            <div className="w-1/4 h-full bg-blue-600 rounded-lg"></div>
          </div>
          
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials;