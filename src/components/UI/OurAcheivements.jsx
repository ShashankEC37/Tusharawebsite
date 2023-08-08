import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

import "../../styles/OurAcheivements.css";
import testmonials from "../../assets/all-images/testmonials.PNG";


const OurAcheivements = () => {


  return (
   
    <section
    className="ouracheivements"
   
  >
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="about__section-content">
            <h4 className="About__Us">Our Acheivements</h4>
       
            <p className="acheivement_description">
            • Exceeded revenue targets consistently, surpassing expectations.
            </p>
            <p className="acheivement_description">
            • Recognized with prestigious industry awards.
            </p>
            <p className="acheivement_description">
            • Achieved significant project milestones, driving growth.
            </p>
            <p className="acheivement_description">
            • Received quality control award for excellence.
            </p>
            <p className="acheivement_description">
            • Honored with Govt. of India award for MSME.
            </p>
   
   
   
   
            <div class="button-container">
            <button className="Know__More" style={{ backgroundColor:'#000d6b', color: 'white'}}>
      Know More
    </button>
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
