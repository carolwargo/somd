import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Floyd from '../assets/images/Testimonials/Floyd.png'
import Testimonials from '../components/Testimonials/Testimonials.jsx';

const Home = () => {
    return (
        <main> 
        <h1>Home</h1>
     

        <div className='home-about-container bg-secondary-subtle p-2'>
            <div className='home-about-intro text-center p-5'>
           
            <div className='row d-flex justify-content-center'>
                <div className='col-sm-12 col-md-8 col-lg-8'>
                <br></br>
                <p className='m-0'>WHO WE ARE & WHAT WE DO...</p>
            <h2>OPPORTUNITY FOR NEXT-LEVEL PLAY</h2>
            <br></br>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil ratione reiciendis sunt quibusdam sapiente blanditiis a explicabo fugiat accusamus itaque illo, culpa natus dolorum quos dolores quasi, enim laborum.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
         
               <p className='text-primary' style={{fontSize: '12px'}}> Learn more about our mission, values, and how we got started.
                <Link className='px-2 align-items-bottom'><FaLongArrowAltRight/> </Link></p>
            </div>
            
                <div className='col-sm-12 col-md-4 col-lg-4'>
<img src={Floyd} alt='Floyd' style={{ width: '100%', height: 'auto' }} />
            </div>
            </div>
            </div>
<Testimonials/>

            </div>

        </main>
    );
    };

export default Home;