import React, { useRef } from 'react';
import heroImg from '../src/assets/images/heroimage.webp';
import heroImageRight from '../src/assets/images/heroimageright.webp'
import Button from './button';
import { motion, useInView } from "framer-motion";


function Hero() {

  const lazyRef = useRef(null);
  const isInView = useInView(lazyRef, { once: true, margin: "-100px" });

  return (
    <section className='min-h-screen relative w-full font-inter'>
      <div className='absolute inset-0'>
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 top-0 left-0 object-cover h-full w-full -z-20 bg-amber-800"
      />
      </div>
      <div className="bg-my-off-white/70 flex justify-center items-center min-h-screen">
        <div
          className='grid grid-cols-1 md:grid-cols-2 max-w-[1280px] px-4 md:px-12 lg:px-4 gap-20 md:2 items-center max-h-[80%] py-36 md:py-16 z-20'
        >
          <motion.div
            className='flex flex-col gap-4'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}>
            <h1 className='text-4xl md:text-6xl font-raleway'>Your Message Deserves to be Heard.</h1>
            <div className='text-lg'><p>Creative minds to package your <span className='text-my-orange font-bold text-xl'>message</span> in a way that appeals to your audience.</p></div>
            <div className='flex gap-1'>
              <Button btnText="Get Started" className="bg-my-orange hover:bg-my-highlight text-my-off-white border-1 border-my-orange" />
              <Button btnText="Learn More" className="border-my-black border-1 bg-my-off-white hover:bg-my-highlight" />
            </div>
          </motion.div>
          <motion.div
          ref={lazyRef}
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={heroImageRight} alt="" className='md:max-h-[500px] rounded-xl'/>
          </motion.div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero