import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "../../styles/about-section.css";
import about from "../../assets/all-images/welding.png";


const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "50px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="About__Us">About Us</h4>
              <h2 className="section__title"> Manufacturer of MS Laser Cutting Piece</h2>
              <p className="section__description">
              With a rich history and unwavering commitment to excellence, Tushara Industries stands as a leading name in the field of industrial fabrication and equipment manufacturing. 

We were originally established as Sri Lakshmi Engineering Works in 2005. 

we rebranded ourselves as Tushara Industries in 2011 to reflect our growth and expanding range of services.
              </p>
              <p className="section__description">
              We were originally established as Sri Lakshmi Engineering Works in 2005. 
              </p>
           

              <div class="button-container">
    <button className="Know__More">
    <a href="/about" className="know">
    Know More
  </a>
    </button>
    </div>
            </div>
          </Col>

          <Col lg="6" md="6"  >
      <div className="about__img">
        <img src={about} alt=""  />
      </div>
    </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
