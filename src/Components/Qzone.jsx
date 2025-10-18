import React from 'react';
import swimming from '../assets/assets/swimming.png';
import classRoom from '../assets/assets/class.png';
import playground from '../assets/assets/playground.png'
import bg from '../assets/assets/bg.png'


const Qzone = () => {
    return (
     <div>
           <div className='bg-base-200 p-4 space-y-3 my-5 '>
            <h3 className='text-primary justify-start font-semibold text-xl mb-5'>Q-Zone</h3>
            <div className='flex justify-center items-center flex-col'>
<img src={swimming} alt="" />
            <img src={classRoom} alt="" />
            <img src={playground} alt="" />
            </div>
               
        </div>
        <img className='mx-auto' src={bg} alt="" />
     </div>
    );
};

export default Qzone;