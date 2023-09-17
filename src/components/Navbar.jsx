'use client';

import React from 'react';
import { Button, Navbar } from 'flowbite-react';

export default function NavbarWithCTAButton() {
  return (
    /* Navbar component with a red background and height defined for medium screens and above */
    <Navbar fluid className='bg-blue-600 md:h-32'>
      <Navbar.Brand href='' className='md:h-24'>
        {/* Fiverr brand name */}
        <span className='self-center text-white whitespace-nowrap text-2xl md:text-5xl font-semibold tracking-tighter'>
          {/* fiverr <span className='text-green-300 text-5xl'>.</span> */}
          Legal Market
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        {/* Sign In button */}
        <Button rounded className='bg-blue-600 border-2 border-white'>
          <span className='text-white md:text-3xl font-semibold'>Sign In</span>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {/* Navbar links */}
        <Navbar.Link active href='#' className='md:text-3xl font-bold'>
          <p className='text-blue-600 bg-white px-4 py-2 rounded-full'>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href='#' className='md:text-3xl font-bold text-white'>
          <p className='pt-2'>
            How it works
          </p>
        </Navbar.Link>
        <Navbar.Link href='#' className='md:text-3xl font-bold text-white'>
          <p className='pt-2'>
            Explore
          </p>
        </Navbar.Link>
        <Navbar.Link href='#' className='md:text-3xl font-bold text-white'>
          <p className='pt-2'>
            Find Work
          </p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
