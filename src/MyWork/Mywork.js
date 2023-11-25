import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import "./Mywork.css";

const Mywork = () => {
  return (
    <>
      <div className="container-fluid bg-transparent p-2" id="carousel">
        <Carousel className="container carousel-fade bg-transparent">
          <Carousel.Item className="bg-transparent">
            <img
              className="d-block w-100 rounded-2"
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption className="bg-transparent">
              <h3 className="bg-transparent">FINALIST OF SIH</h3>
              <p className="bg-transparent">Settled finalist on smart india hackathon 2022.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded-2"
              src={image2}
              alt="Second slide"
            />
            <Carousel.Caption className="bg-transparent">
              <h3 className="bg-transparent">WON IN A PRESENTATION COMP</h3>
              <p className="bg-transparent">Got second prize in SCT's Paper Presentation.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded-2"
              src={image3}
              alt="Third slide"
            />
            <Carousel.Caption className="bg-transparent">
              <h3 className="bg-transparent">TECHNOLOGY NERD</h3>
              <p className="bg-transparent">Innovated more than 10 products.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container-fluid d-flex mt-auto" id="div2">
        <div className="container mt-5 bg-transparent d-block p-10">
          <h3 className="bg-transparent h1">LEARNINGS</h3>
          <hr className="border-light border-3" />
          <p className="bg-transparent" style={{ textAlign: 'justify', textJustify: 'inter-word', tabSize: 4, whiteSpace: 'pre-line' }}>
          &nbsp;&nbsp;&nbsp;Through my experiences in various projects, I've gained valuable insights and lessons that have contributed to my growth as a full-stack developer. One of the fundamental lessons I've learned is the importance of meticulous project planning. Having a well-defined roadmap before initiating development proved crucial in avoiding obstacles and ensuring a more streamlined process. Additionally, I've come to appreciate the significance of user-centric design principles, witnessing firsthand how prioritizing the user experience can significantly impact customer engagement and satisfaction.<br/><br/>
          &nbsp;&nbsp;&nbsp;Effective communication within a development team emerged as another key lesson. Regular updates, stand-up meetings, and the use of collaborative tools played a pivotal role in the success of the projects. Agile methodologies became a cornerstone of my approach, allowing for adaptability to changing requirements and fostering continuous improvement through iterative development.<br/><br/>
          &nbsp;&nbsp;&nbsp;In specific projects, such as an e-commerce website, I encountered challenges related to handling large datasets and implemented optimization techniques for efficient data manipulation. Security considerations became paramount, leading to the implementation of best practices to safeguard sensitive user data and prevent common vulnerabilities.
          </p>
        </div>
      </div>
    </>
  );
}

export default Mywork;
