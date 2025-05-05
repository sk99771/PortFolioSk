





// import React from 'react';

// function Contact() {
//   return (
//     <>
//       <div 
//         name="Contact"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//       >
//         <div className="text-center md:text-start">
//           <h1 className="text-3xl font-bold mb-4 text-purple-600">Contact Me</h1>
//           <span className="text-lg text-gray-700">Use the form below to reach out to me.</span>
//         </div>

//         <div className="flex flex-col items-center justify-center mt-8 mb-10">
//           <form
//             action="https://getform.io/f/aejrwweb"
//             method="POST"
//             className="w-full max-w-md bg-gradient-to-br from-white via-gray-100 to-purple-50 p-6 rounded-lg shadow-md border border-gray-300"
//           >
//             <h2 className="text-xl font-semibold mb-4 text-center">Send Your Message</h2>

//             <div className="mb-4">
//               <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 autoComplete="name"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 font-light"
//                 placeholder="Enter your full name"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 autoComplete="email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 font-light"
//                 placeholder="Enter your email"
//               />
//             </div>

//             <div className="mb-4">
//               <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 required
//                 rows="4"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 placeholder="Type your message..."
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full text-white font-bold py-2 px-4 my-2 rounded-md 
//                          bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 
//                          hover:from-purple-600 hover:to-blue-600 
//                          hover:scale-105 hover:shadow-lg transition-all duration-300"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;






import React, { useState } from 'react';
import {  toast } from 'react-toastify';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form to Getform
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://getform.io/f/bolmppja', {
      method: 'POST',
      body: formData,
    }).then(() => {
      // Clear the form after successful submission
      setName('');
      setEmail('');
      setMessage('');
      toast.success('Message sent successfully!');
    }).catch(() => {
      toast.error('Something went wrong. Please try again.');
    });
  };

  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div className="text-center md:text-start">
        <h1 className="text-3xl font-bold mb-4 text-purple-600">Contact Me</h1>
        <span className="text-lg text-gray-700">Use the form below to reach out to me.</span>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 mb-10">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-gradient-to-br from-white via-gray-100 to-purple-50 p-6 rounded-lg shadow-md border border-gray-300"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">Send Your Message</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 font-light"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 font-light"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-white font-bold py-2 px-4 my-2 rounded-md 
                       bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 
                       hover:from-purple-600 hover:to-blue-600 
                       hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
