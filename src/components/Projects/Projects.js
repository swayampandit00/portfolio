import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import navbar from "../../Assets/Projects/navbar.png";
import emotion from "../../Assets/Projects/emotion.png";
import wi from "../../Assets/Projects/wi-fi.png";
import mernweb from "../../Assets/Projects/mern-website.png";
import ai from "../../Assets/Projects/AI.png";
import location from "../../Assets/Projects/location.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mernweb}
              isBlog={false}
              title="Mern-Web"
              description="A full-stack e-commerce web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. Features include user authentication, product management, and a shopping cart. This project showcases best practices for building scalable and maintainable MERN applications. Contributions are welcome!"
              ghLink="https://github.com/swayampandit00/mern_website"
              demoLink="demolink"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={location}
              isBlog={false}
              title="find location"
              description="A location finder application designed to help users [explain the purpose, e.g., explore new areas, find businesses near them, plan trips].
This project aims to provide a reliable and convenient way to find locations for [mention target audience or use case, e.g., travelers, local residents, event organizers]."
              ghLink="https://github.com/swayampandit00/locationtrack"
              demoLink="demolink"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wi}
              isBlog={false}
              title="wi-fi password"
              description="Legality and Ethics: Always emphasize that your project is intended for ethical and legal use. Clearly state that it should not be used to access WiFi networks without permission.
Focus on Functionality: Highlight the specific features of your project that are not related to password retrieval."
              ghLink="https://github.com/swayampandit00/show-wifi-password"
              demoLink="demolink"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={navbar}
              isBlog={false}
              title="Navbar"
              description="This navbar design prioritizes user experience with a clear and organized layout. It features [mention key elements, e.g., site logo, navigation links, search bar, call-to-action button].
A responsive navbar that adapts seamlessly to different screen sizes, ensuring optimal navigation on desktop and mobile devices.   
This navigation bar is designed to be both functional and visually appealing, enhancing the overall website aesthetic."
              ghLink="https://github.com/swayampandit00/navbar-website"
              demoLink="demolink"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ai}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of querry and user's suicide ideation in cyberspace  and thus helping in sucide prevention, result."
              ghLink="https://github.com/swayampandit00/AIBot"
              // demoLink="demolink" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/swayampandit00/faceRecognition"
              // demoLink="demolink"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
