import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const DetailsCard = ({newsCard}) => {
    const{image_url, details,title,category_id}=newsCard
    return (
        <div>
           <div className='bg-white border border-base-300 p-8 rounded-xl space-y-5'>
            <img className='w-[789px] mx-auto' src={image_url} alt="" /> 
           <p className='text-[25px] font-bold '>{title}</p>
           <p className='text-accent'>{details}</p>
          <Link to={`/category/${category_id}`} className='btn btn-secondary'> <FaArrowLeft></FaArrowLeft> All news in this category</Link>
           </div>
        </div>
    );
};

export default DetailsCard;