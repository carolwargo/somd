import React, { useState } from "react";
import ImageModal from "../ImageModal/ImageModal.jsx";


import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
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
      <div className="home-testimonial-container bg-secondary-subtle p-2">
        <div className="home-testimonial-intro text-center p-5">
          <p className="m-0">SEE WHAT PEOPLE HAVE TO SAY ABOUT...</p>
          <h2>WHAT PEOPLE HAVE TO SAY ABOUT SOMD BASEBALL!</h2>
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
          className="row d-flex px-5 text-white text-center position-relative"
          id="home-testimonials"
        >
              <div
        className="col-sm-12 col-md-4 col-lg-4"
        id="home-testimonials-floyd"
      >
        <div className="floyd-testimonial-image">
          <img
            src={Floyd}
            alt="Floyd"
            className="clickable-image"
            style={{ width: "100%", height: "auto" }}
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
            id="home-testimonials-walter"
            className="col-sm-12 col-md-4 col-lg-4"
          >
            <div className="walter-testimonial-image">
            <img
              src={Walter}
              alt="Walter"
              className="clickable-image"
              style={{ width: "100%", height: "auto" }}
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
            id="home-testimonials-oconnor"
            className="col-sm-12 col-md-4 col-lg-4"
          >
            <div className="oconnor-testimonial-image">
            <img
              src={Oconnor}
              alt="Oconnor"
              className="clickable-image"
              style={{ width: "100%", height: "auto" }}
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
        <div className='link-testimonials-page text-center'>
        <p className=' text-center'> Want to see more of what past participants have to say about the impact Southern Maryland Baseball Camps.
        </p>
               <p>
                <Link to='/testimonials'
                className='px-2 align-items-bottom text-center' 
                style={{fontSize: '12px'}} >
                  View more testimonial statements 
                  <FaLongArrowAltRight/> 
                    </Link>
                    </p> 
        </div>
       
      </div>
      <br></br>
    </main>
  );
};

export default TestimonialsModal;
