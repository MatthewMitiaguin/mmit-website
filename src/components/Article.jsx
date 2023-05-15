import React from "react";

const Article = ({ title, description, dateofarticle, category, url }) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <div style={{ display: "flex" }}>
        <h4 style={{ marginRight: "10px" }}>{dateofarticle}</h4>
        <h5>{category}</h5>
      </div>
      <h2 style={{ margin: 0 }}>
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          {title}
        </a>
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default Article;
