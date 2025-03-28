import React from "react";
import { FaBars, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
import { GlowCapture, Glow } from "@codaworks/react-glow";

const Header = () => {
  return (
    <GlowCapture size={1200}>
      <Glow color="hsl(338.69 100% 48.04%)">
        <header className="sidebar-header hidden">
            <div className="home-content">
              <h1>
                <span>Dylan Chipun</span>
              </h1>
              <h3>
                <span>Software Developer and Student</span>
              </h3>
              <p>dylan.chipun@gmail.com</p>
            </div>
          <nav className="sidebar-nav">
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
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
