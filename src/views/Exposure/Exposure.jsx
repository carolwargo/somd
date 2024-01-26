import React from "react";

import D1Programs from "../../components/Exposure/D1Programs";
import D2Programs from "../../components/Exposure/D2Programs";
import D3Programs from "../../components/Exposure/D3Programs";
import JucoPrograms from '../../components/Exposure/JucoPrograms';
import NaiaPrograms from '../../components/Exposure/NaiaPrograms'


const Exposure = () => {

    return (
        <main>
            <div className="container p-0">
                <div className="row d-flex text-center">
                <h6>NEXT-LEVEL PROGRAM AFFILIATES</h6>
        <p>List of College Coaches and Programs that have participated in SOMDBC past events...</p>
        
                <p>Southern Maryland Baseball Camp Program Participants By Division</p>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <D1Programs />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <D2Programs />
                        <D3Programs />
                        <JucoPrograms/>
                        <NaiaPrograms/>
                    </div>
                </div>


            </div>
            <div className="container">
            <h1 className='text-center'>Exposure</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus sed est incidunt excepturi cumque voluptatum commodi neque, obcaecati quae, saepe tenetur velit, a dolorem facere illo temporibus iste iure corrupti?</p>
            </div>
      
       
        <br></br>
        <br></br>
        <h6>VISITED BY THE PROS</h6>
        <h3>List of Professional Scouts that have participated in SOMDBC past events...</h3>
        <div className="exposure-pro-scouts row">
            <div className="col-sm-12 col-md-6 col-lg-6">
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6"></div>
        </div>
        
        </main>
    );
};

export default Exposure;