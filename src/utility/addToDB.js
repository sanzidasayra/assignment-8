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

const addToStoreDB = (id) => {
    
    const storedAppointmentData = getStoredAppointment();

    if(storedAppointmentData.includes(id)){
        toast.error("already exist")
    }
    else{

        storedAppointmentData.push(id);
        const data = JSON.stringify(storedAppointmentData);

        localStorage.setItem("appointmentList", data)
        toast.success("Booked Succesfully")



    }
}

export const removeFromStoreDB = (id) => {
    const stored = getStoredAppointment();
    const updated = stored.filter(item => parseInt(item) !==parseInt(id));
    localStorage.setItem('appointmentList', JSON.stringify(updated));
}



export {addToStoreDB, getStoredAppointment};