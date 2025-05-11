import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;