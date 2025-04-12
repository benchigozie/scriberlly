import React from 'react';
import heroImg from '../src/assets/images/heroimage.webp';

function Hero() {
    
    

  return (
    <section className='h-[100vh] relative w-full'>
        <img 
        src={heroImg} 
        alt="" 
        className="absolute top-0 left-0 object-cover h-full w-full"
        />
        <div className="absolute top-0 left-0 inset-0 bg-my-off-white/90"></div>
        <div className='flex flex-col items-center justify-center h-screen z-50'>
mjkjkjkjkjkjk
        </div>
    </section>
  )
}

export default Hero