import React from "react";

interface ArticleProps {
  title: string;
  description: string;
  dateofarticle: string;
  category: string;
  url: string;
}

const Article: React.FC<ArticleProps> = ({ title, description, dateofarticle, category, url }) => {
  return (
    <div>
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
