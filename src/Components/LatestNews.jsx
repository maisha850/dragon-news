import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='bg-base-200 flex items-center gap-5 px-4 py-5 my-7'>
           <p className='bg-secondary text-base-200 px-3 py-2 font-medium text-xl'> Latest</p>
           <Marquee className='flex gap-5' pauseOnHover={true} speed={60} >
            <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, illo.</p>
        <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, illo.</p>
            <p className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, illo.</p>
           </Marquee>
        </div>
    );
};

export default LatestNews;