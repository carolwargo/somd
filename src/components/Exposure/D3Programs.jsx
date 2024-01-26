import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
//Conference: Atlantic Coast Conference (ACC), Big East Conference, Big South Conference

export default function Programs() {
  return (
    <div className="d2-programs justify-content-around ">
      <MDBContainer className="p-2">
        <MDBRow className="pt-5">
          <MDBCol className="col-sm-12 col-md-12 col-lg-12 p-3 pt-3 border border-secondary-subtle">
            <div className="px-3">
              <h3>Division III Programs</h3>
             
            </div>
            <MDBContainer className="d3-programs">
              <MDBTable className="d3-programs" style={{ fontSize: "12px" }}>
                <MDBTableHead dark>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">School</th>
                    <th scope="col">Conference</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                

                  {/**d3 */}

                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <a
                        href="https://www.bwyellowjackets.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Baldwin-Wallace
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://oac.org/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ohio Athletic Conference
                      </a>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <a
                        href="https://bridgewatereagles.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bridgewater College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://odaconline.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Old Dominion Athletic Conference
                      </a>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <a
                        href="https://catholicathletics.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Catholic University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://landmarkconference.org/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Landmark Conference
                      </a>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td>
                      <a
                        href="https://greensborocollegesports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Greensboro College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://theamerican.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        USA South Athletic Conference
                      </a>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <th scope="row">5</th>
                    <td>
                      <a
                        href="https://www.bergathletics.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Heidelberg University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://ovcsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ohio Athletic Conference
                      </a>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <th scope="row">6</th>
                    <td>
                      <a
                        href="https://suseagulls.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Salisbury State University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://njacsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        New Jersey Athletic Conference
                      </a>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <th scope="row">7</th>
                    <td>
                      <a
                        href="https://smcgaels.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        St. Mary's College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://wccsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        West Coast Conference
                      </a>
                    </td>
                    <td></td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
              <p
                className="text-center"
                style={{ fontSize: "10px", color: "gray" }}
              >
                The participant lists include individuals who have attended past
                events. However, attendance at future events is not guaranteed
                unless explicitly stated otherwise. <br></br>* Data has been
                gathered from various sources, and SMDBC does not guarantee
                accuracy. <br></br>Last Updated: 1/25/2024
              </p>
            </MDBContainer>
          </MDBCol>
          <MDBCol className="col-sm-12 col-md-4 col-lg-4"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
