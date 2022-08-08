import React from "react";
import card from "../articlesCard";

function Articles() {
  const cards = card.map((item) => {
    return (
      <a target="_blank" href={item.link}>
        <div className="article-card">
          <img src={item.img_card} alt="img" />
          <h2 className="article-header">{item.card_title}</h2>
          <p className="article-subtitle">{item.card_desc}</p>
        </div>
      </a>
    );
  });

  return (
    <div className="articles">
      <h1>Posts from my blog</h1>
      <div className="articles-cards">{cards}</div>
    </div>
  );
}

export default Articles;
