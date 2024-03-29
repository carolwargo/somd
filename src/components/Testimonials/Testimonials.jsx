import React, { useState } from "react";
import ImageModal from "../ImageModal/ImageModal.jsx";


import { HiMagnifyingGlassPlus } from "react-icons/hi2";

import Floyd from "../../assets/images/Testimonials/Floyd.png";
import Oconnor from "../../assets/images/Testimonials/Oconnor.png";
import Walter from "../../assets/images/Testimonials/Walter.png";

const TestimonialsModal = () => {
  const [floydModal, setFloydModal] = useState(false);
  const [walterModal, setWalterModal] = useState(false);
  const [oconnorModal, setOconnorModal] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleModalOpen = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
    setFloydModal(false);
    setWalterModal(false);
    setOconnorModal(false);
  };

  return (
    <main>
      <div className="container-home-testimonial"
      style={{fontFamily:'sans-serif'}}>
      <div className="row-home-testimonial justify-content-center align-items-center">
      <div className="col-sm-12 col-md-12 col-lg-12" id="home-testimonial">
        <div className="home-testimonial-intro ">
          <p className="m-0">SEE WHAT PEOPLE HAVE TO SAY ABOUT...</p>
         
          <h2 className="text-danger">SOMD BASEBALL TESTIMONIALS</h2>
          <br></br>
          <p style={{fontFamily:'sans-serif', fontSize:'14px'}}>
            "Discover the stories that define our success. Hear from those who
            have experienced Southern Maryland Baseball Camp firsthand. These
            testimonials reflect the impact we've had on individuals' lives and
            showcaseS the quality of the athlete developed through our ability
            to offer opportunity, through exposure. Let their words paint a
            picture of the exceptional opportunities we strive to create."
          </p>
        </div>
        
        </div>
        </div>
        <br></br>
        <div
          className="row d-flex text-white text-center position-relative"
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
            className="clickable-image border border-light"
            style={{ width: "100%", height: "auto"}}
            onClick={() => {
              handleModalOpen(Floyd);
              setFloydModal(true);
            }}
          />
          <br></br>
          <br></br>
          <p style={{ fontSize: "10px"}}>
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
              className="clickable-image border border-light"
              style={{ width: "100%", height: "auto"}}
              onClick={() => {
                handleModalOpen(Walter);
                setWalterModal(true);
            }}
            />
         <br></br>
            <br></br>
              <p style={{ fontSize: "10px"}}>
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
              className="clickable-image border border-light"
              style={{ width: "100%", height: "auto"}}
              onClick={() => {
                handleModalOpen(Oconnor);
                setOconnorModal(true);
              }}
            />
          <br></br>
            <br></br>
              <p style={{ fontSize: "10px" }}>
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
    
       
      </div>
     
    </main>
  );
};

export default TestimonialsModal;
