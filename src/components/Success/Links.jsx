import React from "react";
import { MDBCol,MDBRow } from "mdb-react-ui-kit";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

const Links = () => {
  return (
    <div>
      <div className="drafted justify-content-around border border-secondary p-2">
     
          <br />
          <MDBRow >
            <h3>NEWSFEED</h3>
            <p>Notable Links, News & Resources...</p>
          </MDBRow>
          <MDBRow>
            <MDBCol>
            
                <MDBTable className="links-table">
                  <MDBTableHead dark style={{fontSize:'10px'}}>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Link</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody style={{fontSize:'10px'}}>
                    <tr>
                      <td> Bobby St. Pierre</td>
                      <td>
                        {" "}
                        <a
                          href="https://www.youtube.com/watch?v=1Z7XCCl_tCg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Bobby, Scouting Supervisor- Houston Astros Pitching
                          Analytics Talks Pitching
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td> Johnny Poss</td>
                      <td>
                        {" "}
                        <a
                          href=" https://umterps.com/news/2023/6/26/maryland-native-john-poss-named-to-maryland-baseball-staff"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i>Maryland Native John Poss Named...</i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td> Brett Cecil</td>
                      <td>
                        {" "}
                        <a href=" https://www.mlb.com/news/cardinals-sign-reliever-brett-cecil-c209230330">
                          <i>$30 Million Dollar Contract</i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td> Jeff Palumbo</td>
                      <td>
                        {" "}
                        <a href=" https://eastcarolina.rivals.com/news/jeff-palumbo-elevated-to-ecu-associate-head-baseball-coach">
                          <i>Jeff Palumbo Elevated To...</i>
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td> Ryan Terrill</td>
                      <td>
                        {" "}
                        <a href=" https://www.washingtonpost.com/sports/highschools/ryan-terrill-follows-in-fathers-footsteps-at-riverdale-baptist/2015/03/25/ec846734-d267-11e4-a62f-ee745911a4ff_story.html">
                          <i>Ryan Terrill To Follow in Fathers Footsteps</i>
                        </a>
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
            
            </MDBCol>
          </MDBRow>
  
      </div>
    </div>
  );
};

export default Links;
