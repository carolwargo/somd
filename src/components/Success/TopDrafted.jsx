import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

import Gavin from '../../assets/images/Success/Gavin.png'
import Brett from '../../assets/images/Success/Brett.png'
import John from '../../assets/images/Success/John.png'
import Steve from '../../assets/images/Success/Steve.png'
import Kenard from '../../assets/images/Success/Kenard.png'
import Brandon from '../../assets/images/Success/Brandon.png'
import Chris from '../../assets/images/Success/Chris.png'
import Jeff from '../../assets/images/Success/Jeff.png'
import Josh from '../../assets/images/Success/Josh.png'
import JeffPal from '../../assets/images/Success/JeffPal.png'
import NickA from '../../assets/images/Success/NickA.png'  
import Johnny from '../../assets/images/Success/Johnny.png'
import BobbySt from '../../assets/images/Success/BobbySt.png'
import Guy from '../../assets/images/Success/Guy.png'
import Ryan from '../../assets/images/Success/Ryan.png'



export default function TopDrafted() {
  return (
    <main>
    <div className='container top-drafted justify-content-evenly bg-secondary px-2'>
       
      
        <div className='Title'>
          <br/>
        <h3>NEXT LEVEL SUCCESS</h3>
        <p>Success is not just defined by draft status, "next level success" comes in many forms. See some our former SOMD Baseball Camp players that made a career of it.</p>
        </div>
        <br/>
    <MDBRow >
    <MDBCol className='col-sm-12 col-md-6 col-lg-6 pb-3'>
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src={Brett}
          alt='brett-cecil'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>     <a
                          href="https://www.mlb.com/player/brett-cecil-446399"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Brett Cecil
                        </a>
                        </MDBCardTitle>
          <MDBCardText style={{fontSize:'11px'}}>
            1st Round- Toronto Blue Jays
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
   
    <MDBCol className='col-sm-12 col-md-6 col-lg-6 pb-3'>
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
         src={Gavin} 
         alt='gavin-floyd'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}><a
                          href="https://www.mlb.com/player/gavin-floyd-425856"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Gavin Floyd
                        </a>
                        </MDBCardTitle>
          <MDBCardText style={{fontSize:'11px'}}> 1st Round- Philadelphia Phillies</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>


    </MDBRow>
<br/>

    <MDBRow>
  
    <MDBCol className='col-sm-12 col-md-6 col-lg-6 pb-3'>
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={John} 
            alt='john-mccurdy'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>John McCurdy</MDBCardTitle>
            <MDBCardText style={{fontSize:'11px'}}>
            1st Round- Oakland Athletics
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    

      
    <MDBCol className='flex-col pb-3' md="6">
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={Steve} 
            alt='steve-clevenger'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>Steve Clevenger</MDBCardTitle>
            <MDBCardText style={{fontSize:'11px'}}>7th Round- Chicago Cubs</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </MDBRow>
      <br/>
      <MDBRow>
      <MDBCol className='flex-col pb-3' md="6">
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={Kenard} 
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>Kenard Jones</MDBCardTitle>
            <MDBCardText style={{fontSize:'11px'}}>
            3rd Round- San Diego Padres
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='flex-col pb-3' md="6">
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={Brandon}
            alt='brandon-erbe'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>Brandon Erbe</MDBCardTitle>
            <MDBCardText style={{fontSize:'11px'}}>3rd Round- Baltimore Orioles</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <br/>
    <MDBRow >
      <MDBCol className='flex-col pb-3' md="6">
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={Chris}
            alt='chris-archer'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>Chris Archer</MDBCardTitle>
            <MDBCardText style={{fontSize:'11px'}}>
            5th Round- Cleveland Indians
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='flex-col pb-3' md="6">
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={Jeff}
            alt='jeff-baker'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>Jeff Baker</MDBCardTitle>
            <MDBCardText style={{fontSize:'11px'}}>4th Round- Colorado Rockies</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <br/>
    <MDBRow>
    <MDBCol className='flex-col pb-3' md="6">
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={Josh}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>Josh Banks</MDBCardTitle>
            <MDBCardText style={{fontSize:'11px'}}>
            2nd Round- Toronto Blue Jays
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    <MDBCol className='flex-col pb-3' md="6">
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src={NickA}
          alt='nick-adenhart'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>Nick Adenhart</MDBCardTitle>
          <MDBCardText style={{fontSize:'11px'}}>
            14th Round- Anaheim Angels
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBRow>
    <br/>
    <MDBRow>
    <MDBCol className='flex-col pb-3' md="6">
         <MDBCard className='h-100 top-drafted-card'>
          <MDBCardImage
            src={JeffPal}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>Jeff Palumbo</MDBCardTitle>
            <MDBCardText style={{fontSize:'11px'}}>15th Round- Assistant Head Coach ECU</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <br/>
    <MDBCol className='flex-col pb-3' md="6">
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src={Johnny}
          alt='john-poss'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>Johnny Poss</MDBCardTitle>
          <MDBCardText style={{fontSize:'11px'}}> Baltimore Orioles- Assistant Coach UMD</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
  <br/>
  <MDBRow>
    <MDBCol className='flex-col pb-3' md="6">
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src={BobbySt}
          alt='bobby-stpierre'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>Bobby St. Pierre</MDBCardTitle>
          <MDBCardText style={{fontSize:'11px'}}>
          Scouting Supervisor-Houston Astros
            Pitching Analysis 
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <br/>
    <MDBCol className='flex-col pb-3' md="6">
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src={Guy}
          alt='...'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>Guy Smith</MDBCardTitle>
          <MDBCardText style={{fontSize:'11px'}}> 11th Round- Owner "5-Tool", 26yr Tenure Coach</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBRow>
    <br/>
    <MDBRow>
    <MDBCol className='flex-col pb-3' md="6">
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src={Ryan}
          alt='ryan-terrill'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>Ryan Terrill</MDBCardTitle>
          <MDBCardText style={{fontSize:'11px'}}> George Mason- Asstitant Coach/Recruiting Coordinator</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <br/>
    <MDBCol className='flex-col pb-3' md="6">
       <MDBCard className='h-100 top-drafted-card'>
        <MDBCardImage
          src={Ryan}
          alt='ryan-terrill'
          position='top'
        />
        <MDBCardBody>
          <MDBCardTitle style={{fontSize:'12px', fontFamily:'sans-serif', fontWeight:'bold'}}>Ryan Terrill</MDBCardTitle>
          <MDBCardText style={{fontSize:'11px'}}> George Mason- Asstitant Coach/Recruiting Coordinator</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBRow>
    
    </div>
    </main>
  );
}