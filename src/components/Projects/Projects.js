import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wordgame from "../../Assets/Projects/wordgame.png";
import image from "../../Assets/Projects/image.png";
import password from "../../Assets/Projects/password.png";
import quiz_app from "../../Assets/Projects/quiz_app.png";
import pacman from "../../Assets/Projects/pacman.png";
import translator from "../../Assets/Projects/translator.png";

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
              imgPath={quiz_app}
              isBlog={false}
              title="Quiz App"
              description="Fully Responsive Simple Quiz app built using HTML, CSS, Javascript implementing Open Trivia API"
              ghLink="https://github.com/newbie-dev1605/js_mini-projects/tree/main/js_quiz-app"
              demoLink="https://quick-quiz-app.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={translator}
              isBlog={false}
              title="Language Translator"
              description="Language Translator is a API-based project. Implemented functions include Fetch API, DOM manipulation, TTS (Text to Speech) and Copy to Clipboard functionality"
              ghLink="https://github.com/newbie-dev1605/js_mini-projects/tree/main/js_language-translator"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Password Generator"
              description="Users can generate random passwords by customizing their preferred settings, such as number of special characters, length of password and numbers along with a password strength meter"
              ghLink="https://github.com/newbie-dev1605/js_mini-projects/tree/main/js_password-generator"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordgame}
              isBlog={false}
              title="Word Game"
              description="The objective of the game is to guess all the letters of a randomly generated word within a given number of tries. The game provides hints to help make the guessing process easier."
              ghLink="https://github.com/newbie-dev1605/js_mini-projects/tree/main/js_word-game"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pacman}
              isBlog={false}
              title="Pacman"
              description="Pacman game built with vanilla Javascript and CSS that can be played natively on any modern browser"
              ghLink="https://github.com/newbie-dev1605/js_mini-projects/tree/main/js_pacman-game"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Image Editor"
              description="Image Editor built using Vanilla Javascript and CSS. Canvas is used to save edited images"
              ghLink="https://github.com/newbie-dev1605/js_image-editor"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
