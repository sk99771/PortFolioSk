

import React from 'react';

import Html from '../assets/image/html.png';
import Css from '../assets/image/css.jpg';
import Oracle from '../assets/image/oracle.png';
import Java from '../assets/image/java.png';
import JScript from '../assets/image/Javascript.png';
import Spring from '../assets/image/Spring.png';

function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: Html,
            name: "HTML",
            description: "Structured markup for creating web page layouts and content."
        },
        {
            id: 2,
            logo: Css,
            name: "CSS",
            description: "Styling language used for designing responsive and beautiful UIs."
        },
        {
            id: 3,
            logo: JScript,
            name: "JavaScript",
            description: "Interactive functionality for dynamic and engaging web apps."
        },
        {
            id: 4,
            logo: Java,
            name: "Java",
            description: "Robust object-oriented language for backend and enterprise apps."
        },
        {
            id: 5,
            logo: Oracle,
            name: "Oracle",
            description: "Powerful database system used for secure data storage and management."
        },
        {
            id: 6,
            logo: Spring,
            name: "Spring",
            description: "Java framework for building enterprise-grade backend systems."
        }
    ];

    return (
        <>
            <div name='Experience'
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
                <div className='text-center'>
                    <h1 className="text-3xl font-semibold text-center text-purple-600 mb-6">Experience</h1>
                    <p className='text-lg font-semibold'>
                        I have more than 1 year of experience in the following technologies:
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                    {
                        cardItem.map(({ id, logo, name, description }) => (
                            <div
                                key={id}
                                className={`w-full h-auto p-6 flex flex-col items-center text-center 
                                    border-2 shadow-md transition-all duration-300 cursor-pointer
                                    hover:scale-105 hover:shadow-lg hover:shadow-purple-300 
                                    ${id % 2 === 0 ? 'rounded-xl bg-gradient-to-br from-white to-purple-100' : 'rounded-3xl bg-gradient-to-tr from-gray-100 to-pink-100'}
                                `}
                            >
                                <img
                                    src={logo}
                                    alt={name}
                                    className='w-[100px] h-[100px] p-1 rounded-full border-2 border-gray-300 mb-4 object-contain'
                                />
                                <h2 className='text-xl md:text-2xl font-bold'>{name}</h2>
                                <p className='text-gray-700 text-sm mt-2 px-2'>{description}</p>
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

export default Experience;





