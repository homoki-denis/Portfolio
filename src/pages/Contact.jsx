import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vqsdrfd",
        "template_1fblirf",
        form.current,
        "jxpw2CnPUiYiDcEPV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
              website:{" "}
              <a
                href="https://my-blog-iota-seven.vercel.app/"
                target="_blank"
                className="contact-link"
              >
                {" "}
                <span className="contact-name">homokidenis.me</span>
              </a>{" "}
            </p>
            <p className="contact-line">
              github:{" "}
              <a href="https://github.com/homoki-denis" target="_blank">
                {" "}
                <span className="contact-name">homoki-denis</span>
              </a>{" "}
            </p>
            <p className="contact-line">
              email:{" "}
              <a href="mailto:homoki.denisth@gmail.com" target="_blank">
                {" "}
                <span className="contact-name">homoki.denisth@gmail.com</span>
              </a>{" "}
            </p>

            <p className="contact-line">
              linkedin:{" "}
              <a
                href="https://www.linkedin.com/in/denis-homoki-941180223/"
                target="_blank"
              >
                {" "}
                <span className="contact-name">denis-homoki</span>
              </a>{" "}
            </p>
            <p className="contact-line">
              replit:{" "}
              <a href="https://replit.com/@homoki-denis" target="_blank">
                {" "}
                <span className="contact-name">homoki-denis</span>
              </a>{" "}
            </p>

            <p className="contact-line">
              instagram:{" "}
              <a href="https://www.instagram.com/homoki.denis/" target="_blank">
                {" "}
                <span className="contact-name">homoki.denis</span>
              </a>{" "}
            </p>
            <p className="contact-line">
              codepen:{" "}
              <a href="https://codepen.io/hdt-cmd" target="_blank">
                {" "}
                <span className="contact-name">hdt-cmd</span>
              </a>{" "}
            </p>
            <p className="contact-line">
              codesandbox:{" "}
              <a href="https://codesandbox.io/u/hdt-cmd" target="_blank">
                {" "}
                <span className="contact-name">hdt-cmd</span>
              </a>{" "}
            </p>
            <span className="curlybrace curly-line">{"}"}</span>
          </div>
        </div>
        <div className="contact-form">
          <div>
            <h1>Or With This Form</h1>
          </div>
          <form ref={form} onSubmit={sendEmail} className="form-container">
            <div className="form-header">
              <div>
                <p>NAME</p>
                <input type="text" className="mg-l" name="name" />
              </div>
              <div>
                <p>EMAIL</p>
                <input type="email" name="email" />
              </div>
            </div>
            <div className="form-footer">
              <p>SUBJECT</p>
              <input type="text" name="subject" />
              <p>MESSAGE</p>
              <textarea id="" cols="30" rows="5" name="message"></textarea>
            </div>
            <input
              type="submit"
              value="Send"
              className="secondary-button contact-btn"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
