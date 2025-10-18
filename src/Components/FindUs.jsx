import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h3 className='text-primary font-semibold text-xl my-5'>Find Us</h3>
            <div className='join w-full join-item join-vertical '>
                <button className='btn justify-start bg-base-100 text-accent '> <FaFacebook className='text-blue-500'></FaFacebook> Facebook</button>
                <button className='btn justify-start bg-base-100 text-accent'><FaTwitter className='text-blue-400'></FaTwitter> Twitter</button>
                <button className='btn justify-start bg-base-100 text-accent'><FaInstagram className='bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 '></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;