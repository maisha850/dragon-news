import React, { useEffect, useState } from 'react';
import Header from './Header';
import RightAside from './RightAside';
import { useLoaderData, useParams } from 'react-router';
import DetailsCard from './DetailsCard';

const NewsDetails = () => {
    const data= useLoaderData()
    const {id}= useParams()
    const[newsCard, setNewsCard]=useState({});

    useEffect(()=>{
        const filteredId= data.find(news=>news.id==id)
    setNewsCard(filteredId)
    },[data, id])
    console.log(newsCard)

    return (
        <div>
       <Header></Header>
      <div className='grid grid-cols-12 gap-6 w-9/12 mx-auto'>
         <main className='col-span-9'>
            
<h3 className='font-semibold text-xl mb-5'>Dragon News</h3>
<DetailsCard newsCard={newsCard}></DetailsCard>
       </main>
    <aside className='col-span-3'>
           <RightAside></RightAside>
    </aside>
      </div>
        </div>
    );
};

export default NewsDetails;