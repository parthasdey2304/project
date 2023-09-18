import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Contact() {
  return (
    <div className='w-full h-[800px] bg-white p-10 px-28 flex space-x-10'>
        {/* This is the left panel for the contact information of the company */}
        <div className='w-1/5 h-full bg-gradient-to-br from-blue-400 to-blue-800 rounded-3xl shadow-xl shadow-black flex-col p-10'>
            <div className='w-full mb-10'>
                <span className='text-white font-semibold text-4xl'>Contact Information</span>
            </div>

            <div className='flex-col space-y-10 mt-20'>
                <div className='w-full flex space-x-10'>
                    <span className='text-white text-3xl font-bold'>&#64;</span>
                    <div className='flex-col'>
                        <p className='text-xl text-gray-300 font-semibold'>Email</p>
                        <p className='text-2xl  text-white font-bold'>support@legalmarket.tech</p>
                    </div>
                </div>

                <div className='w-full flex space-x-10'>
                    <span className='text-white text-3xl font-bold'><i class="ri-phone-fill"></i></span>
                    <div className='flex-col'>
                        <p className='text-xl text-gray-300 font-semibold'>Phone</p>
                        <p className='text-2xl  text-white font-bold'>+91 34225 22355</p>
                    </div>
                </div>

                <div className='w-full flex space-x-10'>
                    <span className='text-white text-3xl font-bold'><i class="ri-map-pin-line"></i></span>
                    <div className='flex-col'>
                        <p className='text-xl text-gray-300 font-semibold'>Address</p>
                        <p className='text-2xl  text-white font-bold'>Rajpur, Chowhati, Kolkata - 700151</p>
                    </div>
                </div>

                <div className='w-full flex space-x-10'>
                    <span className='text-white text-3xl font-bold'><i class="ri-sun-line"></i></span>
                    <div className='flex-col'>
                        <p className='text-xl text-gray-300 font-semibold'>Working Hours</p>
                        <p className='text-2xl  text-white font-bold'>9 a.m. - 11 p.m.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* This is the right panel where there are options of a form to get in touch */}
        <div className='w-4/5 h-full border-2 rounded-3xl p-10'>
            <div className='text-4xl text-black font-semibold'>Get in touch</div>

            <div className='w-full p-10 border-2 rounded-3xl'>
                <div className='flex justify-between'></div>
            </div>

        </div>
    </div>
  )
};

export default Contact;