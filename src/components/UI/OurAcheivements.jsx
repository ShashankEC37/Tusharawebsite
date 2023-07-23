import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import "../../styles/OurAcheivements.css";
import testmonials from "../../assets/all-images/testmonials.PNG";


const OurAcheivements = () => {


  return (
    <section
    className="about__section"
   
  >
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="about__section-content">
            <h4 className="About__Us">Our Acheivements</h4>
       
            <p className="section__description">
            • Exceeded revenue targets consistently, surpassing expectations.
            </p>
            <p className="section__description">
            • Recognized with prestigious industry awards.
            </p>
            <p className="section__description">
            • Achieved significant project milestones, driving growth.
            </p>
            <p className="section__description">
            • Received quality control award for excellence.
            </p>
            <p className="section__description">
            • Honored with Govt. of India award for MSME.
            </p>
   
   
   
   
            <div className="about__section-item d-flex align-items-center" style={{marginBottom:"40px"}}>
            <button className=" w-50 car__item-btn car__btn-details" >Learn More</button>
            </div>
          </div>
        </Col>

        <Col lg="6" md="6"  >
    
    <div className="about__img">
      <img src={testmonials} alt=""  />
    </div>


  </Col>
      </Row>
    </Container>
  </section>
   
  );
};

export default OurAcheivements;
