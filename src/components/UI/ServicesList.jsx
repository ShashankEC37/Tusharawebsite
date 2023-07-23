import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "../../styles/services-list.css";
import integrety from "../../assets/all-images/integrity.png"

const ServicesList = () => {
  return (
    <Container>
    <h4 className="Values">Company Philosophy</h4>
  <Row>
  <Col lg="6" md="6"  >
      <div className="about__img">
         <img src={integrety} alt=""  />
      </div>
    </Col>
  <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="About__Us">Integraty</h4>
              <p className="Integrity">
              Integrity is the bedrock of our company's identity. We firmly believe in conducting business with unwavering honesty and transparency, fostering an environment of trust and accountability. Our commitment to ethical practices, respect for others, and dedication to continuous improvement define our purpose and drive us towards excellence. With a customer-centric approach and a focus on social responsibility, we aim to make a positive impact on the world while upholding the values that define us.
              </p>
          
      
           

              <div className="about__section-item d-flex align-items-center" style={{marginBottom:"40px"}}>
           
              </div>
            </div>
          </Col>

          
    </Row>
  </Container>
  );
};



export default ServicesList;
