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
    <div className="d2-programs justify-content-around"
    style={{fontFamily:'sans-serif'}}>
      <MDBContainer className="p-2">
        <MDBRow className="pt-5">
          <MDBCol className="col-sm-12 col-md-12 col-lg-12 p-3 pt-3 border border-secondary-subtle">
            <div className="px-3">
              <h3>JUCO Programs</h3>
             
            </div>
            <MDBContainer className="d3-programs">
              <MDBTable className="d3-programs" style={{ fontSize: "10px" }}>
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
                        href="https://andrewfightingtigers.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Andrew College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.oac.org/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       Georgia Collegiate Athletic Association
                      </a>
                    </td>
                    <td></td>
                  </tr>


                  
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <a
                        href="https://aaccathletics.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Anne Arundel Community College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.mdjuco.org/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      (MD JUCO)
                      </a>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <a
                        href="https://chattahoocheevalleycc.prestosports.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chattahoochee Valley
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.oac.org/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Alabama Community College Conference
                      </a>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <a
                        href="https://www.cscougars.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Cleveland State
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.landmarkconference.org/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (TCCAA)
                      </a>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td>
                      <a
                        href="https://athletics.csmd.edu/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        College of Southern Maryland
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.landmarkconference.org/sports/bsb/index"  
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (MD JUCO)
                      </a>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <th scope="row">5</th>
                    <td>
                      <a
                        href="https://www.ccbcdundalklions.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Dundalk Community College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.landmarkconference.org/sports/bsb/index"  
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (MD JUCO)
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">6</th>
                    <td>
                      <a
                        href="https://www.ccbcessexknights.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       Essex Community College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.landmarkconference.org/sports/bsb/index"  
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (MD JUCO)
                      </a>
                    </td>
                    <td></td>
                  </tr>



                  <tr>
                    <th scope="row">7</th>
                    <td>
                      <a
                        href="https://www.njcaa.org/sports/bsb/2002-03/div1/teams/JeffersonDavisCommunityCollege/leaders.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      Jefferson Davis College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.njcaa.org/compete/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (NJCAA)
                      </a>
                    </td>
                    <td></td>
                  </tr>

                  
                  <tr>
                    <th scope="row">8</th>
                    <td>
                      <a
                        href="https://www.lchurricanes.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Louisburg College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.njcaa.org/compete/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (NJCAA)
                      </a>
                    </td>
                    <td></td>
                  </tr>


                  
                  <tr>
                    <th scope="row">9</th>
                    <td>
                      <a
                        href="https://pgccowls.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        P.G. Community College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.landmarkconference.org/sports/bsb/index"  
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (MD JUCO)
                      </a>
                    </td>
                    <td></td>
                  </tr>

                  
                  <tr>
                    <th scope="row">10</th>
                    <td>
                      <a
                        href="https://www.tcceagles.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       Tallahassee Community College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://thefcsaasports.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         Panhandle Conference
                      </a>
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <th scope="row">11</th>
                    <td>
                      <a
                        href="https://athletics.wallacestate.edu/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       Wallace State 
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://acccathletics.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       (ACCC)
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
