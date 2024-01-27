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
          <MDBCol className="col-sm-12 col-md-12 col-lg-12 pt-3">
            <div className="px-3">
              <h3>Division II Programs</h3>
              
            </div>
            <MDBContainer className="d2-programs">
              <MDBTable
                className="d2-programs-table"
                style={{ fontSize: "10px" }}
              >
                <MDBTableHead dark>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">School</th>
                    <th scope="col">Conference</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
               

                <tr>
                    <th scope="row">1</th>
                    <td>
                      <a
                        href="https://pacersports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       Aiken
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://peachbeltconference.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       Peach Belt Conference
                      </a>
                    </td>
                  </tr>


                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <a
                        href="https://uahchargers.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Alabama/Huntsville
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://gscsports.org/news/2024/1/25/2024-gsc-baseball-preseason-team-announced.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Gulf South Conference (GSC)
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <a
                        href="https://gocuhawks.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Chowan College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://theciaa.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Central Intercollegiate Athletic Association
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <a
                        href="https://landerbearcats.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Lander College SC
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://peachbeltconference.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Peach Belt Conference
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td>
                      <a
                        href="https://umotrojans.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mount Olive
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://conferencecarolinas.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Conference Carolinas
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">5</th>
                    <td>
                      <a
                        href="https://shepherdrams.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Shepard University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://psacsports.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pennsylvania State Athletic Conference
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">6</th>
                    <td>
                      <a
                        href="https://roarlions.com/sports/baseball/roster"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        University of North Alabama
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://asunsports.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atlantic Sun Conference
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">7</th>
                    <td>
                      <a
                        href="https://rockathletics.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Slippery Rock University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://psacsports.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pennsylvania State Athletic Conference
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">8</th>
                    <td>
                      <a
                        href="https://www.tusculumpioneers.com/landing/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tusculum
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.thesac.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        South Atlantic Conference (SAC)
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">9</th>
                    <td>
                      <a
                        href="https://yhcathletics.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Young Harris College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://peachbeltconference.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Peach Belt Conference
                      </a>
                    </td>
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
