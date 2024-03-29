import React from "react";
import Drafted from "../../components/Success/Drafted.jsx";
import { FaLongArrowAltRight } from "react-icons/fa";
import Links from "../../components/Success/Links.jsx";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import Gavin from "../../assets/images/Success/Gavin.png";
import Brett from "../../assets/images/Success/Brett.png";
import John from "../../assets/images/Success/John.png";
import Steve from "../../assets/images/Success/Steve.png";
import Kenard from "../../assets/images/Success/Kenard.png";
import Brandon from "../../assets/images/Success/Brandon.png";
import Chris from "../../assets/images/Success/Chris.png";
import Jeff from "../../assets/images/Success/Jeff.png";
import Josh from "../../assets/images/Success/Josh.png";
import JeffPal from "../../assets/images/Success/JeffPal.png";
import NickA from "../../assets/images/Success/NickA.png";
import Johnny from "../../assets/images/Success/Johnny.png";
import BobbySt from "../../assets/images/Success/BobbySt.png";
import Guy from "../../assets/images/Success/Guy.png";
import Ryan from "../../assets/images/Success/Ryan.png";

export default function PlayersDrafted() {
  return (
    <main style={{ backgroundColor: "#EDEBEB", fontFamily: "sans-serif" }}>
      <div className="container pt-5">
        <div className="row">
          <p>SUCCESS TITLE AND INTRO NEEDED</p>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row d-flex p-2 justify-content-center align-content-center ">
          <div className="col-sm-12 col-md-6 col-lg-6 p-2 justify-content-center align-content-center">
            <h4 className="text-center">
              SOUTHERN MARYLAND BASEBALL CAMP HALL OF FAME
            </h4>
            <div className="Title">
              <br />
              <h5>NEXT LEVEL SUCCESS</h5>
              <p>
                Success is not just defined by draft status, "next level
                success" comes in many forms. See some our former SOMD Baseball
                Camp players that made a career of it.
              </p>
            </div>
          </div>
          <MDBCol className="flex-col p-4" md="3">
            <MDBCard className="h-80 top-drafted-card ">
              <MDBCardImage
                src={Brett}
                alt="brett-cecil"
                position="top"
                style={{ borderRadius: "0" }}
              />
              <MDBCardBody className="p-3 text-center">
                <MDBCardTitle
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    margin: "5px",
                  }}
                >
                  Brett Cecil
                </MDBCardTitle>
                <MDBCardText style={{ fontSize: "11px" }}>
                  1st Round- Blue Jays
                  <br></br>
                  <a
                    href="https://www.mlb.com/player/brett-cecil-446399"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view profile <FaLongArrowAltRight />
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol className="flex-col p-4" md="3">
            <MDBCard className="h-80 top-drafted-card">
              <MDBCardImage
                src={Gavin}
                alt="gavin-floyd"
                position="top"
                style={{ borderRadius: "0" }}
              />
              <MDBCardBody className="p-3 text-center">
                <MDBCardTitle
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    margin: "5px",
                  }}
                >
                  Gavin Floyd
                </MDBCardTitle>
                <MDBCardText style={{ fontSize: "11px" }}>
                  {" "}
                  1st Round- Philadelphia Phillies<br></br>
                  <a
                    href="https://www.mlb.com/player/brett-cecil-446399"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view profile <FaLongArrowAltRight />{" "}
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
        <br />

        <MDBRow className="text-center">
          <MDBCol className="flex-col p-4" md="3">
            <MDBCard className="h-80 top-drafted-card">
              <MDBCardImage
                src={John}
                alt="john-mccurdy"
                position="top"
                style={{ borderRadius: "0" }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    margin: "5px",
                  }}
                >
                  John McCurdy
                </MDBCardTitle>
                <MDBCardText style={{ fontSize: "11px" }}>
                  1st Round- Oakland Athletics
                  <br></br>
                  <a
                    href="https://www.baseball-reference.com/register/player.fcgi?id=mccurd001joh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view profile <FaLongArrowAltRight />{" "}
                  </a>
                  <br></br>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol className="flex-col p-4" md="3">
            <MDBCard className="h-80 top-drafted-card">
              <MDBCardImage
                src={Steve}
                alt="steve-clevenger"
                position="top"
                style={{ borderRadius: "0" }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    margin: "5px",
                  }}
                >
                  Steve Clevenger
                </MDBCardTitle>
                <MDBCardText style={{ fontSize: "11px" }}>
                  7th Round- Chicago Cubs
                  <br></br>
                  <a
                    href="https://www.mlb.com/player/brett-cecil-446399"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view profile <FaLongArrowAltRight />{" "}
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol className="flex-col p-4" md="3">
            <MDBCard className="h-100 top-drafted-card">
              <MDBCardImage
                src={Kenard}
                alt="..."
                position="top"
                style={{ borderRadius: "0" }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    margin: "5px",
                  }}
                >
                  Kenard Jones
                </MDBCardTitle>
                <MDBCardText style={{ fontSize: "11px" }}>
                  3rd Round- San Diego Padres
                  <br></br>
                  <a
                    href="https://www.mlb.com/player/brett-cecil-446399"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view profile <FaLongArrowAltRight />{" "}
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol className="flex-col p-4" md="3">
            <MDBCard className="h-100 top-drafted-card">
              <MDBCardImage
                src={Brandon}
                alt="brandon-erbe"
                position="top"
                style={{ borderRadius: "0" }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    margin: "5px",
                  }}
                >
                  Brandon Erbe
                </MDBCardTitle>
                <MDBCardText style={{ fontSize: "11px" }}>
                  3rd Round- Baltimore Orioles
                  <br></br>
                  <a
                    href="https://www.mlb.com/player/brett-cecil-446399"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view profile <FaLongArrowAltRight />{" "}
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br />

        <MDBRow className="text-center">
          <MDBCol className="flex-col p-4" md="3">
            <MDBCard className="h-100 top-drafted-card">
              <MDBCardImage
                src={Chris}
                alt="chris-archer"
                position="top"
                style={{ borderRadius: "0" }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    margin: "5px",
                  }}
                >
                  Chris Archer
                </MDBCardTitle>
                <MDBCardText style={{ fontSize: "11px" }}>
                  5th Round- Cleveland Indians
                  <br></br>
                  <a
                    href="https://www.mlb.com/player/brett-cecil-446399"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view profile <FaLongArrowAltRight />{" "}
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol className="flex-col p-4" md="3">
            <MDBCard className="h-100 top-drafted-card">
              <MDBCardImage
                src={Jeff}
                alt="jeff-baker"
                position="top"
                style={{ borderRadius: "0" }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    margin: "5px",
                  }}
                >
                  Jeff Baker
                </MDBCardTitle>
                <MDBCardText style={{ fontSize: "11px" }}>
                  4th Round- Colorado Rockies
                  <br></br>
                  <a
                    href="https://www.mlb.com/player/brett-cecil-446399"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view profile <FaLongArrowAltRight />{" "}
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol className="flex-col p-4" md="3">
            <MDBCard className="h-100 top-drafted-card">
              <MDBCardImage
                src={Josh}
                alt="..."
                position="top"
                style={{ borderRadius: "0" }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    margin: "5px",
                  }}
                >
                  Josh Banks
                </MDBCardTitle>
                <MDBCardText style={{ fontSize: "11px" }}>
                  2nd Round- Toronto Blue Jays
                  <br></br>
                  <a
                    href="https://www.mlb.com/player/brett-cecil-446399"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view profile <FaLongArrowAltRight />{" "}
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol className="flex-col p-4" md="3">
            <MDBCard className="h-100 top-drafted-card">
              <MDBCardImage
                src={NickA}
                alt="nick-adenhart"
                position="top"
                style={{ borderRadius: "0" }}
              />
              <MDBCardBody>
                <MDBCardTitle
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    margin: "5px",
                  }}
                >
                  Nick Adenhart
                </MDBCardTitle>
                <MDBCardText style={{ fontSize: "11px" }}>
                  14th Round- Anaheim Angels
                  <br></br>
                  <a
                    href="https://www.mlb.com/player/brett-cecil-446399"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view profile <FaLongArrowAltRight />{" "}
                  </a>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <br />
        <br />
        <br />

        {/**Coaches start */}
        <div className="row">
<div className="col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
<div className="container p-4 text-light" 
style={{backgroundColor:'#002D62'}}>
   
<br></br>
<br></br>
    <div className="col-sm-12 col-md-12 col-lg-12 text-center">
        <br></br>
    <p className="text-center">NEXT LEVEL SUCCESS</p>
    <h5 className="text-center">
              PLAYERS THAT MADE A CAREER OF IT BEYOND THE CONFINES OF THE DIAMOND
            </h5>
            <br></br>
            <div className="Title">
              <br />
             
              <p>
                Success is not just defined by draft status- "Next level
                success" comes in many forms. See some our former SOMD Baseball
                Camp players that made post-play careers of it.
              </p>
              </div>
              </div> 
        </div>
</div>


<div className="col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
<div className="container p-4 text-light" 
style={{backgroundColor:'#002D62'}}>
   
<img src={BobbySt} alt="bobby" style={{width:'100%', height:'auto'}}className="border border-black"></img>
<br></br>
<br></br>
    <div className="col-sm-12 col-md-12 col-lg-12">
        <h5><b>Bobby St. Pierre</b></h5>
        <p><i><b>7th Round- Scouting Supervisor-Houston Astros Pitching Analysis</b></i></p>
       <small>
        <p style={{fontSize:'11px'}}>
          Bobby currently serves as the Scouting Supervisor for Houston Astros Pitching Analysis. In his role, he acts as the Regional Supervisor of Scouting for Georgia, North Florida, Mid-Atlantic, NJ, NY, New England, and Canada. Additionally, Bobby is the lead designer and evaluator of the mechanical analysis program for the Scouting Department at the Houston Astros.
       <br></br>
       <br></br>
                  <b>Prior work & affiliations:</b>
                
                <ul>
                  <li>
                    <b>Pittsburgh Pirates:</b> Pitching Coach, Burlington, NC
                    and Burlington, IA. Pitching Coordinator, Extended Spring
                    Training, 2011.
                  </li>
                  <li>
                    <b>Kansas City Royals:</b>Pitching Coach, Burlington, NC and
                    Burlington, IA. Pitching Coordinator, Extended Spring
                    Training, 2011.
                  </li>
                  <li>
                    <b>Baseball Operations Consultant:</b>Served as advisor to
                    various entities. Most notably Northwest DC Little League,
                    Elite Baseball, and Manager/Director of Player Personnel for
                    the Takoma Thunderbolts. Developed overarching skills
                    program for entirety of Northwest Little League.
                  </li>
                </ul>
                </p>
              </small>
              </div> 
        </div>
</div>


<div className="col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
<div className="container p-4 text-light" 
style={{backgroundColor:'#002D62'}}>
   
<img src={JeffPal} alt="jeff-pal" style={{width:'100%', height:'auto'}}className="border border-black"></img>
<br></br>
<br></br>
    <div className="col-sm-12 col-md-12 col-lg-12">
        <h5><b>Jeff Palumbo</b></h5>
        <p><i><b> 15th Round- Assistant Head Coach ECU</b></i></p>
       <small>
        <p style={{fontSize:'11px'}}>
          Bobby currently serves as the Scouting Supervisor for Houston Astros Pitching Analysis. In his role, he acts as the Regional Supervisor of Scouting for Georgia, North Florida, Mid-Atlantic, NJ, NY, New England, and Canada. Additionally, Bobby is the lead designer and evaluator of the mechanical analysis program for the Scouting Department at the Houston Astros.
       <br></br>
       <br></br>
                  <b>Prior work & affiliations:</b>
                
                <ul>
                  <li>
                    <b>Pittsburgh Pirates:</b> Pitching Coach, Burlington, NC
                    and Burlington, IA. Pitching Coordinator, Extended Spring
                    Training, 2011.
                  </li>
                  <li>
                    <b>Kansas City Royals:</b>Pitching Coach, Burlington, NC and
                    Burlington, IA. Pitching Coordinator, Extended Spring
                    Training, 2011.
                  </li>
                  <li>
                    <b>Baseball Operations Consultant:</b>Served as advisor to
                    various entities. Most notably Northwest DC Little League,
                    Elite Baseball, and Manager/Director of Player Personnel for
                    the Takoma Thunderbolts. Developed overarching skills
                    program for entirety of Northwest Little League.
                  </li>
                </ul>
                </p>
              </small>
              </div> 
        </div>
</div>
</div>     
<br></br>


<div className="row">
<div className="col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
<div className="container p-4 text-light" 
style={{backgroundColor:'#002D62'}}>
   
<img src={Guy} alt="guy" style={{width:'100%', height:'auto'}}className="border border-black"></img>
<br></br>
<br></br>
    <div className="col-sm-12 col-md-12 col-lg-12">
        <h5><b>Guy Smith</b></h5>
        <p><i><b>11th Round- Huntingtown High School Head Coach & Owner of 5Tool Baseball</b></i></p>
       <small>
        <p style={{fontSize:'11px'}}>
          Bobby currently serves as the Scouting Supervisor for Houston Astros Pitching Analysis. In his role, he acts as the Regional Supervisor of Scouting for Georgia, North Florida, Mid-Atlantic, NJ, NY, New England, and Canada. Additionally, Bobby is the lead designer and evaluator of the mechanical analysis program for the Scouting Department at the Houston Astros.
       <br></br>
       <br></br>
                  <b>Prior work & affiliations:</b>
                
                <ul>
                  <li>
                    <b>Pittsburgh Pirates:</b> Pitching Coach, Burlington, NC
                    and Burlington, IA. Pitching Coordinator, Extended Spring
                    Training, 2011.
                  </li>
                  <li>
                    <b>Kansas City Royals:</b>Pitching Coach, Burlington, NC and
                    Burlington, IA. Pitching Coordinator, Extended Spring
                    Training, 2011.
                  </li>
                  <li>
                    <b>Baseball Operations Consultant:</b>Served as advisor to
                    various entities. Most notably Northwest DC Little League,
                    Elite Baseball, and Manager/Director of Player Personnel for
                    the Takoma Thunderbolts. Developed overarching skills
                    program for entirety of Northwest Little League.
                  </li>
                </ul>
                </p>
              </small>
              </div> 
        </div>
</div>


<div className="col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
<div className="container p-4 text-light" 
style={{backgroundColor:'#002D62'}}>
   
<img src={Ryan} alt="ryan" style={{width:'100%', height:'auto'}}className="border border-black"></img>
<br></br>
<br></br>
    <div className="col-sm-12 col-md-12 col-lg-12">
        <h5><b>Ryan Terrill</b></h5>
        <p><i><b>Scouting Supervisor-Houston Astros Pitching Analysis</b></i></p>
       <small>
        <p style={{fontSize:'11px'}}>
          Bobby currently serves as the Scouting Supervisor for Houston Astros Pitching Analysis. In his role, he acts as the Regional Supervisor of Scouting for Georgia, North Florida, Mid-Atlantic, NJ, NY, New England, and Canada. Additionally, Bobby is the lead designer and evaluator of the mechanical analysis program for the Scouting Department at the Houston Astros.
       <br></br>
       <br></br>
                  <b>Prior work & affiliations:</b>
                
                <ul>
                  <li>
                    <b>Pittsburgh Pirates:</b> Pitching Coach, Burlington, NC
                    and Burlington, IA. Pitching Coordinator, Extended Spring
                    Training, 2011.
                  </li>
                  <li>
                    <b>Kansas City Royals:</b>Pitching Coach, Burlington, NC and
                    Burlington, IA. Pitching Coordinator, Extended Spring
                    Training, 2011.
                  </li>
                  <li>
                    <b>Baseball Operations Consultant:</b>Served as advisor to
                    various entities. Most notably Northwest DC Little League,
                    Elite Baseball, and Manager/Director of Player Personnel for
                    the Takoma Thunderbolts. Developed overarching skills
                    program for entirety of Northwest Little League.
                  </li>
                </ul>
                </p>
              </small>
              </div> 
        </div>
</div>


<div className="col-sm-12 col-md-4 col-lg-4 justify-content-center align-items-center">
<div className="container p-4 text-light" 
style={{backgroundColor:'#002D62'}}>
   
<img src={Johnny} alt="johnny" style={{width:'100%', height:'auto'}}className="border border-black"></img>
<br></br>
<br></br>
    <div className="col-sm-12 col-md-12 col-lg-12">
        <h5><b>Johnny Poss</b></h5>
        <p><i><b>Free Agent-University of Maryland Assistant</b></i></p>
       <small>
        <p style={{fontSize:'11px'}}>
          Bobby currently serves as the Scouting Supervisor for Houston Astros Pitching Analysis. In his role, he acts as the Regional Supervisor of Scouting for Georgia, North Florida, Mid-Atlantic, NJ, NY, New England, and Canada. Additionally, Bobby is the lead designer and evaluator of the mechanical analysis program for the Scouting Department at the Houston Astros.
       <br></br>
       <br></br>
                  <b>Prior work & affiliations:</b>
                
                <ul>
                  <li>
                    <b>Pittsburgh Pirates:</b> Pitching Coach, Burlington, NC
                    and Burlington, IA. Pitching Coordinator, Extended Spring
                    Training, 2011.
                  </li>
                  <li>
                    <b>Kansas City Royals:</b>Pitching Coach, Burlington, NC and
                    Burlington, IA. Pitching Coordinator, Extended Spring
                    Training, 2011.
                  </li>
                  <li>
                    <b>Baseball Operations Consultant:</b>Served as advisor to
                    various entities. Most notably Northwest DC Little League,
                    Elite Baseball, and Manager/Director of Player Personnel for
                    the Takoma Thunderbolts. Developed overarching skills
                    program for entirety of Northwest Little League.
                  </li>
                </ul>
                </p>
              </small>
              </div> 
        </div>
</div>


</div>     
<br></br>
     
      


      


        <div className="container p-2">
          <Drafted />
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <Links />
        </div>
      </div>
    </main>
  );
}
