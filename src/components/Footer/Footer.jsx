import React from 'react';
import logo from '../../assets/C001-assets/logo.png';
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { Link, useLocation } from 'react-router';

const Footer = () => {
  const location = useLocation();

  return (
    <div className='dark:bg-gray-800 bg-gray-200 text-gray-900 mt-16'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center text-xl font-extrabold dark:text-white pt-24 pb-4'>
        <img src={logo} alt="" className="w-16 h-16 sm:w-20 sm:h-20" />
        <h1 className='text-gray-700 dark:text-gray-200 font-extrabold text-3xl ml-3 text-center sm:text-left'>DocTalk</h1>
      </div>

      <div className='text-center text-md font-medium text-gray-700 dark:text-gray-200'>
        <ul className="menu menu-horizontal px-1 pb-4 gap-8 text-gray-700 dark:text-gray-300 justify-center sm:justify-start">
          <Link to='/'><li><a className={`font-medium text-[18px] ${location.pathname === "/" ? "border-b-2 border-blue-600" : "text-gray-700"}`}>Home</a></li></Link>
          <Link to='/appointmentList'><li><a className={`font-medium text-[18px] ${location.pathname === "/appointmentList" ? "border-b-2 border-blue-600" : "text-gray-700"}`}>My-Bookings</a></li></Link>
          <Link to='/blogs'><li><a className={`font-medium text-[18px] ${location.pathname === "/blogs" ? "border-b-2 border-blue-600" : "text-gray-700"}`}>Blogs</a></li></Link>
          <li><Link to='/contact' className={`font-medium text-[18px] ${location.pathname === "/contact" ? "border-b-2 border-blue-600" : "text-gray-700"}`}>Contact Us</Link></li>
        </ul>
        <hr className='border border-dashed opacity-20' />
      </div>

      <div className='flex items-center justify-center gap-4 pt-8 pb-24 flex-wrap'>
        <a target='blank' href="https://www.facebook.com/sanzida.sayra/">
          <SiFacebook className="text-blue-500 hover:scale-110 transition-transform h-[35px] w-[36px]" />
        </a>
        <a target='blank' href="https://x.com/@sayrasanzida">
          <FaSquareXTwitter className="text-black hover:scale-110 transition-transform h-[35px] w-[36px]" />
        </a>
        <a target='blank' href="https://www.linkedin.com/in/mst-sanzida-akter-a2306b360/">
          <ImLinkedin className="text-blue-700 hover:scale-110 transition-transform h-[35px] w-[36px]" />
        </a>
        <a target='blank' href="https://www.youtube.com/@Sanzidasayrah">
          <IoLogoYoutube className="text-red-600 hover:scale-110 transition-transform h-[35px] w-[36px]" />
        </a>
      </div>
    </div>

  );
};

export default Footer;