import React from "react";

interface FadedVerticalRuleProps {
  height: number;
  width: number;
  color: string;
}

const FadedVerticalRule: React.FC<FadedVerticalRuleProps> = ({
  height,
  width,
  color,
}) => {
  const gradient = `linear-gradient(to bottom, ${color}, transparent ${height}px)`;

  const styles = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundImage: gradient,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 0%",
  };

  return <div style={styles} />;
};

export default FadedVerticalRule;
