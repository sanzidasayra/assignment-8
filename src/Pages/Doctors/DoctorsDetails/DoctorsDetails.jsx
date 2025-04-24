import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Link } from 'react-router';
import ErrorPage from '../../ErrorPage/ErrorPage';
import { addToStoreDB } from '../../../utility/addToDB';
import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle } from "react-icons/fa";
import { useEffect } from 'react';




const DoctorsDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };
    const today = new Date().toLocaleString('en-US', { weekday: 'long' });

  

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 100); 
          }
        }
      }, []);


    if (!Array.isArray(data)) {
        console.error("Expected an array, but got:", data);
        return <p><ErrorPage></ErrorPage></p>;
    }

    const singleDoctor = data.find(doctor => doctor.id.toString() === id);

    if (!singleDoctor) {
        return <>

            <div className='border border-gray-100 bg-gray-50  shadow-2xl max-w-10/12 mx-auto rounded-3xl pb-16 pt-16'>
                <h1 className='font-extrabold text-[32px] text-center pt-16 pb-4  '>No Doctorts Found</h1>
                <p className='font-medium text-[16px] text-center pb-6 px-32 '> Go to Home page to find available doctors</p>
                <div className='flex justify-center mb-10 '>
                    <button
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                        onClick={handleGoHome}
                    >
                        Go to Homepage
                    </button>
                </div>
            </div>;
        </>
    }

    // eslint-disable-next-line no-unused-vars
    const { image, name, education, designation, workingAt, registrationNumber, availability, consultationFee, availabilityStatus } = singleDoctor;
    const isAvailableToday = availability
    .split(',')
    .map(day => day.trim().toLowerCase())
    .includes(today.toLowerCase());

    const handleBookAppointment = (id, doctorName) => {
        addToStoreDB(id, doctorName).then(success => {
            if (success) {
                navigate('/appointmentList');
            } else {
                console.log("Appointment already exists, no navigation.");
            }
        }).catch(error => {
            console.error("An error occurred while booking the appointment:", error);
        });
    };
    




    return (
        <div>
            <div id='doctorDetailsSection' className='border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-2xl max-w-10/12 mx-auto rounded-3xl'>
                <h1 className='font-extrabold text-[32px] text-center pt-16 pb-4'>Doctor’s Profile Details</h1>
                <p className='font-medium text-[16px] text-center pb-16 px-32'>
                    Discover detailed profiles of our experienced and verified doctors. From specialties and qualifications to years of experience and availability,
                    each profile gives you the information you need to choose the right healthcare professional. Find and connect with trusted doctors quickly and easily.
                </p>
            </div>

            <div className='flex border max-w-10/12 mx-auto mt-8 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-2xl py-14 '>
                <div>
                    <img src={image} alt={name} className=" w-md ml-14 mx-auto rounded-2xl" />
                </div>
                <div className="pl-8">
                    <h1 className="font-bold text-[32px]">{name}</h1>
                    <p className="font-light text-xl">{education}</p>
                    <p className="text-lg font-light text-gray-600 pb-2">{designation}</p> 
                    <h4 className="font-semibold text-xl flex gap-2 pb-4"><span className='font-normal'>Working at:</span>{workingAt}</h4>
                    <hr className='border-dashed opacity-30' />
                    <p className="pt-2 pb-2">⨁ Registration No: {registrationNumber}</p>
                    <hr className='border-dashed opacity-30 pb-2' />
                    <p className="font-bold text-[16px] pb-2">
                        Availability:
                        {availability.split(',').map((day, index) => (
                            <button
                                key={index}
                                className="btn btn-soft btn-outline btn-warning mx-1 rounded-xl mt-2 mb-2"
                            >
                                {day.trim()}
                            </button>
                        ))}
                    </p>
                    <p className="font-bold te0xt-[16px]">Consultation Fee: <span className='font-semibold text-blue-500'> Taka: </span> <span className='font-medium text-blue-500'> {consultationFee} </span>  <span className='font-medium '>(incl. Vat) <span className='text-blue-500'>Per consultation</span></span></p>
                </div>
            </div>

            <div className='border max-w-10/12 mx-auto border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-2xl px-10 mt-7 mb-20'>
                <h1 className='font-bold text-2xl pt-8 pb-8 text-center'>Book an Appointment</h1>
                <hr className='border-dashed opacity-20' />

                <div className="flex flex-col gap-3 pt-4 pb-4">
                    <div className='flex justify-between items-center flex-wrap gap-2'>
                        <h1 className='font-bold text-xl'>Availability Status</h1>
                        <button className={`btn btn-outline ${isAvailableToday ? 'btn-success' : 'btn-error'}`}>
  {isAvailableToday ? 'Available Today' : 'Not Available Today'}
</button>
                    </div>

                    <button className="flex bg-yellow-100 rounded-sm p-2 w-full md:w-auto text-left">
                        <FaExclamationTriangle className="mr-2 mt-1.5 text-sm" />
                        Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                    </button>
                </div>
                <div className='flex justify-center mb-14'>
                {console.log("Doctor name:", name)}

                    <button onClick={() => handleBookAppointment(id, name)} className="btn btn-active bg-[#176AE5] text-white py-3.5 px-[674px]">Book Appointment Now</button>
                </div>
            </div>

            <div className="text-center">
            <Link to="/#ourBestDoctors" className="text-blue-500 hover:underline">Back to Doctors List</Link>
            </div>
        </div>
    );
};

export default DoctorsDetails;
