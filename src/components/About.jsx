// import React from 'react'

// function About() {
//     return (
//         <>
        
//         <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-18'>
//             <h1 className='text-3xl font-semibold mt-5 mb-5'>About</h1>
//             <p className=''>
//                 Hello! I'm Sarvesh Chaurasiya, an aspiring web developer. Currently, I'm immersing myself in the world of web development, focusing on building responsive and user-friendly websites using technologies like HTML, CSS, and JavaScript. I'm passionate about creating clean and efficient code, and I'm continuously learning to enhance my skills and stay updated with the latest industry trends.
//             </p>
//             <br />
//             <div className=' md:flex justify-between  '>
//                 <div className='items-center justify-center'>
//                     <h1 className='text-purple-600 font-semibold text-xl'>Education & Training</h1>

//                     <h2 className='text-xl font-bold mt-2'>Bachelor of Science in Information Technology (BSc IT)</h2>

//                     <p className='text-sm text-gray-600 mt-1'>University of Mumbai, Mumbai, Maharashtra</p>

//                     <p className='text-sm text-gray-500'>Graduated: 2025</p>

//                     <h2 className='text-lg font-bold mt-2'>Self-Taught Full-Stack Web Development</h2>

//                     <p className='text-sm text-gray-600'>Learning through YouTube tutorials and reference books</p>

//                     <p className='text-sm text-gray-500'>Ongoing since 2023</p>


//                     <br />
//                     <h1 className='text-purple-600 font-semibold text-xl'>Technical Proficiency</h1>
//                     <h2 className='text-lg font-bold'>Front-End Development</h2>

//                     <ul className='list-disc list-inside text-sm text-gray-600 mt-1'>

//                         <li>HTML5, CSS3, JavaScript (ES6+)</li>

//                         <li>React.js, Tailwind CSS</li>

//                         <li>Responsive Web Design</li>

//                     </ul>

//                     <h2 className='text-lg font-bold mt-1'>Back-End Development</h2>

//                     <ul className='list-disc list-inside text-sm text-gray-600'>

//                         <li>Node.js, Express.js</li>

//                         <li>MongoDB, Mongoose</li>

//                         <li>RESTful API Development</li>

//                     </ul>
//                     <h2 className='text-lg font-bold mt-1'>Tools & Platforms</h2>

//                     <ul className='list-disc list-inside text-sm text-gray-600'>

//                         <li>Git, GitHub</li>

//                         <li>Visual Studio Code</li>



//                     </ul>


//                 </div>

//                 <div className='items-center justify-center'>
//                     <h1 className='text-purple-600 font-semibold text-xl'> Key Accomplishments</h1>

//                     <h2 className='text-lg font-bold mt-2'>Developed Personal Portfolio Website</h2>

//                     <ul className='list-disc pl-5 text-sm text-gray-600'>
//                         <li>  Built responsive portfolio site</li>
//                         <li> Showcased projects and skills</li>
//                         <li>  Utilized React.js for dynamic components</li>
//                         <li>  Styled with Tailwind CSS for modern design</li>
//                     </ul>
//                     <br />
//                     <h1 className='text-purple-600 font-semibold text-xl'>Mission Statements</h1>

//                     <h2 className='text-lg font-bold mt-2'>User-Centric Approach</h2>
//                     <ul className='list-disc pl-5 text-sm text-gray-600'>
//                         <li>Design intuitive, accessible web experiences</li>
//                         <li>Ensure seamless interaction across all devices</li>
//                         <li>Prioritize user needs in every project</li>
//                     </ul>

//                     <h2 className='text-lg font-bold mt-2'>Innovation and Problem-Solving</h2>
//                     <ul className='list-disc pl-5 text-sm text-gray-600'>
//                         <li>Craft innovative web solutions</li>
//                         <li>Enhance digital experiences through creativity</li>
//                         <li>Address real-world problems with effective design</li>
//                     </ul>
//                 </div>
//             </div>
            
//         </div>
//           <br/>
//            <hr/>
//         </>
        
//     )
// }

// export default About


import React from 'react';

function About() {
  return (
    <>
    <div
      name='About'
    className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold text-center text-purple-600 mb-6">About Me</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Hello! I'm Sarvesh Chaurasiya, an aspiring web developer. Currently, I'm immersing myself in the world of web development, focusing on building responsive and user-friendly websites using technologies like HTML, CSS, and JavaScript. I'm passionate about creating clean and efficient code, and I'm continuously learning to enhance my skills and stay updated with the latest industry trends.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2  jus gap-8">
        <div className='1'>
        {/* Education & Training */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Education & Training</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold mt-2">Bachelor of Science in Information Technology(BSc IT)</h3>
              <p className="text-gray-600 mt-1">University of Mumbai, Mumbai, Maharashtra</p>
              <p className="text-gray-500">Graduated: 2025</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Self-Taught Full-Stack Web Development</h3>
              <p className="text-gray-600 mt-1">Learning through YouTube tutorials and reference books</p>
              <p className="text-gray-500">Ongoing since 2023</p>
            </div>
          </div>
        </div>

        {/* Technical Proficiency */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Technical Proficiency</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold mt-1">Front-End Development</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                <li>React.js, Tailwind CSS</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mt-1">Back-End Development</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Node.js, Express.js</li>
                <li>MongoDB, Mongoose</li>
                <li>RESTful API Development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mt-1">Tools & Platforms</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Git, GitHub</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>
          </div>
        </div>
        </div>

        <div className='2'>
        <div className="mt-10">
        <h2 className="text-xl font-semibold text-purple-600 mb-4">Key Accomplishments</h2>
        <ul className="list-disc pl-5 text-gray-600 mt-1">
          <li>Built a responsive personal portfolio website</li>
          <li>Showcased projects and skills effectively</li>
          <li>Utilized React.js for dynamic components</li>
          <li>Styled with Tailwind CSS for modern design</li>
        </ul>
      </div>

      <div className="mt-12 md:mt-32">
        <h2 className="text-xl font-semibold text-purple-600 mb-4">Mission Statements</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold mt-1">User-Centric Approach</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Design intuitive, accessible web experiences</li>
              <li>Ensure seamless interaction across all devices</li>
              <li>Prioritize user needs in every project</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mt-1">Innovation & Problem-Solving</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Craft innovative web solutions</li>
              <li>Enhance digital experiences through creativity</li>
              <li>Address real-world problems with effective design</li>
            </ul>
          </div>
        </div>
      </div>
        </div>
      </div>

      
    </div>
      <hr/>
    </>
  );
}

export default About;
