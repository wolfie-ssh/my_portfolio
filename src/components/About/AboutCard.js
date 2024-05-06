import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thilak G </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently pursuing B.Sc in Computer Science
            <br />
            And also work as a Freelancer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)"}}>
            "Converting 0's and 1's to Full Fledged Programs"
          </p>
          <footer className="blockquote-footer">Me</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;