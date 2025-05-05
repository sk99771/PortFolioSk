import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <div>
    <hr></hr>
     <Navbar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Experience />
     <Contact />
     <Footer />
    </div>
   
    {/* <ToastContainer /> */}



    <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick
  pauseOnHover
  draggable
  theme="colored"
  toastStyle={{
    background: 'linear-gradient(to right, #a855f7, #6366f1)',
    color: 'white',
    fontWeight: '500',
  }}
/>

    </>
  )
}

export default App