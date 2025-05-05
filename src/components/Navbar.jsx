
import React, { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";

import Pic from '../assets/image/photo.avif';

import { Link } from 'react-scroll';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: 'Home'
    },
    {
      id: 2,
      text: 'About'
    },
    {
      id: 3,
      text: 'Portfolio'
    },
    {
      id: 4,
      text: 'Experience'
    },
    {
      id: 5,
      text: 'Contact'
    }
  ]

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-gray-100'>
        <div className='flex justify-between items-center h-16'>
          {/* Left section: Logo and Name */}
          <div className='flex space-x-2 items-center'>
            <img src={Pic} alt="profile" className='h-12 w-12 rounded-full' />
            <div>
              <h1 className='font-semibold text-xl cursor-pointer'>
                Sarve<span className='text-purple-600 text-2xl'>sh</span>
              </h1>
              <p className='text-sm'>Web Developer</p>
            </div>
          </div>

          {/* Right section: Menu */}
          <div>
            <ul className='hidden md:flex space-x-8'>
              {navItems.map(({ id, text }) => (
                <li key={id} className='hover:scale-125 duration-300 cursor-pointer hover:text-purple-600'>

                  <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link>
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer'>
              {menu ? <MdClose size={24} /> : <LuMenu size={24} />}
            </div>
          </div>
        </div>



        {/* Mobile Menu (Pop Style) */}
        {menu && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
            <div className="bg-white w-11/12 max-w-sm p-8 rounded-xl shadow-xl transform scale-95 animate-pop">
              <ul className="space-y-6 text-center text-lg font-semibold text-gray-800">
                {navItems.map(({ id, text }) => (
                  <li
                    key={id}
                    className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-purple-600"
                  >

                    <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link>
                    
                  </li>
                ))}
              </ul>


              <button
                onClick={() => setMenu(false)}
                className="mt-8 block mx-auto text-sm font-medium text-white bg-red-500 hover:bg-red-600 shadow-md hover:shadow-lg transition-all duration-300 px-4 py-2 rounded"
              >
                Close
              </button>

            </div>
          </div>
        )}







      </div>
    </>
  );
}

export default Navbar;
