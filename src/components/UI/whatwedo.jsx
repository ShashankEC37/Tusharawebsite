import '../../styles/whatwedo.css'
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import laser from "../../assets/all-images/laser-cutting.png"
const Whatwedo = () => {
    return (
        <section
        className="whatwedo_section"

        >
        <Container>
        <h2 className="What__we__do">What we do</h2>
        <div class="cards-container">
    <div class="card">
      <img src={laser} alt="Image 1"/>
      <p class="card-text">Ms Laser Cutting</p>
    </div>
    <div class="card">
      <img src={laser}  alt="Image 2"/>
      <p class="card-text">Ms Laser Cutting</p>
    </div>
    <div class="card">
      <img src={laser}  alt="Image 3"/>
      <p class="card-text">Ms Laser Cutting</p>
    </div>
    <div class="card">
      <img src={laser}  alt="Image 4"/>
      <p class="card-text">Ms Laser Cutting</p>
    </div>  
   
    </div>
    <div class="button-container">
    <button className="Know__More">
      Know More
    </button>
    </div>
    </Container>
  
    </section>
    )
}
export default Whatwedo