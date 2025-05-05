// import React from 'react'

// import Java from '../assets/image/java.png';
// import Python from '../assets/image/python.webp';
// import MongoDB from '../assets/image/mongodb.jpg';
// import Express from '../assets/image/express.png';
// import Reactjs from '../assets/image/reactjs.png';
// import Nodejs from '../assets/image/node.png';

// function Portfolio() {
//     const cardItem = [
//         {
//             id: 1,
//             logo: MongoDB,
//             name: "MongoDB"
//         },
//         {
//             id: 2,
//             logo: Express,
//             name: "Express"
//         },
//         {
//             id: 3,
//             logo: Reactjs,
//             name: "ReactJs"
//         },
//         {
//             id: 4,
//             logo: Nodejs,
//             name: "nodeJS"
//         },
//         {
//             id: 5,
//             logo: Python,
//             name: "Python"
//         },
//         {
//             id: 6,
//             logo: Java,
//             name: "Java"
//         }
//     ]
//     return (
//         <>
//         <div className="max-w-screen-2xl  container mx-auto   px-4 md:px-20  mt-10  ">
//             <div className='text-center md:text-sa'>
//             <h1 className="text-3xl font-semibold text-center text-purple-600 mb-6">Portfolio</h1>
//             <span className='underline font-semibold text-center text-2xl'>Featured Project</span>
//             </div>

//             <div className='grid  grid-cols-1 md:grid-cols-3 gap-5'>
//                 {
//                     cardItem.map(({ id, logo, name }) => (
//                         <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 mt-10  items-center justify-items-center' key={id}>
//                             <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]  border-gray-300'></img>


//                             <div>
//                                 <div className='text-2xl font-bold text-center '>{name}</div>
//                                 <p className='text-gray-700 text-sm  px-2 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi illo accusamus quia distinctio sint hic..</p>
//                             </div>
//                             <div className=' flex  items-start gap-7 '>

//                                 <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 hover:from-purple-600 hover:to-blue-600 font-bold px-4 py-2 mx-2 my-2 rounded-md">
//                                     Video
//                                 </button>


//                                 <button className="text-white bg-gradient-to-r from-green-400 via-teal-500 to-teal-600 hover:from-green-500 hover:to-teal-700 font-bold px-4 py-2 mx-2 my-2 rounded-md">
//                                     Source Code
//                                 </button>




//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//         <br/><br/>
//         <hr/>
//         </>
//     )
// }

// export default Portfolio;



import React from 'react';

import Java from '../assets/image/java.png';
import Python from '../assets/image/python.webp';
import MongoDB from '../assets/image/mongodb.jpg';
import Express from '../assets/image/express.png';
import Reactjs from '../assets/image/reactjs.png';
import Nodejs from '../assets/image/node.png';

function Portfolio() {
    const cardItem = [
        {
            id: 1,
            logo: MongoDB,
            name: "MongoDB",
            description: "A NoSQL database for storing JSON-like documents with high scalability and performance."
        },
        {
            id: 2,
            logo: Express,
            name: "Express",
            description: "A fast and minimal web framework for Node.js to build APIs and web applications."
        },
        {
            id: 3,
            logo: Reactjs,
            name: "ReactJs",
            description: "A front-end JavaScript library for building modern, component-based user interfaces."
        },
        {
            id: 4,
            logo: Nodejs,
            name: "NodeJS",
            description: "A server-side JavaScript runtime used to build scalable network applications."
        },
        {
            id: 5,
            logo: Python,
            name: "Python",
            description: "A high-level, versatile programming language known for simplicity and data science."
        },
        {
            id: 6,
            logo: Java,
            name: "Java",
            description: "A powerful object-oriented language used for enterprise-level backend applications."
        }
    ];

    return (
        <>
            <div
             name='Portfolio'
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
                <div className='text-center md:text-sa'>
                    <h1 className="text-3xl font-semibold text-center text-purple-600 mb-6">Portfolio</h1>
                    <span className='underline font-semibold text-center text-2xl'>Featured Project</span>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        cardItem.map(({ id, logo, name, description }) => (
                            <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 mt-10 items-center justify-items-center' key={id}>
                                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px] border-gray-300' alt={name} />

                                <div>
                                    <div className='text-2xl font-bold text-center'>{name}</div>
                                    <p className='text-gray-700 text-sm px-2 mt-2'>{description}</p>
                                </div>

                                <div className='flex items-start gap-7'>
                                    <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 hover:from-purple-600 hover:to-blue-600 font-bold px-4 py-2 mx-2 my-2 rounded-md">
                                        Video
                                    </button>
                                    <button className="text-white bg-gradient-to-r from-green-400 via-teal-500 to-teal-600 hover:from-green-500 hover:to-teal-700 font-bold px-4 py-2 mx-2 my-2 rounded-md">
                                        Source Code
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <br /><br />
            <hr />
        </>
    );
}

export default Portfolio;

