import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import TimeToShine from '../assets/images/TimeToShine.png';
import Testimonials from '../components/Testimonials/Testimonials.jsx';

const Home = () => {
    return (
        <main className='bg-black text-light'
        style={{fontFamily:'sans-serif'}}> 
       
        <div className='home-about-container  p-2'>
            <div className='home-about-intro p-5'>
           
            <div className='row d-flex justify-content-center'>
                <div className='col-sm-12 col-md-8 col-lg-8'>
                <br></br>
                <p className='m-0 '>WHO WE ARE & WHAT WE DO...</p>
            <h2 className="text-danger">OPPORTUNITY FOR NEXT-LEVEL PLAY</h2>
            <br></br>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil ratione reiciendis sunt quibusdam sapiente blanditiis a explicabo fugiat accusamus itaque illo, culpa natus dolorum quos dolores quasi, enim laborum.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil ratione reiciendis sunt quibusdam sapiente blanditiis a explicabo fugiat accusamus itaque illo, culpa natus dolorum quos dolores quasi, enim laborum.
                <br></br>
            Learn more about our mission, values, and how we got started.
            </p>
            <button className='btn btn-danger'> Learn more  <Link className='px-2 align-items-bottom'></Link>
             </button>
           
            
         
              
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
            <div className='home-about-container'>
            <div className='home-about-intro p-5'>
           
            <div className='row d-flex justify-content-center'>
<Testimonials/>

        <div className='col-sm-12 col-md-2 col-lg-2'>
       
        </div>
        <div className='col-sm-12 col-md-8 col-lg-8'>
        <p className=' text-center p-4'> Want to see more of what past participants have to say about the impact Southern Maryland Baseball Camps.
       
                <Link to='/testimonials'
                className='px-2 align-items-bottom text-center' 
                style={{fontSize: '12px'}} >
                  View more testimonial statements 
                  <FaLongArrowAltRight/> 
                    </Link>
                    </p> 
        </div>
        <div className='col-sm-12 col-md-2 col-lg-2'>
        </div>
        </div>
       </div>    
       <br></br>
        </div>
            </div>

        </main>
    );
    };

export default Home;