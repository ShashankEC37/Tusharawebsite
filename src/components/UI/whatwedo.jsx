import '../../styles/whatwedo.css'
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import laser from "../../assets/all-images/laser-cutting.png"
import compressor from "../../assets/all-images/compressor.jpg"
import containers from "../../assets/all-images/container.jpg"
import belt from "../../assets/all-images/belt-conveyor.jpg"
import elevator from "../../assets/all-images/elevator.jpg"
const Whatwedo = () => {
    return (
        <section
        className="whatwedo_section"

        >
      <Container>
        <div className="container1" >
        <div className="box">
        <div className="imgBx"></div>
        <div className="content">
        <h2>Enclosure for portable power compressor</h2>
          
<a href="#">Read More</a>
        </div>
        </div>

        <div className="box">
        <div className="imgBx">
        <img src={compressor}/>
        </div>
       
        <div className="content">
          <h2>Industrial air filters, fans filters</h2>
       

        </div>
        </div>

        <div className="box">
        <div className="imgBx"></div>
        <div className="content">
        <h2>Body for shot blasting machines</h2>
         
        </div>
        </div>

        <div className="box">
        <div className="imgBx">
        <img src={containers}/>
        </div>
       
        <div className="content">
          <h2>Various types of diesel
tanks with leak test and
pressure test facility</h2>
       
        </div>

        
        </div>

        <div className="box">
        <div className="imgBx">
        <img src={belt}/>
        </div>
       
        <div className="content">
          <h2>Conveyors</h2>
          
        </div>

        
        </div>

        <div className="box">
        <div className="imgBx">
        <img src={elevator}/>
        </div>
       
        <div className="content">
          <h2>Elevators</h2>
          
        </div>

        
        </div>
    </div>

        </Container>
  
    </section>
    )
}
export default Whatwedo