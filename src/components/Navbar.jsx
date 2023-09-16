'use client';

import { Button, Navbar } from 'flowbite-react';

export default function NavbarWithCTAButton() {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand href="">
        <img
          alt=""
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        />
        <span className="self-center whitespace-nowrap text-xl md:text-5xl font-semibold">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>
          Get started
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p className='text-black'>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


