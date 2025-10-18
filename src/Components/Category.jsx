import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise=fetch('/categories.json').then(res=>res.json())


const Category = () => {
    const categories= use(categoryPromise)

    return (
        <div>
            <h3 className='font-semibold text-xl text-center mb-5'>All  Categories({categories.length})</h3>
            <div className='grid grid-cols-1 mb-7'>
                {
                    categories.map(category=><NavLink key={category.id} className=" text-[#9F9F9F] font-medium text-xl btn bg-base-100  border-0  " to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;