import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation();

  return (
    <div className="navbar">
      <Link className="link" to="/">
        <div
          className={`navbar-items ${
            location.pathname === "/" && "navbar-active"
          }`}
        >
          <img
            src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
            alt="react"
          />
          <span>home.jsx</span>
        </div>
      </Link>

      <Link className="link" to="/about">
        <div
          className={`navbar-items ${
            location.pathname === "/about" && "navbar-active"
          }`}
        >
          <img
            src="https://www.svgrepo.com/show/452228/html-5.svg"
            alt="react"
          />
          <span>about.html</span>
        </div>
      </Link>

      <Link className="link" to="/contact">
        <div
          className={`navbar-items ${
            location.pathname === "/contact" && "navbar-active"
          }`}
        >
          <img src="https://img.icons8.com/color/344/sass.png" alt="sass" />
          <span>contact.scss</span>
        </div>
      </Link>

      <Link className="link" to="/projects">
        <div
          className={`navbar-items ${
            location.pathname === "/projects" && "navbar-active"
          }`}
        >
          <img
            src="https://www.svgrepo.com/show/452045/js.svg"
            alt="javascript"
          />
          <span>projects.js</span>
        </div>
      </Link>

      <Link className="link" to="/articles">
        <div
          className={`navbar-items ${
            location.pathname === "/articles" && "navbar-active"
          }`}
        >
          <img
            src="https://www.svgrepo.com/show/373712/json.svg"
            alt="json"
          />
          <span>articles.json</span>
        </div>
      </Link>

      <Link className="link" to="/github">
        <div
          className={`navbar-items ${
            location.pathname === "/github" && "navbar-active"
          }`}
        >
          <img
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt="github"
          />
          <span>github.mb</span>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
