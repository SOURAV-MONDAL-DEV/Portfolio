import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const Main = () => {
    return (
        <div className='min-h-screen bg-black text-white'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;