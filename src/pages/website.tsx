import React from "react";
import ReactMarkdown from "react-markdown";
import markdownFile from '../components/Article';
import "./MarkdownPage.css";

const MarkdownPage: React.FC = () => {
  const [markdown, setMarkdown] = React.useState("");

  React.useEffect(() => {
    fetch(markdownFile)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, []);

  return (
    <div className="markdown-container">
      <ReactMarkdown className="markdown" children={markdown} />
    </div>
  );
};

export default MarkdownPage;
