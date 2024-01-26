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
    <div className="drafted justify-content-around ">
      
      <MDBContainer className="p-2">
        <MDBRow className="pt-5">
        <MDBCol className="col-sm-12 col-md-8 col-lg-8 p-3 pt-3 border border-secondary-subtle">
        <div className="px-3">
        <h3>Division I Programs</h3>
            <p>Southern Maryland Baseball Camp Program Participants</p> 
        </div>
            <MDBContainer className="drafted">
              <MDBTable className="drafted-table" style={{ fontSize: "12px" }}>
                <MDBTableHead dark>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">School</th>
                    <th scope="col">Conference</th>
                    <th scope="col">Achievement Highlight</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      <a
                        href="https://rolltide.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Alabama
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.secsports.com/clubhouse/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Southeastern Conference (SEC)
                      </a>
                    </td>
                    <td>CWS Runner Up</td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td>
                      <a
                        href="https://butlersports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Butler
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.bigeast.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Big East Conference
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <a
                        href="https://www.mlb.com/player/gavin-floyd-425856"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Campbell
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://bigsouthsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Big South Conference
                      </a>
                    </td>

                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td>
                      <a
                        href="https://csusports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Charlseton Southern
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://bigsouthsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Big South Conference
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">5</th>
                    <td>
                      <a
                        href="https://clemsontigers.com/sports/baseball/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Clemson
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://theacc.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atlantic Coast Conference (ACC)
                      </a>
                    </td>
                    <td>12 CWS Appearances</td>
                  </tr>

                  <tr>
                    <th scope="row">6</th>
                    <td>
                      <a
                        href="https://goccusports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Coastal Carolina
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://sunbeltsports.org/standings.aspx?path=baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sunbelt Conference
                      </a>
                    </td>
                    <td>CWS Title</td>
                  </tr>

                  <tr>
                    <th scope="row">7</th>
                    <td>
                      <a
                        href="https://tribeathletics.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        College of William & Mary
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://caasports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Colonial Athletic Association (CAA)
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">8</th>
                    <td>
                      <a
                        href="https://gocolumbialions.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Columbia University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://ivyleague.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ivy League
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">9</th>
                    <td>
                      <a
                        href="https://dartmouthsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Dartmouth
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://ivyleague.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ivy League
                      </a>
                    </td>
                    <td>CWS Title</td>
                  </tr>

                  <tr>
                    <th scope="row">10</th>
                    <td>
                      <a
                        href="https://davidsonwildcats.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Davidson
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://atlantic10.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atlantic 10 Conference
                      </a>
                    </td>
                    <td>Super-Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">11</th>
                    <td>
                      <a
                        href="https://bluehens.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Delaware
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://caasports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Colonial Athletic Association (CAA)
                      </a>
                    </td>
                    <td>CWS Appearance</td>
                  </tr>

                  <tr>
                    <th scope="row">12</th>
                    <td>
                      <a
                        href="https://goduke.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Duke
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://theacc.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Athletic Coast Conference (ACC)
                      </a>
                    </td>
                    <td>3 CWS Appearances</td>
                  </tr>

                  <tr>
                    <th scope="row">13</th>
                    <td>
                      <a
                        href="https://ecupirates.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        East Carolina
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://theamerican.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        American Athletic Conference (AAC)
                      </a>
                    </td>
                    <td>Super Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">14</th>
                    <td>
                      <a
                        href="https://eiupanthers.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Eastern Illinois
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://ovcsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ohio Valley Conference (OVC)
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">15</th>
                    <td>
                      <a
                        href="https://furmanpaladins.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Furman
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://soconsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Southern Conference (SoCon)
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">16</th>
                    <td>
                      <a
                        href="https://gomason.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        George Mason University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://atlantic10.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atlantic 10 Conference
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">17</th>
                    <td>
                      <a
                        href="https://gwsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        George Washington University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://atlantic10.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atlantic 10 Conference
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">18</th>
                    <td>
                      <a
                        href="https://guhoyas.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Georgetown University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.bigeast.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Big East Conference
                      </a>
                    </td>
                    <td>Conference</td>
                  </tr>

                  <tr>
                    <th scope="row">19</th>
                    <td>
                      <a
                        href="https://georgiastatesports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Georgia State
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://sunbeltsports.org/standings.aspx?path=baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sunbelt Conference
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">20</th>
                    <td>
                      <a
                        href="https://uncgspartans.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        UNC Greensboro
                      </a>
                    </td>
                    <td>
                      <a
                        href=" https://saa-sports.com/standings.aspx?path=baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        USA South Athletic Conference
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">21</th>
                    <td>
                      <a
                        href="https://hartfordhawks.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Hartford
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://americaeast.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        America East Conference
                      </a>
                    </td>
                    <td>Regional</td>
                  </tr>

                  <tr>
                    <th scope="row">22</th>
                    <td>
                      <a
                        href="https://gocrimson.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Harvard University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://ivyleague.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ivy League
                      </a>
                    </td>
                    <td>CWS Appearance</td>
                  </tr>

                  <tr>
                    <th scope="row">23</th>
                    <td>
                      <a
                        href="https://highpointpanthers.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        High Point University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://bigsouthsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Big South Conference
                      </a>
                    </td>
                    <td>Conference</td>
                  </tr>

                  <tr>
                    <th scope="row">24</th>
                    <td>
                      <a
                        href="https://gohofstra.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Hofstra University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://caasports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Colonial Athletic Association (CAA)
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">25</th>
                    <td>
                      <a
                        href="https://hubison.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Howard University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://meacsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mid-Eastern Athletic Conference (MEAC)
                      </a>
                    </td>
                    <td>Conference</td>
                  </tr>

                  <tr>
                    <th scope="row">26</th>
                    <td>
                      <a
                        href="https://iuhoosiers.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Indiana University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://bigten.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Big Ten Conference
                      </a>
                    </td>
                    <td>CWS Appearance</td>
                  </tr>

                  <tr>
                    <th scope="row">27</th>
                    <td>
                      <a
                        href="https://georgiadogs.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Georgia
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.secsports.com/clubhouse/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Southeastern Conference (SEC)
                      </a>
                    </td>
                    <td>CWS Title</td>
                  </tr>

                  <tr>
                    <th scope="row">28</th>
                    <td>
                      <a
                        href="https://fightingillini.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Illinois
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://bigten.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Big Ten Conference
                      </a>
                    </td>
                    <td>Super Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">29</th>
                    <td>
                      <a
                        href="https://gojsutigers.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Jackson State College
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://swac.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Southwestern Athletic Conference (SWAC)
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">30</th>
                    <td>
                      <a
                        href="https://jmusports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        James Madison University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://sunbeltsports.org/standings.aspx?path=baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sunbelt Conference
                      </a>
                    </td>
                    <td>CWS Appearance</td>
                  </tr>

                  <tr>
                    <th scope="row">31</th>
                    <td>
                      <a
                        href="https://kentstatesports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Kent State
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://getsomemaction.com/sports/baseballl"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mid-American Conference (MAC)
                      </a>
                    </td>
                    <td>CWS Appearance</td>
                  </tr>

                  <tr>
                    <th scope="row">32</th>
                    <td>
                      <a
                        href="https://lsusports.net/sports/bsb/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LSU
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.secsports.com/clubhouse/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Southeastern Conference (SEC)
                      </a>
                    </td>
                    <td>6 CWS Appearances, 1 CWS Title</td>
                  </tr>

                  <tr>
                    <th scope="row">33</th>
                    <td>
                      <a
                        href="https://goredfoxes.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Marist
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://maacsports.com/tournaments/?id=1675"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Metro Atlantic Athletic Conference (MAAC)
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">34</th>
                    <td>
                      <a
                        href="https://umterps.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Maryland
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://bigten.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Big Ten Conference
                      </a>
                    </td>
                    <td>Super Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">35</th>
                    <td>
                      <a
                        href="https://umeshawksports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Maryland Eastern Shore
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://meacsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mid-Eastern Athletic Conference
                      </a>
                    </td>
                    <td>Conference</td>
                  </tr>

                  <tr>
                    <th scope="row">36</th>
                    <td>
                      <a
                        href="https://gopack.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        NC State
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://theacc.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atlantic Coast Conference (ACC)
                      </a>
                    </td>
                    <td>3 CWS Appearances</td>
                  </tr>

                  <tr>
                    <th scope="row">37</th>
                    <td>
                      <a
                        href="https://unoprivateers.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        New Orleans
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.southland.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Southland Conference
                      </a>
                    </td>
                    <td>CWS Appearance</td>
                  </tr>

                  <tr>
                    <th scope="row">38</th>
                    <td>
                      <a
                        href="https://odusports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Old Dominion
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://sunbeltsports.org/standings.aspx?path=baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sunbelt Conference
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">39</th>
                    <td>
                      <a
                        href="https://gopsusports.com/sports/baseball/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Penn State University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://bigten.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Big Ten Conference
                      </a>
                    </td>
                    <td>5 CWS Appearances</td>
                  </tr>

                  <tr>
                    <th scope="row">40</th>
                    <td>
                      <a
                        href="https://goprincetontigers.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Princeton University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://ivyleague.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ivy League
                      </a>
                    </td>
                    <td>CWS Appearance</td>
                  </tr>

                  <tr>
                    <th scope="row">41</th>
                    <td>
                      <a
                        href="https://radfordathletics.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Radford University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://bigsouthsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Big South Conference
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">42</th>
                    <td>
                      <a
                        href="https://gojagsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Southern University
                      </a>
                    </td>
                    <td>
                      <a
                        href="Southwestern Athletic Conference (SWAC)"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Southwestern Athletic Conference (SWAC)
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">43</th>
                    <td>
                      <a
                        href="https://gobonnies.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        St. Bonaventure
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://atlantic10.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atlantic 10 Conference
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">44</th>
                    <td>
                      <a
                        href="https://gohatters.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Stetson University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://asunsports.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atlantic Sun Conference (ASUN)
                      </a>
                    </td>
                    <td>Super Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">45</th>
                    <td>
                      <a
                        href="https://www.ttusports.com/sports/bsb/index"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tennessee Tech
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://ovcsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ohio Valley Conference (OVC)
                      </a>
                    </td>
                    <td>Super Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">46</th>
                    <td>
                      <a
                        href="https://utrockets.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Toledo
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://getsomemaction.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mid-American Conference (MAC)
                      </a>
                    </td>
                    <td>Conference</td>
                  </tr>

                  <tr>
                    <th scope="row">47</th>
                    <td>
                      <a
                        href="https://towsontigers.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Towson State University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://caasports.com/tournaments/?id=202"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Colonial Athletic Association (CAA)
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">48</th>
                    <td>
                      <a
                        href="https://umbcretrievers.com/sports/baseball/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        UMBC
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://americaeast.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        America East Conference
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">49</th>
                    <td>
                      <a
                        href="https://navysports.com/sports/baseball/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        U.S. Naval Academy
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://patriotleague.org/sports/baseb"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Patriot League
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">50</th>
                    <td>
                      <a
                        href="https://virginiasports.com/sports/baseball/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Virginia
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://theacc.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atlantic Coast Conference (ACC)
                      </a>
                    </td>
                    <td>CWS Title</td>
                  </tr>

                  <tr>
                    <th scope="row">51</th>
                    <td>
                      <a
                        href="https://vcuathletics.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Virginia Commonwealth University
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://atlantic10.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atlantic 10 Conference
                      </a>
                    </td>
                    <td>Super Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">52</th>
                    <td>
                      <a
                        href="https://hokiesports.com/sports/baseball/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Virginia Tech
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://theacc.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Atlantic Coast Conference (ACC)
                      </a>
                    </td>
                    <td>Super Regional</td>
                  </tr>

                  <tr>
                    <th scope="row">53</th>
                    <td>
                      <a
                        href="https://wagnerathletics.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Wagner
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://northeastconference.org/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Northeast Conference (NEC)
                      </a>
                    </td>
                    <td>Conference</td>
                  </tr>

                  <tr>
                    <th scope="row">54</th>
                    <td>
                      <a
                        href="https://vmikeydets.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        VMI
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://soconsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Southern Conference (SoCon)
                      </a>
                    </td>
                    <td>Conference</td>
                  </tr>

                  <tr>
                    <th scope="row">55</th>
                    <td>
                      <a
                        href="https://mountathletics.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        West Virginia
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://wvusports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Big Ten Conference
                      </a>
                    </td>
                    <td>Regionals</td>
                  </tr>

                  <tr>
                    <th scope="row">56</th>
                    <td>
                      <a
                        href="https://catamountsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Western Carolina
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://soconsports.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Southern Conference (SoCon)
                      </a>
                    </td>
                    <td>Regional</td>
                  </tr>

                  <tr>
                    <th scope="row">57</th>
                    <td>
                      <a
                        href="https://goxavier.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Xavier
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://www.bigeast.com/sports/baseball"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Big East Conference
                      </a>
                    </td>
                    <td>Regionals</td>
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
          <MDBCol className="col-sm-12 col-md-4 col-lg-4">

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
