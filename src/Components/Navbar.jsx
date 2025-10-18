import React, { use } from 'react';
import { NavLink } from 'react-router';
import userIcon from '../assets/assets/user.png'
import { AuthContext } from '../Pages/Context';
import { toast } from 'react-toastify';

const Navbar = () => {
    const {user, logOut}= use(AuthContext)
 const handleLogOut=()=>{
    logOut()
    .then(()=>{
        toast.success('You logged out Successfully')
    })
    .catch((err)=>{
        console.log(err.message)
    })
 }

    return (
        <div className='flex items-center justify-between'>
<div>{user && <span>{user.email}</span>}</div>

         <nav className='flex gap-8 text-accent ml-38'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
         </nav>
         <div className='flex gap-3'>
            <img src={userIcon} alt="" />
           {user ?  <NavLink to='/auth/logIn' onClick={handleLogOut} className='btn btn-primary px-8'>Log Out</NavLink>:  <NavLink to='/auth/logIn' className='btn btn-primary px-8'>Log In</NavLink>}
         </div>
        </div>
    );
};

export default Navbar;