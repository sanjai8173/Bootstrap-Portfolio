import React from 'react';
import './Services.css';
import image1 from './a.jpg';
import image2 from './img7.jpg';

function Services() {
  return (
    <div id="serv">
      <div className="container" id="serv_back">
        <div className="container bg-transparent" id="serv_back_l">
          <img src={image1} alt="black_panther" className="img-fluid" />
        </div>
        <div className="container bg-transparent text-light" id="serv_back_r">
          <h1 className="h1 bg-transparent">Services</h1>
          <hr className="border-3 border-light bg-transparent" />
          <p
            className="bg-transparent"
            style={{
              textAlign: 'justify',
              textJustify: 'inter-word',
              tabSize: 4,
              whiteSpace: 'pre-line',
            }}
          >
            As a Full-Stack Web Developmer I can Transform your ideas into fully functional and visually stunning web applications. I specialize in end-to-end development, from server-side scripting to client-side interactivity. Using the latest technologies and frameworks, I ensure seamless and responsive user experiences.
          </p>
        </div>
      </div>
      <div className="container-fluid d-flex" id="serv_back_2">
        <div className="container bg-transparent">
          <h1 className="bg-transparent">Team Player</h1>
          <hr className="border-dark border-3 " id="hr" />
          <p
            className="w-lg-50 bg-transparent"
            style={{
              textAlign: 'justify',
              textJustify: 'inter-word',
              tabSize: 4,
              whiteSpace: 'pre-line',
            }}
            id="para2"
          >
            As a dedicated Full-Stack Web Developer, I bring a holistic approach to your projects. My commitment to delivering high-quality web applications is complemented by my collaborative mindset. Like a good team player, I thrive in collaborative environments, actively engaging with cross-functional teams to understand project requirements and contribute to the collective success. Whether it's brainstorming sessions for innovative solutions or working closely with UI/UX designers to create seamless user experiences, I value open communication and teamwork. My goal is to not only meet technical objectives but also to enhance the overall synergy of the development process.
          </p>
        </div>
      </div>
      <div className="container" id="serv_back" style={{ backgroundColor: '#040001' }}>
        <div className="container h-100 bg-transparent" id="serv_back_l">
          <img src={image2} alt="black_panther" className="img-fluid h-100" />
        </div>
        <div className="container bg-transparent text-light" id="serv_back_r">
          <h1 className="h1 bg-transparent">Designer</h1>
          <hr className="border-3 border-light bg-transparent" />
          <p
            className="bg-transparent"
            style={{
              textAlign: 'justify',
              textJustify: 'inter-word',
              tabSize: 4,
              whiteSpace: 'pre-line',
            }}
          >
Elevate your brand with captivating design solutions. Our design services go beyond aesthetics; they are a strategic blend of creativity and functionality. Whether you need a visually striking website, eye-catching marketing materials, or a memorable logo, we are here to transform your ideas into visually compelling realities. Our approach involves understanding your brand identity, target audience, and objectives to create designs that leave a lasting impression. From user interface (UI) design to user experience (UX) enhancements, our goal is to ensure your brand communicates effectively and resonates with your audience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
