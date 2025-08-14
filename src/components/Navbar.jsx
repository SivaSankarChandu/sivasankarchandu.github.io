import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar glass">
      <div className="brand">
        <NavLink to="/" className="brand-name">
          Siva Sankar Chandu
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience">
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-icon">
          <a
            href="https://www.linkedin.com/in/sivasankarchandu/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/11k-gHHDcWlR9kmvS79K1ZJjeyLH6hQbL/view?usp=sharing"
            className="btn resume"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
