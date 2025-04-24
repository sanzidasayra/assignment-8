import { toast } from 'react-toastify';

const getStoredAppointment = () => {

    const storedAppointmentSTR = localStorage.getItem("appointmentList");
    if(storedAppointmentSTR){
        const storedAppointmentData = JSON.parse(storedAppointmentSTR);
        return storedAppointmentData;
    }
    else{
        return [];
    }

}

const addToStoreDB = (id, doctorName) => {
    const storedAppointmentData = getStoredAppointment();

    return new Promise((resolve) => {
        if (storedAppointmentData.includes(id)) {
            toast.error("Appointment already exists");
            resolve(false);
        } else {
            storedAppointmentData.push(id);
            const data = JSON.stringify(storedAppointmentData);
            localStorage.setItem("appointmentList", data);
            toast.success(`Booked appointment with ${doctorName} successfully`);
            resolve(true);
        }
    });
};




export const removeFromStoreDB = (id) => {
    const stored = getStoredAppointment();
    const updated = stored.filter(item => parseInt(item) !==parseInt(id));
    localStorage.setItem('appointmentList', JSON.stringify(updated));
}



export {addToStoreDB, getStoredAppointment};