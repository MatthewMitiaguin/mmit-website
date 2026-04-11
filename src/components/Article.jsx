import React from "react";
import { Link } from "gatsby";

const Article = ({ title, description, dateofarticle, category, url }) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <div style={{ display: "flex" }}>
        <h4 style={{ marginRight: "10px" }}>{dateofarticle}</h4>
        <h5>{category}</h5>
      </div>
      <h2 style={{ margin: 0 }}>
        <Link to={url} style={{ textDecoration: "none", color: "inherit" }}>
          {title}
        </Link>
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default Article;
