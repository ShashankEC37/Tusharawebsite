import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "../../styles/OurClients.css";
import { Container } from "reactstrap";

const one = require("../../assets/all-images/our clients/1.png");
const two = require("../../assets/all-images/our clients/2.png");
const three = require("../../assets/all-images/our clients/3.png");
const flor = require("../../assets/all-images/our clients/4.png");
const five = require("../../assets/all-images/our clients/5.png");

const images = [
  {
    id: 1,
    image: one,
  },
  {
    id: 2,
    image: two,
  },
  {
    id: 4,
    image: flor,
  },
  {
    id: 5,
    image: five,
  },
  // Add more images as needed
];

const OurClients = () => {
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    setVisibleImages(images.slice(0, 5)); // Show initial 5 images
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleSlideChange = (index) => {
    // Load more images when reaching the end of the current slide
    if (index + 3 === visibleImages.length) {
      loadMoreImages();
    }
  };

  // Function to load more images into the visibleImages state
  const loadMoreImages = () => {
    // Simulate loading more images (e.g., from an API call)
    // For this example, we'll just add five more images from the images array.
    const startIndex = visibleImages.length;
    const endIndex = startIndex + 5;
    setVisibleImages((prevVisibleImages) => [
      ...prevVisibleImages,
      ...images.slice(startIndex, endIndex),
    ]);
  };

  return (
    <Container>
      <div className='Our__Clients'>
      <h2 className='title1'>Our Clients</h2>
      <Slider {...settings} beforeChange={handleSlideChange}>
        {visibleImages.map((image) => (
          <div key={image.id} className="card-container">
            <div className="card1">
              <img src={image.image} alt={`Card1 ${image.id}`} />
            </div>
          </div>
        ))}
      </Slider>
      <div class="button-container">
    <button className="Know__More" style={{ backgroundColor:'#000d6b', color: 'white'}}>
      Know More
    </button>
    </div>
    </div>
    </Container>
  );
};

export default OurClients;
