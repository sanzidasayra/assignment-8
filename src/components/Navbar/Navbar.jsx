import React from 'react';
import logo from '../../assets/C001-assets/logo.png';
import { Link, useLocation } from 'react-router';


const Navbar = () => {
  const location = useLocation();
    return (
        <div className="navbar bg-base-100  mx-auto mb-4">
  <div className="navbar-start">
    <div className="dropdown lg:pl-36 pl-6">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <Link to='/'> <li><a className={`font-medium text-[18px] ${location.pathname === "/" ? "border-b-2 border-blue-600" : "text-gray-700"}`}>Home</a></li></Link>
        <Link to='/appointmentList'><li><a className={`font-medium text-[18px] ${location.pathname === "/appointmentList" ? "border-b-2 border-blue-600" : "text-gray-700"}`}>My-Bookings</a></li></Link>
        <Link to='/blogs'><li><a className=    {`font-medium text-[18px] ${location.pathname === "/blogs" ? "border-b-2 border-blue-600" : "text-gray-700"}`}    >Blogs</a></li></Link>
        <li><Link to='/contact' className=   {`font-medium text-[18px] ${location.pathname === "/contact" ? "border-b-2 border-blue-600" : "text-gray-700"}`}   >Contact Us</Link></li>
      </ul>
    </div>
    <Link to='/' className="flex cursor-pointer font-extrabold text-[32px] gap-2"><img src= {logo} alt=""/>DocTalk</Link>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 flex gap-8 text-md font-medium text-gray-700 dark:text-gray-300">
        <Link to='/'><li><a className={`font-medium text-[18px] ${location.pathname === "/" ? "border-b-2 border-blue-600" : "text-gray-700"} `}>Home</a></li></Link>
        <Link to='/appointmentList'><li><a className={`font-medium text-[18px] ${location.pathname === "/appointmentList" ? "border-b-2 border-blue-600" : "text-gray-700"}`}>My-Bookings</a></li></Link>
       <Link to='/blogs'> <li><a className=  {`font-medium text-[18px] ${location.pathname === "/blogs" ? "border-b-2 border-blue-600" : "text-gray-700"}`}    >Blogs</a></li></Link>
        <li><Link to='/contact' className=  {`font-medium text-[18px]  ${location.pathname === "/contact" ? "border-b-2 border-blue-600" : "text-gray-700"}`  }   >Contact Us</Link></li>
    </ul>
  </div>
  <div className="navbar-end lg:pr-36 pr-6">
    <Link to='/emergency' className=" bg-[#176AE5] rounded-full text-gray-50 font-bold text-xl py-3 px-7">Emergency</Link>
  </div>
</div>
    );
};

export default Navbar;