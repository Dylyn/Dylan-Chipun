import React from "react";
import { FaBars } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram} from "react-icons/fa";
import { GlowCapture, Glow } from "@codaworks/react-glow";

const Header = () => {
  return (
    <GlowCapture size={1200}>
      <Glow color="hsl(338.69 100% 48.04%)">
        <header className="sidebar-header glowable-sidebar">
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
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>

        </header>
      </Glow>
    </GlowCapture>
  );
};

export default Header;
