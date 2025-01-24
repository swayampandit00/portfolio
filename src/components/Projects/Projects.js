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
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, . Have features which allows.health care services, this project made by a group in internship period."
              ghLink="https://github.com/swayampandit00/mern_website"
              demoLink="demolink"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={location}
              isBlog={false}
              title="find location"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/swayampandit00/locationtrack"
              demoLink="demolink"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wi}
              isBlog={false}
              title="wi-fi password"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/swayampandit00/show-wifi-password"
              demoLink="demolink"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={navbar}
              isBlog={false}
              title="Navbar"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
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
