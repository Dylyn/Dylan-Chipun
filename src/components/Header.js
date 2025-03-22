import React from "react";
import { FaBars } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram} from "react-icons/fa";
import { GlowCapture, Glow } from "@codaworks/react-glow";

const Header = () => {
  return (
    <GlowCapture size={1200}>
      <Glow color="hsl(338.69 100% 48.04%)">
        <header className="sidebar-header">
            <div>
              <img src="/images/headshot.jpg" alt="" />
            </div>
            <div className="home-content">
              <h1>
                Hi, I'm <span>Dylan Chipun</span>
              </h1>
              <h3 className="typing-text">
                <span>Software Developer and Student</span>
              </h3>
              <h3 className="typing-text">
                
              </h3>
            </div>
          <nav className="sidebar-nav">
            <a href="#about">About Me</a>
            <a href="#experience">Experience</a>
            <a href="#resume">Resume</a>
          </nav>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/dylan-chipun/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Dylyn" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.youtube.com/@DylanChipun" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/dyln.chpn/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>

        </header>
      </Glow>
    </GlowCapture>
  );
};

export default Header;
