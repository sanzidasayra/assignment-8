
import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Pages/Root/Root'  
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import DoctorsDetails from '../Pages/Doctors/DoctorsDetails/DoctorsDetails';
import AppointmentList from '../Pages/AppointmentList/AppointmentList';
import Blogs from '../components/Blogs/Blogs';
import  { blogsLoader } from '../components/Blogs/blogsLoader';


export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            loader: () => fetch('../doctorsData.json'),
            path: '/',
            Component: Home,
        },

        {
            path: 'appointmentList',
            loader: () => fetch('../doctorsData.json'),
            Component: AppointmentList
        },

        {
            path: 'blogs',
            loader: blogsLoader,
            Component: Blogs

        },
        
        {       
            path: '/doctorsdetails/:id',
            loader: () => fetch('../doctorsData.json'),
            Component: DoctorsDetails,

        }
      ]
    },
  ]);