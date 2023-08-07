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
              With an impressive history and steadfast dedication to excellence, Expanding our capabilities, we now provide high-precision laser cutting services for various metals. Utilizing advanced laser cutting machines and skilled technicians, we deliver intricate and precise metal cutting solutions. Our expertise covers a wide range of metals, including stainless steel, aluminum, copper, and brass. Laser cutting ensures clean edges, minimizes material waste, and significantly reduces production time. 
              </p>
              <p className="section__description">
              We were originally established as Sri Lakshmi Engineering Works in 2005. 
              </p>
           

              <div class="button-container">
    <button className="Know__More">
      Know More
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
