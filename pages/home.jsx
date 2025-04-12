import React, { useRef, useEffect } from 'react';
import Hero from '../components/hero';
import Welcome from '../components/welcome';


function Home() {

  return (
   <div>
    <Hero/>
    <Welcome/>
   </div>
  )
}

export default Home