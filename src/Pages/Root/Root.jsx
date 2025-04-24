import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DynamicTitle from '../../components/DynamicTitle';
import GlobalLoader from '../../../GlobalLoader';



const Root = () => {
    return (
        <div className='bg-gray-50 dark:bg-gray-800' >

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                draggable
            />
            <Navbar></Navbar>
            <DynamicTitle></DynamicTitle>
            <GlobalLoader></GlobalLoader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;