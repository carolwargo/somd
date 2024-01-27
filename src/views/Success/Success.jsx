import React from "react";
import Drafted from "../../components/Success/Drafted.jsx";

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
    <main>
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
              Success is not just defined by draft status, "next level success"
              comes in many forms. See some our former SOMD Baseball Camp
              players that made a career of it.
            </p>
          </div>
            </div>
            <MDBCol className="flex-col p-4" md="3">
              <MDBCard className="h-80 top-drafted-card mb-1">
                <MDBCardImage
                  src={Brett}
                  alt="brett-cecil"
                  position="top"
                  style={{ borderRadius: "0" }}
                />
                <MDBCardBody>
                  <MDBCardTitle
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <a
                      href="https://www.mlb.com/player/brett-cecil-446399"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Brett Cecil
                    </a>
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    1st Round-  Toronto Blue Jays
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
                <MDBCardBody>
                  <MDBCardTitle
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    <a
                      href="https://www.mlb.com/player/gavin-floyd-425856"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gavin Floyd
                    </a>
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    {" "}
                    1st Round- Philadelphia Phillies
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            </div>
          <br />
          
          
          <MDBRow>
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
                    }}
                  >
                    <a
                        href="https://www.baseball-reference.com/register/player.fcgi?id=mccurd001joh"
                        target="_blank"
                      rel="noopener noreferrer">
                    John McCurdy
                    </a>
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    1st Round- Oakland Athletics
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
                    }}
                  >
                     <a
                        href="https://www.baseball-reference.com/register/player.fcgi?id=mccurd001joh"
                        target="_blank"
                      rel="noopener noreferrer"
                    >
                        Steve Clevenger</a>
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    7th Round- Chicago Cubs
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
                    }}
                  >
                    <a
                        href="https://www.baseball-reference.com/register/player.fcgi?id=mccurd001joh"
                        target="_blank"
                      rel="noopener noreferrer"
                    >
                    Kenard Jones
                    </a>
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    3rd Round- San Diego Padres
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
                    }}
                  >
                       <a
                        href="https://www.baseball-reference.com/register/player.fcgi?id=mccurd001joh"
                        target="_blank"
                      rel="noopener noreferrer"
                    >
                    Brandon Erbe
                    </a>
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    3rd Round- Baltimore Orioles
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>


            </MDBRow>
          <br />

          <MDBRow>

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
                    }}
                  >
                       <a
                        href="https://www.baseball-reference.com/register/player.fcgi?id=mccurd001joh"
                        target="_blank"
                      rel="noopener noreferrer"
                    >
                    Chris Archer
                    </a>
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    5th Round- Cleveland Indians
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
                    }}
                  >
                       <a
                        href="https://www.baseball-reference.com/register/player.fcgi?id=mccurd001joh"
                        target="_blank"
                      rel="noopener noreferrer"
                    >
                    Jeff Baker
                    </a>
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    4th Round- Colorado Rockies
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
                    }}
                  >
                       <a
                        href="https://www.baseball-reference.com/register/player.fcgi?id=mccurd001joh"
                        target="_blank"
                      rel="noopener noreferrer"
                    >
                    Josh Banks
                    </a>
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    2nd Round- Toronto Blue Jays
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
                    }}
                  >
                       <a
                        href="https://www.baseball-reference.com/register/player.fcgi?id=mccurd001joh"
                        target="_blank"
                      rel="noopener noreferrer"
                    >
                    Nick Adenhart
                    </a>
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    14th Round- Anaheim Angels
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            </MDBRow>
          <br />
          <br />
          <br />

{/**Coaches start */}
          <MDBRow>
            <MDBCol className="flex-col p-4" md="3">
              <MDBCard className="h-100 top-drafted-card">
                <MDBCardImage
                  src={JeffPal}
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
                    }}
                  >
                    Jeff Palumbo
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    15th Round- Assistant Head Coach ECU
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <br />
            <MDBCol className="flex-col p-4" md="3">
              <MDBCard className="h-100 top-drafted-card">
                <MDBCardImage
                  src={Johnny}
                  alt="john-poss"
                  position="top"
                  style={{ borderRadius: "0" }}
                />
                <MDBCardBody>
                  <MDBCardTitle
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    Johnny Poss
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    {" "}
                    Baltimore Orioles- Assistant Coach UMD
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
       
            <MDBCol className="flex-col p-4" md="3">
              <MDBCard className="h-100 top-drafted-card">
                <MDBCardImage
                  src={BobbySt}
                  alt="bobby-stpierre"
                  position="top"
                  style={{ borderRadius: "0" }}
                />
                <MDBCardBody>
                  <MDBCardTitle
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    Bobby St. Pierre
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    Scouting Supervisor-Houston Astros Pitching Analysis
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
        
            <MDBCol className="flex-col p-4" md="3">
              <MDBCard className="h-100 top-drafted-card">
                <MDBCardImage
                  src={Guy}
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
                    }}
                  >
                    Guy Smith
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    {" "}
                    11th Round- Owner "5-Tool", 26yr Tenure Coach
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol className="flex-col p-4" md="3">
              <MDBCard className="h-100 top-drafted-card">
                <MDBCardImage
                  src={Ryan}
                  alt="ryan-terrill"
                  position="top"
                  style={{ borderRadius: "0" }}
                />
                <MDBCardBody>
                  <MDBCardTitle
                    style={{
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    Ryan Terrill
                  </MDBCardTitle>
                  <MDBCardText style={{ fontSize: "11px" }}>
                    {" "}
                    George Mason- Asstitant Coach/Recruiting Coordinator
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <br />
           
          </MDBRow>
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
