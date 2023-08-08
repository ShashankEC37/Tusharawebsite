import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import Values from "../components/UI/Values";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";

import OurClients from "../components/UI/OurClients";
import OurAcheivements from "../components/UI/OurAcheivements";
import Whatwedo from "..//components/UI/whatwedo";
import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section"  style={{background:"white"}}>
        <HeroSlider />

     
       
             
            
                <Values />
      </section>
      {/* =========== about section ================ */}

      <AboutSection />
      {/* ========== services section ============ */}
      <section  style={{background:"white"}}>
        <Container>
          <Row>
          <OurAcheivements />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
 
      <Whatwedo />
     
   
      {/* =========== become a driver section ============ */}
    <OurClients />
   

      {/* =========== testimonial section =========== */}
      <section>
   
            

      
      
      </section>

     
    
    </Helmet>
  );
};

export default Home;
