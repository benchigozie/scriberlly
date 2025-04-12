import React from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
 
    return (
      <div className='px-4 lg:px-4'>
        <Header />
        <main className='pt-14'>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Layout;