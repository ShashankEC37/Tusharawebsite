import React, { useState }  from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/products.css"
import compressor from "../assets/all-images/compressor.jpg"
import containers from "../assets/all-images/container.jpg"
import belt from "../assets/all-images/belt-conveyor.jpg"
import elevator from "../assets/all-images/elevator.jpg";
import aircompressor from "../assets/all-images/air compressor.jpg"
import shortblaster from "../assets/all-images/shot blaster.jpg"

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

      <section style={{backgroundColor:"white" ,  margin:"0"}}>
        <Container>
        <div className="container1" >
        <div className="card">
        <div className="imgBx">
        <img src={aircompressor}/>
        </div>
        <div className="content">
        <h2>Enclosure for portable power compressor</h2>
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
          <h2>Industrial air filters, fans filters</h2>
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
        <img src={shortblaster}/>
        </div>
        <div className="content">
        <h2>Body for shot blasting machines</h2>
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
          <h2>Various types of diesel
tanks with leak test and
pressure test facility</h2>
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
          <h2>Conveyors</h2>
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
          <h2>Elevators</h2>
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
