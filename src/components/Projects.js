import React from "react";
import persona from "../images/PersonaThumbnail.jpg";
import canvas from "../images/communityCanvas.jpg";
import qbnb from "../images/qbnbmain.png";
import { FaLink } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" class="hidden">
      <div className="subsection-header hidden">
        <h2>Projects</h2>
      </div>
      <div class="projects-section">
        <div class="projects-content items-left">
          <div className="projects-image items-left hidden">
            <img src={persona} alt="persona" />
            <div style={{ flexDirection:"column" }}>
              <div style={{ display:"flex", flexDirection:"row" }}>
                <a href="https://github.com/Dylyn/Superhero-Personality-Quiz" target="_blank" rel="noopener noreferrer">
                  <h2 style={{ fontSize:"18px" }}>Superhero Personality Quiz</h2>
                </a>
                <FaLink style={{ paddingLeft:"10px", fontSize: "24px" }} />
              </div>
              <p>A fun personality quiz inspired by MBTI. The quiz provides users
                with and interesting way to view their own unique personality types with
                fun images and graphics
              </p>
              <div className="project-tool-list">
                <div className="project-tools">
                  React
                </div>
                <div className="project-tools">
                  JavaScript
                </div>
                <div className="project-tools">
                  HTML/CSS
                </div>
              </div>
            </div>
          </div>
          <div className="projects-image items-left hidden">
            <img src={canvas} alt="canvas" />
            <div style={{ flexDirection:"column" }}>
              <h2 style={{ fontSize:"18px" }}>Community Canvas</h2>
              <p>Created during the Qhacks 2022 hackathon, my team and I created an online painting
                application where users connected from different devices could contribute to the digital painting
                on our site.
              </p>
              <div className="project-tool-list">
                <div className="project-tools">
                  React
                </div>
                <div className="project-tools">
                  Node.js
                </div>
                <div className="project-tools">
                  JavaScript
                </div>
                <div className="project-tools">
                  HTML/CSS
                </div>
              </div>
            </div>
          </div>
          <div className="projects-image items-left hidden">
            <img src={qbnb} alt="qbnb" />
            <div style={{ flexDirection:"column" }}>
              <div style={{ display:"flex", flexDirection:"row" }}>
                <a href="https://github.com/andrewzhng2/CISC327-Course-Project" target="_blank" rel="noopener noreferrer">
                  <h2 style={{ fontSize:"18px" }}>QBnB</h2>
                </a>
                <FaLink style={{ paddingLeft:"10px", fontSize: "24px" }} />
              </div>
              <p>As the final project of my Software Quality Assurance course, we were tasked with making
                a AirBnb duplicate. features include, user registration, create and book listings, unit reviews,
                and account transactions
              </p>
              <div className="project-tool-list">
                <div className="project-tools">
                  Flask
                </div>
                <div className="project-tools">
                  Python
                </div>
                <div className="project-tools">
                  SQL
                </div>
                <div className="project-tools">
                  JavaScript
                </div>
                <div className="project-tools">
                  HTML/CSS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
