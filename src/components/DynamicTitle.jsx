// components/DynamicTitle.js
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  const getTitle = (pathname) => {
    switch (pathname) {
      case "/":
        return "Home | DocTalk";
      case "/appointmentList":
        return "Bookings | DocTalk";
      case "/blogs":
        return "Blogs | DocTalk";
      case "/contact":
        return "Contact Us | Doctor Appointment";
        case "/doctorsdetails":
          return "Doctor Details | Doctor Appointment";
      default:
        return "DocTalk";
    }
  };

  return (
    <Helmet>
      <title>{getTitle(location.pathname)}</title>
    </Helmet>
  );
};

export default DynamicTitle;
