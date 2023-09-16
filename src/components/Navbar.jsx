'use client';

import React from 'react';
import { Button, Navbar } from 'flowbite-react';

export default function NavbarWithCTAButton() {
  return (
    <Navbar fluid className='bg-red-600 md:h-20'>
      <Navbar.Brand href=''>
        <img
          alt=''
          className='mr-3 h-6 sm:h-9'
          src='/favicon.svg'
        />
        <span className='self-center text-white whitespace-nowrap text-2xl md:text-5xl font-semibold tracking-tighter'>
          fiverr <span className='text-green-300 text-5xl'>.</span>
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Button rounded className='bg-blue-600 border-2 border-white'>
          <span className='text-white md:text-2xl font-semibold'>Sign In</span>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href='#' className='md:text-2xl font-bold'>
          <p className='text-white'>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href='#' className='md:text-2xl font-bold text-white'>
          About
        </Navbar.Link>
        <Navbar.Link href='#' className='md:text-2xl font-bold text-white'>
          Services
        </Navbar.Link>
        <Navbar.Link href='#' className='md:text-2xl font-bold text-white'>
          Pricing
        </Navbar.Link>
        <Navbar.Link href='#' className='md:text-2xl font-bold text-white'>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
