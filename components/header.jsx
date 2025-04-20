import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import userIcon from '../src/assets/icons/user.png';
import downChevronIcon from '../src/assets/icons/down-arrow.png';
import cartIcon from '../src/assets/icons/shopping-cart.png';
import logo from '../src/assets/images/scriberlly_logo.png'
import Button from './button';

function Header() {

  const [itemCount, setItemCount] = useState(1);
  const [hamState, setHamState] = useState(false);
  const [userMenuState, setUserMenuState] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const scrollRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }, 
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) observer.unobserve(scrollRef.current);

    };
  });


  return (
    <>
      <div
        ref={scrollRef}
        className="absolute top-0 h-56 w-full pointer-events-none opacity-0 -z-10"
      ></div>
      <header className={`font-inter flex justify-center text-gray-800 fixed top-0 left-0 w-full z-20 transition-all duration-500 ease-in-out ${heroVisible ? 'bg-my-off-white shadow-md' : ''}`}>
        <div className=' px-4 flex justify-between max-w-[1280px] w-full'>
          <div className='h-14 w-24' >
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <nav className='navbar hidden lg:block min-w-1/2'>
            <ul className='flex items-center h-full justify-between'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Port-Folio</Link></li>
              <li><Link to="/">Courses</Link></li>
              <li><Link to="/">E-books</Link></li>
              <li><Link to="/">Services</Link></li>
            </ul>
          </nav>
          <div className='flex justify-between w-2/5 md:w-1/4'>
            <div className='flex items-center cursor-pointer relative' onClick={() => setUserMenuState(!userMenuState)}>
              <img className="w-7 h-7" src={userIcon} alt="" />
              <img className={`w-4 h-4 transition-transform duration-300 ${userMenuState ? 'rotate-180' : 'rotate-0'}`} src={downChevronIcon} alt="" />
              {userMenuState && (
                <div className="absolute right-0 top-14  w-48 bg-white shadow-lg rounded-lg z-30">
                  <ul className="text-sm text-gray-700 py-4">
                    <li><Link to="/" className="px-4 py-2 block hover:bg-my-highlight cursor-pointer">Dashboard</Link></li>
                    <li className="px-4 py-2 hover:bg-my-highlight cursor-pointer"><Link>Change Password</Link></li>
                    <li className="px-4 py-2 hover:bg-my-highlight cursor-pointer"><Link>Settings</Link></li>
                    <li className="border-t border-gray-800 my-2"></li>
                    <li className="px-4 py-2 hover:bg-my-highlight cursor-pointer"><Link>Sign Out</Link></li>
                  </ul>
                </div>
              )}
            </div>
            <div className='flex items-center relative'>
              <div className="w-7 h-7">
                <img src={cartIcon} alt="" />
              </div>
              {itemCount > 0 ? <div className={`text-my-off-white p-0.5 bg-my-orange rounded-full flex justify-center items-center text-[9px] absolute top-3.5 -right-1 ${itemCount > 9 ? 'w-4 h-4' : 'w-3 h-3'}`}>{itemCount}</div> : null}

            </div>
            <div className='flex items-center'>
              <Button className="hidden lg:block bg-my-orange hover:bg-my-highlight text-my-off-white" btnText="Get Started" />
            </div>
            <div aria-label="Toggle navigation menu" aria-expanded={hamState} className='items-center flex lg:hidden'>
              <button className="flex flex-col relative justify-between cursor-pointer w-8 h-6" onClick={() => {
                setHamState(!hamState);
              }}>
                <span
                  className={`h-1 w-8 bg-gray-800 block rounded transition-all duration-300 ease-in-out absolute ${hamState ? 'rotate-45 top-2.5' : 'top-0'
                    }`}
                />
                <span
                  className={`h-1 w-8 bg-gray-800 block rounded transition-all duration-300 ease-in-out absolute ${hamState ? 'opacity-0' : 'top-2.5'
                    }`}
                />
                <span
                  className={`h-1 w-8 bg-gray-800 block rounded transition-all duration-300 ease-in-out absolute ${hamState ? '-rotate-45 top-2.5' : 'top-5'
                    }`}
                />
              </button>
              <motion.div
                initial={{ x: '100%' }}
                animate={hamState ? { x: 0 } : { x: '100%' }}
                transition={{ duration: 0.4 }}
                className="fixed top-14 left-0 w-full h-[calc(100vh-56px)] bg-my-off-white text-gray-800 z-20 p-6 shadow-lg lg:hidden"
              >
                <ul className='flex flex-col gap-6 items-center justify-center text-xl w-full h-full'>
                  <li className='py-2'><Link to="/">Home</Link></li>
                  <li className='py-2'><Link to="/">About Us</Link></li>
                  <li className='py-2'><Link to="/">Port-Folio</Link></li>
                  <li className='py-2'><Link to="/">Courses</Link></li>
                  <li className='py-2'><Link to="/">E-books</Link></li>
                  <li className='py-2'><Link to="/">Services</Link></li>
                </ul>
              </motion.div>
            </div>
          </div>

        </div>


      </header>
    </>
  )
}

export default Header;