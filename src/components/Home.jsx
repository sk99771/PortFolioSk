import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { ReactTyped } from "react-typed";
// import Pic from '../../public/photo.avif'; 
import Pic from '../assets/image/photo.avif';


function Home() {
  return (
    <>
      <div  
        name='Home'
      className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 mt-12 md:mt-24 order-2 md:order-1'>
            <span className='text-xl'>Take a Look at What I Do</span> <br/>

            <div className='flex space-x-1 text-xl md:text-4xl'>
              <span>Hello ,I am a </span>
              <ReactTyped
                 className='text-indigo-600 font-bold'
                strings={["Developer","Programmer","Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>

            <br />
            {/* <p className=' text-sm md:text-md text-justify text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum ut quia expedita quis tempora et, culpa hic,
              aspernatur nostrum ullam enim voluptatem atque repellendus
              odio mollitia quod officia rerum magnam!</p> */}




<p className='text-sm md:text-md text-justify text-gray-700'>
  I’m Sarvesh Chaurasiya, a passionate BSc IT student currently in my final semester. I enjoy building clean and user-friendly web applications, and I’m always eager to learn new technologies. With a strong foundation in React, JavaScript, and modern UI design, I aim to create impactful digital experiences. Whether it’s developing a project or solving real-world problems through code, I’m always up for a challenge.
</p>


            <br />
            <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center '>
              <div className=' space-y-3'>
                <h1 className='font-bold text-center'>Available On </h1>
                <ul className='flex space-x-5'>
                  <li>
                     <a  href='https://github.com/login'>
                    <FaGithub className='text-2xl cursor-pointer text-gray-600 hover:text-black transition duration-300' />
                    </a></li>
                  <li>
                  <a href='https://www.linkedin.com/login'>
                    <FaLinkedinIn className='text-2xl cursor-pointer hover:text-blue-600 transition duration-300' />
                    </a></li>
                  <li>
                  <a href='https://web.telegram.org/k/'>
                    <BsTelegram className='text-2xl cursor-pointer  hover:text-blue-400 transition duration-300' />
                    </a></li>
                  <li>
                  <a href='https://mail.google.com/mail/u/0/#drafts'>
                    <SiGmail className='text-2xl cursor-pointer  hover:text-red-500 transition duration-300' />
                    </a></li>

                </ul>

              </div>

              <div className=' space-y-3'>
                <h1 className='font-bold text-center'>My Current Focus</h1>
                <ul className='flex space-x-5'>
                  <li>
                    {""}
                    <FaReact className='text-2xl cursor-pointer md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]' /></li>
                  <li>
                    {""}
                    < RiNodejsLine className='text-2xl cursor-pointer md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]' /></li>
                  <li>
                    {""}
                    <SiExpress className='text-2xl cursor-pointer md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]' /></li>
                  <li>
                    {""}

                    <BiLogoMongodb className='text-2xl cursor-pointer md:text-3xl hover:scale-125 duration-200 rounded-full border-[2px]' /></li>

                </ul>

              </div>

            </div>

          </div>
          <div className='md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8'>
           <img src={Pic} className='rounded-full md:w-[450px] md:h-[400px]'/>
          </div>
        </div>
      </div>
       <hr/>
    </>
  )
}

export default Home