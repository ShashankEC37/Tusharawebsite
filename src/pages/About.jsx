import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { Container } from "reactstrap";
import vision from "../assets/all-images/vision.png"
import OurMembers from "../components/UI/OurMembers";
import about from "../assets/all-images/welding.png";
import "../styles/about.css";
import integrety from "../assets/all-images/integraty.jpeg";
import honesty from "../assets/all-images/honesty.png";
import accountability from "../assets/all-images/accountability.png"
import ContinousGrowth from "../assets/all-images/Continous Growth.PNG"
import OurExperience from "../components/UI/OurExperience";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const About = () => {
  
  return (
   <>
    <Helmet title="Cars">
      
      <CommonSection title="About Us" />
   
      <section className="about__page-section1">
      <div className='container1' style={{padding:"0%"}}>
       
        <Row  style={{paddingRight:"10%", paddingLeft:"10%"}}>
          <Col lg="4" md="4">
            
              <img src={vision} alt="" style={{height:"250px" , width:"250px"}} />
         
          </Col>
          <Col lg="8" md="8">
          <h4 className="Values" style={{ textAlign: "center"  }}>Vision</h4>
            <div className="about__section-content">
            
              <p className="Vision" >
              To be the industry's leading provider of precision laser cutting solutions, driven by innovation, cutting-edge technology, and an unwavering commitment to quality. We aim to revolutionize metal fabrication and empower our clients with exceptional products, while fostering sustainable growth and making a positive impact on the global manufacturing landscape
              </p>
              <div className="about__section-item d-flex align-items-center" style={{ marginBottom: '40px' }}></div>
            </div>
          </Col>
        </Row>
      </div>
    </section>

      <section className="about__page-section2">
     
    
        <Container>
        <h2 className="What__we__do">Our Values</h2>
        <div class="cards-container">
    <div class="card">
      <img src={integrety} alt="Image 1"/>
      <p class="card-text">Integraty</p>
    </div>
    <div class="card">
      <img src={honesty}  alt="Image 2"/>
      <p class="card-text">Honesty</p>
    </div>
    <div class="card">
      <img src={accountability}  alt="Image 3"/>
      <p class="card-text">Accountability</p>
    </div>
    <div class="card">
      <img src={ContinousGrowth}  alt="Image 4"/>
      <p class="card-text">Continous Growth</p>
    </div>  
   
    </div>
  
    </Container>
  
    </section>
    
    <section
      className="about__section"
      style={{backgroundColor:"white"}}
    >
      <Container >
        <Row >
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="About__Us">About Us</h4>
           
              <p className="description">
              With an impressive history and steadfast dedication to excellence, Expanding our capabilities, we now provide high-precision laser cutting services for various metals. Utilizing advanced laser cutting machines and skilled technicians, we deliver intricate and precise metal cutting solutions. Our expertise covers a wide range of metals, including stainless steel, aluminum, copper, and brass. Laser cutting ensures clean edges, minimizes material waste, and significantly reduces production time. 
              </p>
              <p className="description">
              We were originally established as Sri Lakshmi Engineering Works in 2005. 
              </p>
           

              <div className="about__section-item d-flex align-items-center" style={{marginBottom:"40px", alignContent:"center"}}>
              <div class="button-container">
    <button className="Know__More" style={{ backgroundColor:'#000d6b', color: 'white', alignContent:"center"}}>
      Know More
    </button>
    </div>
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


    <OurExperience />

    <OurMembers />
    </Helmet>
    </>
  );
};

export default About;
