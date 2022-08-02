import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-socials">
          <div>
            <h1>Reach Out To Me</h1>
          </div>
          <div className="contact-lines">
            <span className="social">.socials </span>
            <span className="curlybrace">{"{"}</span>
            <p className="contact-line">
              website: <span className="contact-name">name</span>{" "}
            </p>
            <p className="contact-line">
              email: <span className="contact-name">name</span>{" "}
            </p>
            <p className="contact-line">
              github: <span className="contact-name">name</span>{" "}
            </p>
            <p className="contact-line">
              linkedin: <span className="contact-name">name</span>{" "}
            </p>
            <p className="contact-line">
              instagram: <span className="contact-name">name</span>{" "}
            </p>
            <p className="contact-line">
              codepen: <span className="contact-name">name</span>{" "}
            </p>
            <p className="contact-line">
              codesandbox: <span className="contact-name">name</span>{" "}
            </p>
            <span className="curlybrace curly-line">{"}"}</span>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
