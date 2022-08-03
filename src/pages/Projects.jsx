import React from "react";
import card from "../card.json";

function Projects() {
  const cards = card.map((item) => {
    return (
      <div className="projects-card">
        <img src={item.img_card} alt="" className="project-card-img" />
        <h3 className="card-title">{item.card_title}</h3>
        <p className="description">{item.card_desc}</p>
        <div className="what-i-use">
          <span className="program-used">{item.what_use}</span>
        </div>
        <div className="card-footer">
          <a href={item.source_code}>
            {" "}
            <button className="source-code">Source Code</button>
          </a>
          <a href={item.live_demo}>
            {" "}
            <button className="live-demo">Live Demo</button>
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className="projects">
      <div className="projects-container">
        <h1>What I've Build So Far</h1>
        <div className="projects-cards">{cards}</div>
      </div>
    </div>
  );
}

export default Projects;
