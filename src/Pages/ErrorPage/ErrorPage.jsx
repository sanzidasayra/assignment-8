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
            <div className="border border-gray-100 bg-gray-50 dark:bg-gray-800 shadow-2xl max-w-10/12 mx-auto rounded-3xl pb-16 pt-16 sm:max-w-9/12 md:max-w-7/12 lg:max-w-5/12 xl:max-w-4/12">
                <h1 className="font-extrabold text-[32px] text-center pt-16 pb-4 sm:text-[28px] md:text-[32px] lg:text-[36px]">
                    404: Page Not Found
                </h1>
                <p className="font-medium text-[16px] text-center pb-6 px-6 sm:px-12 md:px-24 lg:px-32">
                    The page you are looking for does not exist.
                </p>
                <div className='flex justify-center'>
                    <button
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-sm sm:text-base md:text-lg lg:text-xl"
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