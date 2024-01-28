import React from "react";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";


export default function PlayersDrafted() {
  return (
    <div className="drafted justify-content-around border border-secondary-subtle bg-white">
      <MDBContainer>
        <MDBRow className="p-2">
          <div  className="p-3 text-center bg-danger text-white">
          <h3 className="mt-3">PLAYERS DRAFTED</h3>
          <p>Southern Maryland Baseball Camp Attendees</p>
          </div>
          
          <MDBCol className="p-4" md={6}>
            <MDBContainer className="drafted">
              <MDBTable striped>
                <MDBTableHead style={{ fontSize: "12px", padding: "2rem" }}>
                  <tr>
                    <th scope="col">COUNT</th>
                    <th scope="col">PLAYER</th>
                    <th scope="col">ORGANIZATION</th>
                    <th scope="col">ROUND</th>
                  </tr>
                </MDBTableHead>

                <MDBTableBody style={{ fontSize: "10px" }}>
                  <tr>
                    <th scope="row">1</th>
                    <td>Brett Cecil</td>
                    <td>Toronto Blue Jays</td>
                    <td>1st Round</td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td>Gavin Floyd</td>
                    <td>Philadelphia Phillies </td>
                    <td>1st Round</td>
                  </tr>

                  <tr>
                    <th scope="row">3</th>
                    <td>John McCurdy </td>
                    <td>Oakland Athletics </td>
                    <td>1st Round</td>
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td>Josh Banks</td>
                    <td>Toronto Blue Jays</td>
                    <td>2nd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">5</th>
                    <td>Dominic Rich</td>
                    <td>Toronto Blue Jays</td>
                    <td>2nd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">6</th>
                    <td> Matt Coenen</td>
                    <td>Detroit Tigers</td>
                    <td>2nd Round</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td> Sean Black</td>
                    <td>Washington Nationals</td>
                    <td>2nd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">8</th>
                    <td> Kenny Nelson</td>
                    <td>Atlanta Braves</td>
                    <td>2nd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">9</th>
                    <td>Kenard Jones</td>
                    <td>San Diego Padres</td>
                    <td>3rd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">10</th>
                    <td>Brandon Erbe </td>
                    <td>Baltimore Orioles</td>
                    <td>3rd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">11</th>
                    <td>Jason Jones</td>
                    <td>New York Yankees</td>
                    <td>4th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">12</th>
                    <td>Jeff Baker</td>
                    <td>Colorado Rockies</td>
                    <td>4th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">13</th>
                    <td>Chris Archer</td>
                    <td>Cleveland Indians</td>
                    <td>5th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">14</th>
                    <td>Jason Godin</td>
                    <td> Kansas City Royals </td>
                    <td>5th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">15</th>
                    <td>John Maine</td>
                    <td>Baltimore Orioles</td>
                    <td>6th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">16</th>
                    <td>Ryan Wooley</td>
                    <td>Atlanta Braves</td>
                    <td>6th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">17</th>
                    <td>Julio Mercado </td>
                    <td>Texas Rangers </td>
                    <td>7th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">18</th>
                    <td>Steve Clevenger</td>
                    <td>Chicago Cubs </td>
                    <td>7th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">19</th>
                    <td>Tim Giles </td>
                    <td>Toronto Blue Jays </td>
                    <td>7th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">20</th>
                    <td>Mike O'Conner</td>
                    <td>Montreal Expos</td>
                    <td>7th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">21</th>
                    <td>Juan Piniella </td>
                    <td>Texas Rangers</td>
                    <td>7th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">22</th>
                    <td>Matt Sweeney</td>
                    <td>Los Angeles Angels</td>
                    <td>8th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">23</th>
                    <td>David Reaver </td>
                    <td>New York Mets </td>
                    <td>10th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">24</th>
                    <td> Ryan Wood</td>
                    <td>Kansas City Royals</td>
                    <td>10th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">25</th>
                    <td>Travis Ezi</td>
                    <td>Los Angeles Dodgers</td>
                    <td>11th Round</td>
                  </tr>
                  <tr>
                    <th scope="row">26</th>
                    <td>Guy Smith</td>
                    <td>Milwaukee Brewers</td>
                    <td>11th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">27</th>
                    <td>Kasey Richardson</td>
                    <td>Minnesota Twins</td>
                    <td>11th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">28</th>
                    <td>Phil Atkens</td>
                    <td>Florida Marlins</td>
                    <td>13th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">29</th>
                    <td>Steve Johnson</td>
                    <td>Los Angeles Dodgers</td>
                    <td>13th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">30</th>
                    <td>Nick Adenhart</td>
                    <td>Anahiem Angels</td>
                    <td>14th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">31</th>
                    <td>Mike Ziegler</td>
                    <td>Oakland Athletics</td>
                    <td>14th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">32</th>
                    <td>Jeff Palumbo</td>
                    <td>San Francisco Giants</td>
                    <td>15th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">33</th>
                    <td>Seth Overbey</td>
                    <td>Toronto Blue Jays</td>
                    <td>15th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">34</th>
                    <td>Hector Guadalupe</td>
                    <td>Milwaukee Brewers</td>
                    <td>16th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">35</th>
                    <td>Jason Tourangeau</td>
                    <td>Baltimore Orioles</td>
                    <td>17th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">36</th>
                    <td>Ryan Childs</td>
                    <td>Chicago White Sox</td>
                    <td>17th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">37</th>
                    <td>John Poppert</td>
                    <td>Montreal Expos</td>
                    <td>17th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">38</th>
                    <td>Ryan Dorsey</td>
                    <td>Pittsburgh Pirates</td>
                    <td>18th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">39</th>
                    <td>Brad Edwards </td>
                    <td>Baltimore Orioles</td>
                    <td>18th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">40</th>
                    <td>Byron Binda</td>
                    <td>Colorado Rockies</td>
                    <td>19th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">41</th>
                    <td>Scott Krieger</td>
                    <td>Milwaukee Brewers </td>
                    <td>19th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">42</th>
                    <td>Michael Campbell</td>
                    <td>San Diego Padres</td>
                    <td>20th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">43</th>
                    <td>Brandon Agamennone</td>
                    <td>Montreal Expos</td>
                    <td>20th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">44</th>
                    <td>JD Reichenbach</td>
                    <td>Los Angeles Angels</td>
                    <td>20th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">45</th>
                    <td>Walter Ward</td>
                    <td>Milwaukee Brewers</td>
                    <td>20th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">46</th>
                    <td>Shane Justice</td>
                    <td>Los Angeles Dodgers </td>
                    <td>21st Round</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBContainer>
          </MDBCol>

          <MDBCol className="p-4" md={6}>
            <MDBContainer className="drafted">
              <MDBTable striped>
                <MDBTableHead style={{ fontSize: "12px", padding: "2rem" }}>
                  <tr>
                    <th scope="col">COUNT</th>
                    <th scope="col">PLAYER</th>
                    <th scope="col">ORGANIZATION</th>
                    <th scope="col">ROUND</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody style={{ fontSize: "10px" }}>
                  <tr>
                    <th scope="row">47</th>
                    <td>Michael Floyd</td>
                    <td>Philadelphia Phillies</td>
                    <td>21st Round</td>
                  </tr>

                  <tr>
                    <th scope="row">48</th>
                    <td>Robby Jacobsen</td>
                    <td>Washington Nationals</td>
                    <td>22nd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">49</th>
                    <td>Christopher Fiora</td>
                    <td>St. Louis Cardinals</td>
                    <td>23rd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">50</th>
                    <td>Ryan Harrison</td>
                    <td>Montreal Expos</td>
                    <td>23rd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">51</th>
                    <td>Mike Modica</td>
                    <td>Houston Astros</td>
                    <td>23rd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">52</th>
                    <td>Chris Cooper</td>
                    <td>Cleveland Indians</td>
                    <td>25th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">53</th>
                    <td>Josh Squatrito</td>
                    <td>St. Louis Cardinals</td>
                    <td>25th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">54</th>
                    <td>Joey Hammond</td>
                    <td>Baltimore Orioles</td>
                    <td>25th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">55</th>
                    <td>Justin Moore</td>
                    <td>Baltimore Orioles</td>
                    <td>26th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">56</th>
                    <td>Cody Wargo</td>
                    <td>Baltimore Orioles</td>
                    <td>27th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">57</th>
                    <td>Ryan Roberson</td>
                    <td>Detroit Tigers</td>
                    <td>30th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">58</th>
                    <td>Chad Kerfoot </td>
                    <td>Oakland Athletics</td>
                    <td>30th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">59</th>
                    <td>Jon Kibler</td>
                    <td>Detroit Tigers</td>
                    <td>30th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">60</th>
                    <td>Tyler Young</td>
                    <td>Baltimore Orioles</td>
                    <td>30th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">61</th>
                    <td>Matt Cooksey</td>
                    <td>Toronto Blue Jays</td>
                    <td>32th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">62</th>
                    <td>Brian Baugher </td>
                    <td>New York Mets </td>
                    <td>34th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">63</th>
                    <td>Robby Harris</td>
                    <td>Los Angeles Angels</td>
                    <td>35th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">64</th>
                    <td>Cory Page</td>
                    <td>Los Angeles Angels</td>
                    <td>38th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">65</th>
                    <td>Dana Arrowood</td>
                    <td>Detroit Tigers </td>
                    <td>38th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">66</th>
                    <td>Joe Yarmel</td>
                    <td>Baltimore Orioles</td>
                    <td>39th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">67</th>
                    <td>Neil Davis</td>
                    <td>Baltimore Orioles</td>
                    <td>39th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">68</th>
                    <td>Jesse Schoendienst</td>
                    <td>St. Louis Cardinals </td>
                    <td>40th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">69</th>
                    <td>Joe Kline</td>
                    <td>Los Angeles Angels</td>
                    <td>41st Round</td>
                  </tr>

                  <tr>
                    <th scope="row">70</th>
                    <td>Brian Hobbs</td>
                    <td>Los Angeles Angels</td>
                    <td>41st Round</td>
                  </tr>

                  <tr>
                    <th scope="row">71</th>
                    <td>Justin Nash</td>
                    <td>New York Yankees </td>
                    <td>42nd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">72</th>
                    <td>Joe Kemp</td>
                    <td>Texas Rangers</td>
                    <td>42nd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">73</th>
                    <td>Nick Vitielliss</td>
                    <td>Baltimore Orioles</td>
                    <td>42nd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">74</th>
                    <td>Daniel Cropper</td>
                    <td>Washington Nationals</td>
                    <td>42nd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">75</th>
                    <td>Josh Conway</td>
                    <td>Atlanta Braves</td>
                    <td>42nd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">76</th>
                    <td>Joe Velleggie</td>
                    <td>Baltimore Orioles</td>
                    <td>42nd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">77</th>
                    <td>Brian Brent</td>
                    <td>Baltimore Orioles</td>
                    <td>43rd Round</td>
                  </tr>

                  <tr>
                    <th scope="row">78</th>
                    <td>Kelly Sweppenhiser</td>
                    <td>Toronto Blue Jays</td>
                    <td>44th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">79</th>
                    <td>Alex Turner </td>
                    <td>Baltimore Orioles</td>
                    <td> 46th Round</td>
                  </tr>

                  <MDBCol></MDBCol>

                  <tr>
                    <th scope="row">80</th>
                    <td>Michael Gioioso</td>
                    <td>Baltimore Orioles</td>
                    <td> 50th Round</td>
                  </tr>

                  <tr>
                    <th scope="row">81</th>
                    <td>Scott Swinson</td>
                    <td>Baltimore Orioles</td>
                    <td>46th Round</td>
                  </tr>

                  {/*Free agent*/}
                  <tr>
                    <th scope="row">82</th>
                    <td>Joe Michalski</td>
                    <td>Baltimore Orioles</td>
                    <td>Free Agent</td>
                  </tr>

                  <tr>
                    <th scope="row">83</th>
                    <td>Greg Filson</td>
                    <td>Boston Red Sox</td>
                    <td>Free Agent</td>
                  </tr>

                  <tr>
                    <th scope="row">84</th>
                    <td>Jason Maxey </td>
                    <td>Baltimore Orioles</td>
                    <td>Free Agent</td>
                  </tr>

                  <tr>
                    <th scope="row">86</th>
                    <td>John Poss</td>
                    <td>Baltimore Orioles</td>
                    <td>Free Agent</td>
                  </tr>

                  <tr>
                    <th scope="row">86</th>
                    <td>Matt Pyzik</td>
                    <td>Atlanta Braves</td>
                    <td>Free Agent</td>
                  </tr>

                  <tr>
                    <th scope="row">87</th>
                    <td>Robin Davis</td>
                    <td>Milwaukee Brewers </td>
                    <td>Free Agent</td>
                  </tr>

                  <tr>
                    <th scope="row">88</th>
                    <td>Ryan Baker</td>
                    <td>Atlanta Braves</td>
                    <td>Free Agent</td>
                  </tr>

                  <tr>
                    <th scope="row">89</th>
                    <td>Scott McKee</td>
                    <td>Chicago White Sox</td>
                    <td>Free Agent</td>
                  </tr>

                  <tr>
                    <th scope="row">90</th>
                    <td>Ryan Dacy</td>
                    <td>Los Angeles Dodgers </td>
                    <td>Free Agent</td>
                  </tr>

                  <tr>
                    <th scope="row">91</th>
                    <td>Rolando Lozana </td>
                    <td>Arizona Diamondbacks </td>
                    <td>Free Agent</td>
                  </tr>

                  <tr>
                    <th scope="row">92</th>
                    <td>Brian Brent</td>
                    <td>Baltimore Orioles</td>
                    <td>Free Agent</td>
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
