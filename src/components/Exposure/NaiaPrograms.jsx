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
              <h3>NAIA Programs</h3>
             
            </div>
            <MDBContainer className="naia-programs">
              <MDBTable className="naia-programs" style={{ fontSize: "12px" }}>
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
                        href="https://mgaknights.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Middle Georgia College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://ssacsports.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       (SSAC) (NAIA)
                      </a>
                    </td>
                    <td></td>
                  </tr>


                  
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <a
                        href="https://fire.seu.edu/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       Southeastern University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://thesunconference.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       Sun Conference (NAIA)
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
