import React from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';
import Contact from '../components/contact';

const Layout = () => {
 
    return (
      <div className=''>
        <Header />
        <main className=''>
          <Outlet />
        </main>
        <Contact />
        <Footer />
      </div>
    );
  };
  
  export default Layout;