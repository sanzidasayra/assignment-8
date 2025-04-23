import React from 'react';
import Banner from '../../components/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';
import Services from '../../components/Services/Services';
import { useEffect } from 'react';


const Home = () => {
    const data = useLoaderData();
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
    console.log(data);
    return (
        <div className='lg:max-w-10/12 max-w-11/12 mx-auto '>
            <Banner></Banner>
            <Doctors data = {data}></Doctors>
            <Services></Services>
            
        </div>
    );
};

export default Home;