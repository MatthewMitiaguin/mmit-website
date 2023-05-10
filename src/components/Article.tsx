import React from "react";

interface ArticleProps {
  title: string;
  description: string;
  dateofarticle: string;
  category: string;
}

const Article: React.FC<ArticleProps> = ({ title, description, dateofarticle, category }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{dateofarticle}</p>
      <p>{category}</p>
    </div>
  );
};

export default Article;
