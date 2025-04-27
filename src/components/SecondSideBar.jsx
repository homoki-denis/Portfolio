import React from "react";
import { Link, useLocation } from "react-router-dom";

function SecondSideBar() {
  let location = useLocation();
  return (
    <div className="second-sidebar">
      <p>Explorer</p>
      <div className="portfolio-items">
        <p>Portfolio</p>
        <div className="portfolio-links">
          <Link to="/">
            <div className="portfolio-link">
              <img
                src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
                alt="react"
              />{" "}
              <span>home.jsx</span>
            </div>
          </Link>

          <Link to="/about">
            <div className="portfolio-link">
              <img
                src="https://www.svgrepo.com/show/452228/html-5.svg"
                alt="html"
              />{" "}
              <span>about.html</span>
            </div>
          </Link>

          <Link to="/contact">
            <div className="portfolio-link">
              <img src="https://img.icons8.com/color/344/sass.png" alt="scss" />{" "}
              <span>contact.scss</span>
            </div>
          </Link>

          <Link to="/projects">
            <div className="portfolio-link">
              <img
                src="https://www.svgrepo.com/show/452045/js.svg"
                alt="javascript"
              />{" "}
              <span>projects.js</span>
            </div>
          </Link>

          <Link to="/articles">
            <div className="portfolio-link">
              <img
                src="https://www.svgrepo.com/show/373712/json.svg"
                alt="json"
              />{" "}
              <span>articles.json</span>
            </div>
          </Link>

          <Link to="/github">
            <div className="portfolio-link">
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="github"
              />{" "}
              <span>github.mb</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SecondSideBar;
