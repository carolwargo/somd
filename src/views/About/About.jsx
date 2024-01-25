import React, { useState } from "react";
import ImageModal from "../../components/ImageModal/ImageModal.jsx";

import { HiMagnifyingGlassPlus } from "react-icons/hi2";

import Floyd from "../../assets/images/Testimonials/Floyd.png";
import Oconnor from "../../assets/images/Testimonials/Oconnor.png";
import Walter from "../../assets/images/Testimonials/Walter.png";

import Player1 from "../../assets/images/Testimonials/Player1.png";
import Player2 from "../../assets/images/Testimonials/Player2.png";
import Parent1 from "../../assets/images/Testimonials/Parent1.png";
import Parent2 from "../../assets/images/Testimonials/Parent2.png";
import Parent3 from "../../assets/images/Testimonials/Parent3.png";
import Parent4 from "../../assets/images/Testimonials/Parent4.png";


const About = () => {
  const [floydModal, setFloydModal] = useState(false);
  const [walterModal, setWalterModal] = useState(false);
  const [oconnorModal, setOconnorModal] = useState(false);

  const [player1Modal, setPlayer1Modal] = useState(false);
    const [player2Modal, setPlayer2Modal] = useState(false);
    const [parent1Modal, setParent1Modal] = useState(false);
    const [parent2Modal, setParent2Modal] = useState(false);
    const [parent3Modal, setParent3Modal] = useState(false);
    const [parent4Modal, setParent4Modal] = useState(false);


  const [selectedImage, setSelectedImage] = useState(null);

  const handleModalOpen = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
    setFloydModal(false);
    setWalterModal(false);
    setOconnorModal(false);
    setPlayer1Modal(false);
    setPlayer2Modal(false);
    setParent1Modal(false);
    setParent2Modal(false);
    setParent3Modal(false);
    setParent4Modal(false);
  };

  return (
    <main className="bg-secondary-subtle">
     
      <h1>About</h1>
      <div className="row">
         {/* Who We Are col & section. */}
      <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center">
      <section id="who-we-are">
       <div className="about-who-we-are-intro text-center p-2">
       <h6 className="testimonials">HOW IT ALL STARTED...</h6>
         <h2 className="about-who-we-are-description text-danger">WHO WE ARE...</h2>
         <p>
         It all began 30 years because Jerry Pop saw the need and decided to act on it. First camp had 24 attendees and a handful of coaches in a park.... blah, blah, blah..</p>
       It grew to as many as 300 high school player participants, receiving instruction, exposure, and sharing of the intimate details of what it takes to play at the next level from the top programs in the country.
       </div>
     </section>
      </div>
 {/* Who We Are col & section. */}
      <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center">
      <section id="what-we-do">
       <div className="about-what-we-do-intro text-center p-2">
       <h6 className="testimonials">PROVIDING EXPOSURE TO STUDENT-ATHLETES...</h6>
         
         <h2 className="about-what-we-do-description text-danger">WHAT WE DO...</h2>
         <p>
            How the camp has evolved over the years to include the top programs in the country, and how we have been able to provide exposure to student-athletes who would not have had the opportunity otherwise. 
            What can they expect to walk away with... participants & parent.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi voluptatum explicabo provident excepturi, dolorum aperiam, ullam corrupti enim deleniti atque porro earum commodi consectetur sit voluptate facere repellat delectus.
         </p>
       </div>
     </section>
      </div>
 {/* Who We Are col & section. */}
      <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center">
      <section id="why-we-do-it">
       <div className="about-why-we-do-it-intro text-center p-2">
       <h6 className="testimonials">FOR THE LOVE OF THE GAME...</h6>
         
         <h2 className="about-why-we-do-it-description text-danger">WHY WE DO IT...</h2>
         <p>
              What drives us to do what we do... for the love of the game, for the love of the kids, for the love of the competition and for the love of assisting a player, find their perfect fit as they move into adulthood.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi voluptatum explicabo provident excepturi, dolorum aperiam, ullam corrupti enim deleniti atque porro earum commodi consectetur sit voluptate facere repellat delectus.
         </p>
       </div>
     </section>
      </div>

      </div>
     
      
      <br></br>
      <br></br>
      {/* Our Values section. */}
      <section id="about-our-values">
        <div className="about-our-values-intro text-center p-2">
        <h6 className="testimonials">PRINCIPLES & BELIEFS THAT SHAPE OUR IDENITY....</h6>
          
          <h2 className="about-our-values-description text-danger">WHY WE DO IT...</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi voluptatum explicabo provident excepturi, dolorum aperiam, ullam corrupti enim deleniti atque porro earum commodi consectetur sit voluptate facere repellat delectus.
          </p>
        </div>
      </section>
      <br></br>
      <br></br>


      {/* Testimonials section. */}
      <section id="testimonials">
      <div className="home-testimonial-container bg-secondary-subtle p-4">
        <div className="home-testimonial-intro text-center p-2">
        <h6 className="testimonials">SEE WHAT PEOPLE HAVE TO SAY ABOUT...</h6>
          
          <h2 className="text-danger">TESTIMONIALS</h2>
          <p>
            "Discover the stories that define our success. Hear from those who
            have experienced Southern Maryland Baseball Camp firsthand. These
            testimonials reflect the impact we've had on individuals' lives and
            showcaseS the quality of the athlete developed through our ability
            to offer opportunity, through exposure. Let their words paint a
            picture of the exceptional opportunities we strive to create."
          </p>
        </div>
        <div
          className="row d-flex px-4 text-white text-center position-relative"
          id="home-testimonials"
        >
              <div
        className="col-sm-12 col-md-4 col-lg-4"
        id="testimonial-floyd"
      >
        <div className="floyd-testimonial-image">
          <img
            src={Floyd}
            alt="Floyd"
            className="clickable-image"
            style={{ width: "90%", height: "auto" }}
            onClick={() => {
              handleModalOpen(Floyd);
              setFloydModal(true);
            }}
          />
          <p style={{ fontSize: "10px", color: "blue" }}>
            <HiMagnifyingGlassPlus /> click image to enlarge
          </p>

          {/* ImageModal for Floyd Image */}
          <ImageModal
            showModal={floydModal}
            handleModalClose={handleModalClose}
            imageSrc={selectedImage}
            altText="Enlarged Floyd Image"
            title="close"
          />
        </div>
      </div>

          <div
            id="testimonial-walter"
            className="col-sm-12 col-md-4 col-lg-4"
          >
            <div className="walter-testimonial-image">
            <img
              src={Walter}
              alt="Walter"
              className="clickable-image"
              style={{ width: "90%", height: "auto" }}
              onClick={() => {
                handleModalOpen(Walter);
                setWalterModal(true);
            }}
            />
              <p style={{ fontSize: "10px", color: "blue" }}>
              <HiMagnifyingGlassPlus /> click image to enlarge
            </p>
            {/* ImageModal for Walter Image */}
            <ImageModal
              showModal={walterModal}
              handleModalClose={handleModalClose}
              imageSrc={selectedImage}
              altText="Enlarged Walter Image"
              title="close"
            />
          </div>
            </div>

          <div
            id="testimonial-oconnor"
            className="col-sm-12 col-md-4 col-lg-4"
          >
            <div className="oconnor-testimonial-image">
            <img
              src={Oconnor}
              alt="Oconnor"
              className="clickable-image"
              style={{ width: "90%", height: "auto" }}
              onClick={() => {
                handleModalOpen(Oconnor);
                setOconnorModal(true);
              }}
            />
              <p style={{ fontSize: "10px", color: "blue" }}>
              <HiMagnifyingGlassPlus /> click image to enlarge
            </p>
            {/* ImageModal for Oconnor Image */}
            <ImageModal
              showModal={oconnorModal}
              handleModalClose={handleModalClose}
              imageSrc={selectedImage}
              altText="Enlarged Oconnor Image"
              title="close"
            />
            </div>
          </div>
        </div>
    
       
      











      <br></br>
      <br></br>
       {/*START OF additional row */}
        <div className="row d-flex justify-content-center align-items-center px-4">
        <h6 className="testimonials text-center text-danger">FROM A PLAYER'S POINT OF VIEW...</h6>
         <br></br>
        {/*START OF additional column 1 */}
       
        <div
            className="col-sm-12 col-md-6 col-lg-6"
            id="additional-testimonials"
          >
             <div className="player-testimonial-image">
              <img
                src={Player1}
                alt="Player1"
                className="clickable-image"
                style={{ width: "100%", height: "auto" }}
                onClick={() => {
                  handleModalOpen(Player1);
                  setPlayer1Modal(true);
                }}
              />
              <p style={{ fontSize: "10px", color: "blue" }}>
                <HiMagnifyingGlassPlus /> click image to enlarge
              </p>
              {/* ImageModal for Player1 Image */}
              <ImageModal
                showModal={player1Modal}
                handleModalClose={handleModalClose}
                imageSrc={selectedImage}
                altText="Enlarged Player1 Image"
                title="close"
              />
            </div>
            <div className="player-testimonial-image">
              <img
                src={Parent1}
                alt="Parent1"
                className="clickable-image"
                style={{ width: "100%", height: "auto" }}
                onClick={() => {
                  handleModalOpen(Parent1);
                  setParent1Modal(true);
                }}
              />
              <p style={{ fontSize: "10px", color: "blue" }}>
                <HiMagnifyingGlassPlus /> click image to enlarge
              </p>
              {/* ImageModal for Parent1 Image */}
              <ImageModal
                showModal={parent1Modal}
                handleModalClose={handleModalClose}
                imageSrc={selectedImage}
                altText="Enlarged Parent1 Image"
                title="close"
              />
            </div>

            <div className="parent-testimonial-image">
              <img
                src={Parent2}
                alt="Parent2"
                className="clickable-image"
                style={{ width: "100%", height: "auto" }}
                onClick={() => {
                  handleModalOpen(Parent2);
                  setParent2Modal(true);
                }}
              />
              <p style={{ fontSize: "10px", color: "blue" }}>
                <HiMagnifyingGlassPlus /> click image to enlarge
              </p>
              {/* ImageModal for Parent2 Image */}
              <ImageModal
                showModal={parent2Modal}
                handleModalClose={handleModalClose}
                imageSrc={selectedImage}
                altText="Enlarged Parent2 Image"
                title="close"
              />
            </div>
            </div>
{/*END OF additional column 1 */}

{/*START OF additional column 2 */}
          <div
            className="col-sm-12 col-md-6 col-lg-6"
            id="additional-testimonials"
          >
            
            <div className="player-testimonial-image">
              <img
                src={Player2}
                alt="Player2"
                className="clickable-image"
                style={{ width: "100%", height: "auto" }}
                onClick={() => {
                  handleModalOpen(Player2);
                  setPlayer2Modal(true);
                }}
              />
              <p style={{ fontSize: "10px", color: "blue" }}>
                <HiMagnifyingGlassPlus /> click image to enlarge
              </p>
              {/* ImageModal for Player2 Image */}
              <ImageModal
                showModal={player2Modal}
                handleModalClose={handleModalClose}
                imageSrc={selectedImage}
                altText="Enlarged Player2 Image"
                title="close"
              />
            </div>

            <div className="parent-testimonial-image">
              <img
                src={Parent3}
                alt="Parent3"
                className="clickable-image"
                style={{ width: "100%", height: "auto" }}
                onClick={() => {
                  handleModalOpen(Parent3);
                  setParent3Modal(true);
                }}
              />
              <p style={{ fontSize: "10px", color: "blue" }}>
                <HiMagnifyingGlassPlus /> click image to enlarge
              </p>
              {/* ImageModal for Parent3 Image */}
              <ImageModal
                showModal={parent3Modal}
                handleModalClose={handleModalClose}
                imageSrc={selectedImage}
                altText="Enlarged Parent3 Image"
                title="close"
              />
            </div>

            <div className="parent-testimonial-image">
              <img
                src={Parent4}
                alt="Parent4"
                className="clickable-image"
                style={{ width: "100%", height: "auto" }}
                onClick={() => {
                  handleModalOpen(Parent4);
                  setParent4Modal(true);
                }}
              />
              <p style={{ fontSize: "10px", color: "blue" }}>
                <HiMagnifyingGlassPlus /> click image to enlarge
              </p>
              {/* ImageModal for Parent4 Image */}
              <ImageModal
                showModal={parent4Modal}
                handleModalClose={handleModalClose}
                imageSrc={selectedImage}
                altText="Enlarged Parent4 Image"
                title="close"
              />
            </div>

          </div>
          {/*END OF additional column 2 */}
        </div>
        {/*END OF additional row*/}
        </div>
      </section>
    </main>
  );
};

export default About;
