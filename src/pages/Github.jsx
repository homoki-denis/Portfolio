import React from "react";
import card from "../card";

function Github() {
  const cards = card.map((item) => (
    <div className="github-card">
      <div>
        <div className="github-card-title">{item.card_title}</div>
        <div className="github-card-subtitle">{item.card_desc}</div>
      </div>
      <div className="github-links">
        <a href={item.source_code} target="_blank">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="RepoCard_icon__hol0q"
          >
            <path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 01-.728-.728v-3.73a2.497 2.497 0 00-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 00.09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 00-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 01-.728.728.718.718 0 01-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 016.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"></path>
          </svg>
        </a>
        <a href={item.live_demo} target="_blank">
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            data-view-component="true"
            height="20"
            width="20"
            class="RepoCard_icon__hol0q"
          >
            <path
              fill-rule="evenodd"
              fill="currentColor"
              d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  ));

  return (
    <div className="github">
      <div className="github-container">
        <div className="github-header">
          <div className="github-img">
            <img
              src="https://avatars.githubusercontent.com/u/81716742?v=4"
              alt=""
            />
            <span>homoki-denis</span>
          </div>
          <p className="github-repos">20 repos</p>
        </div>
        <div className="github-content">{cards}</div>
        <div className="github-footer">
          <p>123 contributions in the last year</p>
        </div>
      </div>
    </div>
  );
}

export default Github;
