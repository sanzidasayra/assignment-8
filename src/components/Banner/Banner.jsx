import React from 'react';
import img from '../../assets/C001-assets/banner-img-1.png'
import img2 from '../../assets/C001-assets/doctor-checking-patient-with-stethoscope.jpg'


const Banner = () => {
    return (
        <div className='border border-white dark:border-gray-700 shadow-2xl py-16 px-[160px] rounded-3xl bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200
    dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 mt-10 '>

    
            <div>
                <h1 className='font-extrabold text-5xl pb-4 text-center text-gray-700 dark:text-gray-300'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
                <p className='font-medium pb-6 text-center text-gray-700 dark:text-gray-300'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='flex justify-center gap-4'>
                <form>
                    <input className='u-[52px] w-[600px] py-4 pl-5 rounded-full text-[14px] border border-gray-500' type="text" placeholder='Search any doctor...'/>
                </form>
                <button className='bg-[#176AE5] py-3.5 px-7 rounded-full font-bold text-xl text-gray-50'>Search Now</button>
            </div>

            <div className='flex justify-center gap-6 pt-6'>
                <img src={img} alt="" />
                <img className='w-[578px] h-[350px] rounded-2xl' src={img2} alt="" />
            </div>
        </div>
    );
};

export default Banner;