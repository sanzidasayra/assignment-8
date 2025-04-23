import React from 'react';
import { Link } from 'react-router';

const Doctor = ({singleDoctor, showCancelButton = false, onCancel}) => {

    const {image, id, name, education, experience, availabilityStatus, registrationNumber, speciality} = singleDoctor;

    const handleCancel = () => {
      if(onCancel) onCancel(id);
    }

    return (
        
      
        
        <div className="card bg-base-100 w-96 shadow-lg border border-gray-200 dark:border-gray-700  px-8 pt-8 lg:max-w-10/12 max-w-11/12 mx-auto">
  <figure>
    <img src={image} />
  </figure>

  <div className="card-actions gap-4 pt-5">
  <button className="btn btn-outline btn-success rounded-full">{availabilityStatus}</button>
  <button className="btn btn-outline btn-info rounded-full">{experience}</button>

    </div>

  <div className='pt-4 '>
    <h2 className="card-title pb-3">
      {name}
      <div className="badge badge-secondary ml-5 py-4 px-4">{speciality}</div>
    </h2>
    <p className='pb-4'>{education}</p>
    <hr className='opacity-20' />
    <p className='pt-4 pb-4'>{registrationNumber}</p>

    {
      showCancelButton && (
        <div className='flex justify-center mb-14'>
        <button onClick={() => handleCancel(id)} className="btn btn-outline btn-error ">Cancel Appointment</button>
        </div>
      )
    }
    

    <Link to={`/doctorsdetails/${id}#doctorDetailsSection`}>
  <button className='py-3 px-28 rounded-full border border-gray-300 dark:border-gray-700 dark:hover:bg-gray-800 mb-8 hover:bg-gray-100'>
    View Details
  </button>
</Link>

  </div>
</div>
       
 

        
    );
};

export default Doctor;