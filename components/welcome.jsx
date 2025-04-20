import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Welcome() {

    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
          strings: ['Scriberlly'],
          typeSpeed: 70,
          backSpeed: 40,
          startDelay: 500,
          backDelay: 5000,
          loop: true,
          showCursor: true,
          cursorChar: '|',
        });
    
        return () => typed.destroy(); 
      }, []);

  return (
    <div className='bg-my-off-white text-3xl font-marker flex items-center justify-center py-16'>
        <span ref={typedRef} >Scriberlly</span>
    </div>
  )
}

export default Welcome