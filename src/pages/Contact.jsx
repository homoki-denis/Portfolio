import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-socials">
          <div>
            <h1>Reach Out To Me Via Socials</h1>
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
          <div>
            <h1>Or With This Form</h1>
          </div>
          <form className="form-container">
            <div className="form-header">
              <div>
                <p>NAME</p>
                <input type="text" className="mg-l" />
              </div>
              <div>
                <p>EMAIL</p>
                <input type="email" />
              </div>
            </div>
            <div className="form-footer">
              <p>SUBJECT</p>
              <input type="text" />
              <p>MESSAGE</p>
              <textarea name="" id="" cols="30" rows="5"></textarea>
            </div>
            <button className="secondary-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
