import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
 
];

const Contact = () => {
  const googleMapSrc =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.370495226926!2d77.5036333!3d13.0120625!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3cf909a2e003%3A0x18d010f40eed89b1!2s091%2C%20560%2C%201st%20Main%20Rd%2C%20Peenya%20Industrial%20Area%20Phase%20IV%2C%20Peenya%2C%20Bengaluru%2C%20Karnataka%20560058!5e0!3m2!1sen!2sin!4v1691497310370!5m2!1sen!2sin';
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section style={{background:"white"}}>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Phone Number" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0" style={{color:"black"}}>
                No.19, 22nd Cross, Doddanna Industrial Estate,

Peenya 2 nd Stage,Hegganahalli,

Bangalore – 560 091
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0" style={{color:"black"}}>+91 96326 87999</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0" style={{color:"black"}}>nandakumar@tusharaindustries.in</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="contact-map">
        <h1 style={{paddingBottom:"30px"}}>Our Office</h1>
      <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <iframe
          src={googleMapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
  </div>
      </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
