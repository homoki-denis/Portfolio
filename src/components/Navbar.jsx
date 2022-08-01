import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-items navbar-active">
          <img
            src="https://vscode-portfolio.vercel.app/_next/image?url=%2Freact_icon.svg&w=32&q=75"
            alt="react"
          />
          <span>home.jsx</span>
        </div>
      </Link>

      <Link to="about">
        <div className="navbar-items">
          <img
            src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fhtml_icon.svg&w=32&q=75"
            alt="react"
          />
          <span>about.html</span>
        </div>
      </Link>

      <Link to="contact">
        <div className="navbar-items">
          <img src="https://img.icons8.com/color/344/sass.png" alt="sass" />
          <span>contact.scss</span>
        </div>
      </Link>

      <Link to="projects">
        <div className="navbar-items">
          <img
            src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fjs_icon.svg&w=32&q=75"
            alt="javascript"
          />
          <span>projects.js</span>
        </div>
      </Link>

      <Link to="articles">
        <div className="navbar-items">
          <img
            src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fjson_icon.svg&w=32&q=75"
            alt="json"
          />
          <span>articles.json</span>
        </div>
      </Link>

      <Link to="github">
        <div className="navbar-items">
          <img
            src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fmarkdown_icon.svg&w=32&q=75"
            alt="github"
          />
          <span>github.mb</span>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
