import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div>
            <Navbar />


        
            <div className="border border-gray-100 bg-gray-50 shadow-2xl max-w-10/12 mx-auto rounded-3xl pb-16 pt-16">
                <h1 className="font-extrabold text-[32px] text-center pt-16 pb-4">404: Page Not Found</h1>
                <p className="font-medium text-[16px] text-center pb-6 px-32 ">The page you are looking for does not exist.</p>
                <div className='flex justify-center'>
                <button
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={handleGoHome}
                >
                    Go to Homepage
                </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;