
import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen '>
   <header className='py-5 w-11/12 mx-auto'>
      <Navbar></Navbar>
   </header>
   <main>
    <Outlet></Outlet>
   </main>
        </div>
    );
};

export default AuthLayout;