


// import React from 'react';
// import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

// function Footer() {
//   return (
//     <>
//       <hr />
//       <footer className="bg-gray-100 py-6 it items-center">
//         <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
//           <div className="flex justify-center gap-6 text-2xl text-gray-600 ">
//             <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
//               <FaWhatsapp className="hover:text-green-500 transition duration-300" size={27} />
//             </a>
//             <a href="https://instagram.com/your_profile" target="_blank" rel="noopener noreferrer">
//               <FaInstagram className="hover:text-pink-500 transition duration-300" size={27}/>
//             </a>
//             <a href="https://linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer">
//               <FaLinkedin className="hover:text-blue-600 transition duration-300" size={27} />
//             </a>
//           {/* </div>
//             <div className='mt-6 border-t border-gray-700 pt-6 flex flex-col items-center'>
                
//               <p>
//                 &copy;2025 Your Company All right reserved.
//               </p>
//             </div> */}

// <div className='mt-6 pt-6 flex flex-col items-center'>
//   <div className="w-16 h-[2px] bg-gray-700 rounded-full my-2"></div>
//   <p className="text-gray-600 text-sm">
//   &copy; 2025 Sarvesh Creations. All rights reserved.
//   </p>
// </div>
//   </div>

//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;




import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <hr />
      <footer className="bg-gray-100 py-6">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          
          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-2xl text-gray-600">
            <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-500 transition duration-300" size={27} />
            </a>
            <a href="https://instagram.com/your_profile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition duration-300" size={27} />
            </a>
            <a href="https://linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-600 transition duration-300" size={27} />
            </a>
          </div>

          {/* Line and Copyright */}
          <div className="mt-2 flex flex-col items-center">
            {/* <div className="w-24 h-[2px] bg-gray-700 rounded-full my-2"></div> */}
            <div className="w-[160px] h-[2px] bg-gray-700 rounded-full my-2"></div>

            <p className="text-gray-600 text-sm text-center">
              &copy; 2025 Sarvesh Creations. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;

