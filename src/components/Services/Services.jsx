import React from 'react';
import CountUp from 'react-countup';
import img from '../../assets/C001-assets/success-doctor.png'
import img2 from '../../assets/C001-assets/success-review.png'
import img3 from '../../assets/C001-assets/success-patients.png'
import img4 from '../../assets/C001-assets/success-staffs.png'

const Services = () => {
    return (
        <>
        <div>
            <h1 className='font-extrabold text-[40px] text-center pt-20 pb-4'>We Provide Best Medical Services</h1>
            <p className='text-[16px] text-center pb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
        </div>

        <div className='flex gap-6 justify-center mb-20'>
            <div className='border border-gray-100 py-10 px-12 w-[20em] rounded-2xl shadow-xl'>
                <img src={img} alt="" />
                <CountUp className='font-extrabold text-[64px] ' end={199} duration={5} suffix='+'/>
                <p className='font-semibold text-2xl'>Total Doctors</p>
            </div>

            <div className='border border-gray-100 py-10 px-12 w-[20em] rounded-2xl shadow-xl'>
                <img src={img2} alt="" />
                <CountUp className='font-extrabold text-[64px]' end={467} duration={5} suffix='+'/>
                <p className='font-semibold text-2xl'>Total Reviews</p>
            </div>

            <div className='border border-gray-100 py-10 px-12 w-[20em] rounded-2xl shadow-xl'>
                <img src={img3} alt="" />
                <CountUp className='font-extrabold text-[64px]' end={1900} duration={7} suffix='+'/>
                <p className='font-semibold text-2xl'>Patients</p>
            </div>

            <div className='border border-gray-100 py-10 px-12 w-[20em] rounded-2xl shadow-xl'>
                <img src={img4} alt="" />
                <CountUp className='font-extrabold text-[64px]' end={300} duration={5} suffix='+'/>
                <p className='font-semibold text-2xl'>Total Stuffs</p>
            </div>
        </div>
        </>
        
    );
};

export default Services;