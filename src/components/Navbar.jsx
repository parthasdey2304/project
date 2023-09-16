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
          fiverr <span className='text-green-300 text-5xl'>.</span>
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
          <p className='text-white'>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href='#' className='md:text-3xl font-bold text-white'>
          About
        </Navbar.Link>
        <Navbar.Link href='#' className='md:text-3xl font-bold text-white'>
          Services
        </Navbar.Link>
        <Navbar.Link href='#' className='md:text-3xl font-bold text-white'>
          Pricing
        </Navbar.Link>
        <Navbar.Link href='#' className='md:text-3xl font-bold text-white'>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
