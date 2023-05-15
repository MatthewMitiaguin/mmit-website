import React from "react";

const FadedHorizontalRule = ({ height, width, color }) => {
  const gradient = `linear-gradient(to left, transparent, ${color}, transparent), linear-gradient(to right, transparent, ${color}, transparent)`;

  const styles = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundImage: gradient,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0% 50%",
  };

  return <div style={styles} />;
};

export default FadedHorizontalRule;
