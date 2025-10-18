import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import Leftaside from '../Components/Leftaside';
import RightAside from '../Components/RightAside';

const Root = () => {
    return (
        <div className='py-13'>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
                <section className='w-11/12 mx-auto'>
                <Navbar></Navbar>
                </section>
            </header>
         <main className='w-11/12 mx-auto grid gap-6 grid-cols-12 mt-18'>
               <section className="left-nav sticky top-0 h-fit col-span-3">
                <Leftaside></Leftaside>
               </section>
            <section className="main col-span-6">
<Outlet></Outlet>
            </section>
            <section className="right-nav sticky top-0 h-fit col-span-3">
                <RightAside></RightAside>
            </section>
         </main>
        </div>
    );
};

export default Root;