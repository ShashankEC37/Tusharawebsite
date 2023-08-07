import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import cnc from "../assets/all-images/cnc.jpg"
import cncbending from "../assets/all-images/cnc bending.jpg"
import "../styles/products.css"

const Resources = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Our Facility" />
      <section style={{backgroundColor:"white"}}>
        <Container>
        <h3 style={{color:"black", textAlign:"justify" , margin:"0"}}>At Tushara Industries,
We take great pride in our
advanced facility, equipped with
cutting-edge machinery and
manned by a skilled workforce of
40+ professionals.
With a sprawling working area
spanning 14,000 Sq.ft. + 20,000
Sq.ft., we have created an
optimal environment for
delivering top-notch fabrication
solutions to our valued clients.</h3>
        <div className="container1">
        
        <div className="card">
        <div className="imgBx"></div>
        <div className="content">
        <h2>CNC LASER
CUTTING MACHINE</h2>
          <p>Harnessing the precision
and versatility of CNC
technology, our advanced
laser cutting machine
ensures accurate and
efficient cutting of various
materials, allowing us to
meet the most demanding
fabrication requirements.</p>
<a href="#">Read More</a>
        </div>
        </div>

        <div className="card">
        <div className="imgBx">
        <img src={cnc}/>
        </div>
       
        <div className="content">
          <h2>CNC BENDING
MACHINE</h2>
          <p>Our CNC bending machine
enables us to achieve precise
bends and complex shapes with
ease, resulting in impeccable
fabrication outcomes. With this
advanced equipment, we can
efficiently handle a wide range
of bending tasks.</p>
<a href="#">Read More</a>
        </div>
        </div>

        <div className="card">
        <div className="imgBx"></div>
        <div className="content">
        <h2>FABRICATION SETUP
WITH EOT CRANE</h2>
          <p>To facilitate seamless workflow
and handling of heavy
materials, our fabrication
setup is equipped with an EOT
(Electric Overhead Travel)
crane. This crane system
ensures smooth material
handling, streamlining the
fabrication process</p>
<a href="#">Read More</a>
        </div>
        </div>



       
    </div>

        </Container>
      </section>
    </Helmet>
  );
};

export default Resources;
