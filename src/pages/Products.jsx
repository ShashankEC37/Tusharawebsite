import React, { useState }  from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/products.css"
import compressor from "../assets/all-images/compressor.jpg"
import containers from "../assets/all-images/container.jpg"
import belt from "../assets/all-images/belt-conveyor.jpg"
import elevator from "../assets/all-images/elevator.jpg"

const Products = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: true, // Enable dots
  };
  
  return (
    <Helmet title="Cars">
      
      <CommonSection title="Products" />

      <section style={{backgroundColor:"white"}}>
        <Container>
        <div className="container1">
        <div className="card">
        <div className="imgBx"></div>
        <div className="content">
        <h2>ENCLOSURE FOR PORTABLE POWER COMPRESSOR</h2>
          <p>We specialize in fabricating
sturdy and reliable
enclosures for portable
power compressors.
These enclosures provide
protection, ensuring safe
and efficient operation of
the compressors in various
environments</p>
<a href="#">Read More</a>
        </div>
        </div>

        <div className="card">
        <div className="imgBx">
        <img src={compressor}/>
        </div>
       
        <div className="content">
          <h2>INDUSTRIAL AIR FILTERS, FAN FILTERS</h2>
          <p>Our industrial air filters and
fan filters are designed to
maintain clean and
contaminant-free air in
industrial settings.
These filters effectively
capture particles and ensure
optimal air quality for
enhanced equipment
performance and worker
safety.</p>
<a href="#">Read More</a>
        </div>
        </div>

        <div className="card">
        <div className="imgBx"></div>
        <div className="content">
        <h2>BODY FOR SHOT BLASTING MACHINES</h2>
          <p>We excel in manufacturing
durable bodies for shot
blasting machines. These
robust s provide a stable and
secure framework for shot
blasting operations,
contributing to efficient and
precise surface treatment
processes.</p>
<a href="#">Read More</a>
        </div>
        </div>

        <div className="card">
        <div className="imgBx">
        <img src={containers}/>
        </div>
       
        <div className="content">
          <h2>VARIOUS TYPES OF DIESEL
TANKS WITH LEAK TEST AND
PRESSURE TEST FACILITY</h2>
          <p>Our industrial air filters and
fan filters are designed to
maintain clean and
contaminant-free air in
industrial settings.
These filters effectively
capture particles and ensure
optimal air quality for
enhanced equipment
performance and worker
safety.</p>
<a href="#">Read More</a>
        </div>

        
        </div>

        <div className="card">
        <div className="imgBx">
        <img src={belt}/>
        </div>
       
        <div className="content">
          <h2>CONVEYORS</h2>
          <p>We offer high-quality
conveyors that are designed
to optimize material handling
processes in industrial
environments. Our conveyors
are built to withstand heavy
loads and provide smooth
and efficient movement of
goods or materials, improving
overall productivity.</p>
<a href="#">Read More</a>
        </div>

        
        </div>

        <div className="card">
        <div className="imgBx">
        <img src={elevator}/>
        </div>
       
        <div className="content">
          <h2>ELEVATORS</h2>
          <p>Tushara Industries specializes
in fabricating sturdy and
dependable elevators. These s
provide the necessary
support and stability for
elevators, ensuring safe
vertical transportation in
various commercial and
industrial buildings.</p>
<a href="#">Read More</a>
        </div>

        
        </div>
    </div>

        </Container>
      </section>
    </Helmet>
  );
};

export default Products;
