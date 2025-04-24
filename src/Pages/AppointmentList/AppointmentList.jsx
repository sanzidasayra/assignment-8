import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredAppointment, removeFromStoreDB } from '../../utility/addToDB';
import { toast } from 'react-toastify';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell
} from 'recharts';

const CustomBar = (props) => {
    const { x, y, width, height, fill } = props;
    const path = `
      M${x},${y + height} 
      C${x + width / 4},${y + height} ${x + width / 2},${y + height / 4} ${x + width / 2},${y}
      C${x + width / 2},${y + height / 4} ${x + (3 * width) / 4},${y + height} ${x + width},${y + height}
      Z
    `;
    return <path d={path} stroke="none" fill={fill} />;
  };
  
  
  

const AppointmentList = () => {
  const [appointmentList, setAppointmentList] = useState([]);
  const data = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    const storedAppointmentData = getStoredAppointment();
    const convertedIds = storedAppointmentData.map(id => parseInt(id));
    const myAppointments = data.filter(doctor => convertedIds.includes(doctor.id));
    setAppointmentList(myAppointments);
  }, [data]);

  const handleCancelAppointment = (id) => {
    removeFromStoreDB(id);
    toast.success("Booking cancelled");
    const updatedList = appointmentList.filter(doc => doc.id !== id);
    setAppointmentList(updatedList);
  };

  const chartColors = ["#60a5fa", "#f87171", "#34d399", "#fbbf24", "#a78bfa", "#f472b6"];

  const getChartData = () => {
    return appointmentList.map(doc => ({
      name: doc.name,
      fee: doc.consultationFee
    }));
  };

  if (appointmentList.length === 0) {
    return (
      <div className='border border-gray-100 bg-gray-50   shadow-2xl max-w-10/12 mx-auto rounded-3xl pt-16 pb-16'>
        <h1 className='font-extrabold text-[32px] text-center pt-16 pb-4'>No Appointments Found</h1>
        <p className='font-medium text-[16px] text-center pb-6 px-32'>You haven't booked any appointments yet.</p>
        <div className='flex justify-center pb-10'>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto min-w-screen px-4 py-10  pl-32 pr-32">
      <h1 className='font-extrabold text-[32px] text-center pb-4'>My Today Appointments</h1>
      <p className='text-[16px] text-center pb-8'>
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
      </p>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-10 shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Consultation Fee Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={getChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="fee" shape={<CustomBar />} label={{ position: 'top' }}>
              {appointmentList.map((_, index) => (
                <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {appointmentList.map(doctor => (
        <div key={doctor.id} className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div>
              <h2 className="font-bold text-lg">{doctor.name}</h2>
              <p className="text-sm text-gray-600">{doctor.education}</p>
              <p className="text-sm text-gray-500">{doctor.speciality}</p>
            </div>
            <div className="mt-4 sm:mt-0 text-sm font-medium">
              Appointment Fee: {doctor.consultationFee} Taka + Vat
            </div>
          </div>
          <button
            onClick={() => handleCancelAppointment(doctor.id)}
            className="btn btn-outline btn-error w-full"
          >
            Cancel Appointment
          </button>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
