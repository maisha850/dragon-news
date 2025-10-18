import React from 'react';
import { NavLink } from 'react-router';
import user from './assets/assets/user.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
<div></div>

         <nav className='flex gap-8 text-accent ml-38'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
         </nav>
         <div className='flex gap-3'>
            <img src={user} alt="" />
            <button className='btn btn-primary px-8'>Log In</button>
         </div>
        </div>
    );
};

export default Navbar;