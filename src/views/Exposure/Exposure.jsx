import React from "react";

import D1Programs from "../../components/Exposure/D1Programs";
import D2Programs from "../../components/Exposure/D2Programs";
import D3Programs from "../../components/Exposure/D3Programs";


const Exposure = () => {

    return (
        <main>
            <div className="container p-0">
                <div className="row d-flex text-center">
                <p>Southern Maryland Baseball Camp Program Participants</p>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <D1Programs />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <D2Programs />
                        <D3Programs />
                    </div>
                </div>
            </div>
            <div className="container">
            <h1 className='text-center'>Exposure</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus sed est incidunt excepturi cumque voluptatum commodi neque, obcaecati quae, saepe tenetur velit, a dolorem facere illo temporibus iste iure corrupti?</p>
            </div>
       <br></br>
       <br></br>
       <div className="container">
            <h6>NEXT-LEVEL PROGRAM AFFILIATES</h6>
        <p>List of College Coaches and Programs that have participated in SOMDBC past events...</p>
        <div className=" row" id="exposure-colleges">
            <div className="col-sm-12 col-md-3 col-lg-3"
            style={{fontSize:'12px'}}>
            <ul>
              
                <li><b>Andrew College</b>
                     <ul>
                     <li>Division: NJCAA (National Junior College Athletic Association)</li>
                     <li>Conference: Georgia Collegiate Athletic Association (GCAA)</li>
                     </ul>
                </li>
               
                
              
                
                <li><b></b>Chattahoochee Valley
                     <ul>
                     <li>Division: NJCAA (National Junior College Athletic Association)</li>
                        <li>Conference: Alabama Community College Conference (ACCC)</li>
                     </ul>
                </li>
              
             
                <li><b></b>Cleveland State
                     <ul>
                        <li>Division: NJCAA (National Junior College Athletic Association)</li>
                        <li>Conference: Tennessee Community College Athletic Association (TCCAA)</li>
                     </ul>
                </li>
               
                <li><b></b>College of Southern Maryland
                     <ul>
                     <li>Division: NJCAA (National Junior College Athletic Association)</li>
                        <li>Conference: Maryland Junior College Athletic Conference (MD JUCO)</li>
                     </ul>
                </li>
               
             
               
                <li><b></b>Dundalk Community College
                     <ul>
                     <li> Division: NJCAA (National Junior College Athletic Association)</li>
                        <li>Conference: Maryland Junior College Athletic Conference (MD JUCO)</li>
                     </ul>
                </li>
            

            </ul>

        </div>

        
        <div className="col-sm-12 col-md-3 col-lg-3"
        style={{fontSize:'12px'}}>
        <ul>
            <li><b></b>Essex Commumnity College
                <ul>
                    <li>Division: NJCAA (National Junior College Athletic Association)</li>
                    <li>Conference: Maryland Junior College Athletic Conference (MD JUCO)</li>
                </ul>
            </li>
          
          
        
      
            <li><b></b>Jefferson Davis College
                <ul>
                    <li>Division: NJCAA (National Junior College Athletic Association)</li>
                    <li>Conference: Alabama Community College Conference (ACCC)</li>
                </ul>
            </li>
       
          
            <li><b></b>Louisburg College
                <ul>
                    <li>Division: NJCAA (National Junior College Athletic Association)</li>
                    <li>Conference: Region X</li>
                </ul>
            </li>
      
        </ul>

        </div>
        <div className="col-sm-12 col-md-3 col-lg-3"
        style={{fontSize:'12px'}}>
            <ul>
                <li><b></b>Middle Georgia College
                    <ul>
                <li>Division: NJCAA (National Junior College Athletic Association)</li>
                <li>Conference: Georgia Collegiate Athletic Association (GCAA)</li>
                    </ul>
                </li>
               
               
                <li><b></b>P.G. Community College
                    <ul>
                <li>Division: NJCAA (National Junior College Athletic Association)</li>
                <li>Conference: Maryland Junior College Athletic Conference (MD JUCO)</li>
                    </ul>
                </li>
              
             
                <li><b></b>Southeastern University
                    <ul>
                <li>Division: NAIA (National Association of Intercollegiate Athletics)</li>
                <li>Conference: Sun Conference</li>
                    </ul>
                </li>
             
               
                <li><b></b>Tallahassee Comm. College
                    <ul>
                <li>Division: NJCAA (National Junior College Athletic Association)</li>
                <li>Conference: Panhandle Conference</li>
                    </ul>
                </li>
            
               
            </ul>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3"
        style={{fontSize:'12px'}}>
       <ul>


<li><b></b>Wallace State / Alabama
    <ul>
        <li>Division: NJCAA (National Junior College Athletic Association)</li>
        <li>Conference: Alabama Community College Conference (ACCC)</li>
    </ul>
</li>


        </ul>
        
</div>
        </div>
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