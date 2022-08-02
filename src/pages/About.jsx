import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <span className="about-header">
          {"<h1>"} <span className="about-title">A Little About Me</span>{" "}
          {"</h1>"}
        </span>
        <div className="about-main">
          <div>
            <span className="about-main-desc">
              {"<p>"}{" "}
              <span className="about-main-p">
                Hello, I'm Denis. I'm a hardworking person with a passion for
                Front-End technologies. 😎 I don't like to define myself by the
                work I've done. I define myself by the work i want to do. Skills
                can be taught by doing things on your own. I prefer to keep
                learning, continue challenging myself, and build interesting
                things that{" "}
                <span>
                  {"<u>"} <u>matter</u> {"</u>"}
                </span>
                . 🏆 Oh, and by the way.
              </span>{" "}
              {"</p>"}
            </span>
          </div>

          <div>
            <span className="about-main-desc">
              <span>
                {'<img src="'}{" "}
                <img
                  className="about-main-img"
                  src="https://scontent.ftsr1-2.fna.fbcdn.net/v/t1.6435-9/144627811_2636368316487965_2875253311471214965_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE4S-gw-VNzhhvu-fmuKCEzdZf2F2yYxqp1l_YXbJjGqqiPAJZgNSLAwV3LxpKzvn_R4fiprzDs20HFo1I97Pst&_nc_ohc=HLxygjg2cdsAX_KbTXS&tn=9EqF55MIKOrYhj7G&_nc_ht=scontent.ftsr1-2.fna&oh=00_AT-KOLrnFjOGSyUPBT3TTH86yusUwHNWk67Y5ljv1stIlg&oe=630E7DC6"
                />{" "}
                {'alt="This is me 😎"'}
                {"/>"}
              </span>
            </span>
          </div>

          <div>
            <span className="about-main-desc">
              {"<p>"}{" "}
              <span className="about-main-p">
                I have an abundance of energy and passion, and I'm more than
                eager to follow my interests wherever they may lead me. I'm a
                passionate, outgoing and creative with a built-in capacity to
                inspire and amuse. ¯\_(ツ)_/¯ I'm never content to simply
                generate ideas. Instead, I feel compelled to take action on them
                nearly immediately. 💪
              </span>{" "}
              {"</p>"}
            </span>
          </div>

          <div>
            <span className="about-main-desc">
              {"<p>"}{" "}
              <span className="about-main-p">
                My boundless energy enables me to pursue a wide range of
                interests, pastimes, academic specialties, and creative
                pursuits. I can take up new abilities quickly, handle numerous
                projects and tasks, and{" "}
                <span>
                  {" "}
                  {"<b>"}
                  <b> I'm a quick learner </b>
                  {"</b>"}
                </span>
                .
              </span>{" "}
              {"</p>"}
            </span>
          </div>

          <div>
            <span className="about-main-desc">
              {"<button>"}
              <button className="primary-button">Get My CV</button>
              {"</button>"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
