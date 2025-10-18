import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {id}= useParams()
    const data= useLoaderData()
    const[news, setNews]=useState([])
   
    useEffect(()=>{
        if(id == '0'){
            setNews(data)
            return
        }
        else if(id=='1'){
            const filteredBrkNews= data.filter(news=>news.others.is_today_pick==true)
            setNews(filteredBrkNews)
        }
        else{
   const filteredNews=data.filter(news=>news.category_id==id)
setNews(filteredNews)
        }
 
    },[data,id])

    return (
        <div>
        <h3 className='font-semibold text-accent'>Total news <span className='text-secondary'>({news.length})</span> are found</h3> 
        <div className='grid grid-cols-1 gap-7'>
            {
                news.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
            }
            </div> 
        </div>
    );
};

export default CategoryNews;