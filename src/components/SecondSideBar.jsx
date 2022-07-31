import React from "react";

function SecondSideBar() {
  return (
    <div className="second-sidebar">
      <p>Explorer</p>
      <div className="portfolio-items">
        <p>Portfolio</p>
        <div className="portfolio-links">
          <div className="portfolio-link">
            <img
              src="https://vscode-portfolio.vercel.app/_next/image?url=%2Freact_icon.svg&w=32&q=75"
              alt="react"
            />{" "}
            <span>home.jsx</span>
          </div>

          <div className="portfolio-link">
            <img
              src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fhtml_icon.svg&w=32&q=75"
              alt="html"
            />{" "}
            <span>about.html</span>
          </div>

          <div className="portfolio-link">
            <img src="https://img.icons8.com/color/344/sass.png" alt="scss" />{" "}
            <span>contact.scss</span>
          </div>

          <div className="portfolio-link">
            <img
              src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fjs_icon.svg&w=32&q=75"
              alt="javascript"
            />{" "}
            <span>projects.js</span>
          </div>

          <div className="portfolio-link">
            <img
              src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fjson_icon.svg&w=32&q=75"
              alt="json"
            />{" "}
            <span>articles.json</span>
          </div>

          <div className="portfolio-link">
            <img
              src="https://vscode-portfolio.vercel.app/_next/image?url=%2Fmarkdown_icon.svg&w=32&q=75"
              alt="github"
            />{" "}
            <span>github.mb</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSideBar;
