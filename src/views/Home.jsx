import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import TimeToShine from '../assets/images/TimeToShine.png';
import Testimonials from '../components/Testimonials/Testimonials.jsx';

const Home = () => {
    return (
        <main> 
        <h1 className='text-center'>HomePage</h1>
     

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
                <Link to="/registration">
  <img
    src={TimeToShine}
    alt='TimeToShine'
    style={{
      width: '100%',
      height: 'auto',
      padding: '.25rem',
      backgroundColor: 'black',
      boxShadow: '0.5px 0.5px 2px 0px black',
      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out', // Add this line for the transitions
    }}
    // Add the following lines for hover effect
    onMouseOver={(e) => {
      e.currentTarget.style.opacity = '0.8';
      e.currentTarget.style.transform = 'scale(1.1)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.opacity = '1';
      e.currentTarget.style.transform = 'scale(1)';
    }}
  />
</Link>
            </div>
            </div>
            </div>
<Testimonials/>
<div className='link-testimonials-page text-center'>
        <p className=' text-center'> Want to see more of what past participants have to say about the impact Southern Maryland Baseball Camps.
        </p>
               <p>
                <Link to='/testimonials'
                className='px-2 align-items-bottom text-center' 
                style={{fontSize: '12px'}} >
                  View more testimonial statements 
                  <FaLongArrowAltRight/> 
                    </Link>
                    </p> 
        </div>
            </div>

        </main>
    );
    };

export default Home;