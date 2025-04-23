import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({data}) => {

    // const [allDoctors, setAllDoctors] = useState([]);
   const [showAllDoctors, setShowAllDoctors] = useState(false);

   const visibleDoctors = Array.isArray(data) ? (showAllDoctors ? data : data.slice(0, 6)) : [];



    return (
        <div id="ourBestDoctors">
            <h1  className='font-extrabold text-[40px] text-center pt-20'>Our Best Doctors</h1>
            <p className='text-[16px] text-center pt-4 pb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
<div className='flex gap-4 justify-center flex-wrap ml-40 mr-40 rounded-4xl py-10 px-10 dark:bg-gray-900 shadow-2xl shadow-gray-300 dark:shadow-gray-700 dark:shadow-xl bg-gray-50'> 
    
<Suspense fallback= { <span>loading...</span>}>
                {
                    visibleDoctors.map((singleDoctor) => <Doctor key={singleDoctor.id}
                    singleDoctor= {singleDoctor} ></Doctor>)
                }
               
            </Suspense>
</div>
<div>
    <button > </button>
  </div>
            {
                data.length > 6 && (
                    <div className='flex justify-center'>
                   <button onClick={() => setShowAllDoctors(!showAllDoctors)} className=' py-4 px-7 rounded-full bg-[#176AE5] text-gray-200 font-bold text-xl '>{showAllDoctors ? 'Show Less' : 'View All Doctors'}</button> 
                   </div>
                )
            }
        </div>
    );
};

export default Doctors;