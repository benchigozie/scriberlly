import React from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
 
    return (
      <div className=''>
        <Header />
        <main className=''>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;