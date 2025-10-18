import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GrGithub } from 'react-icons/gr';

const LogIn = () => {
    return (
        <div>
   <h3 className='font-semibold text-xl text-center mb-5'>Log In with</h3>
   <div className='space-y-3'>
    <button className='btn btn-outline btn-info w-full'><FcGoogle size={20} /> LogIn with Google</button>
    <button className='btn btn-outline w-full' ><GrGithub size={20} /> Log In with Github</button>
   </div>
        </div>
    );
};

export default LogIn;