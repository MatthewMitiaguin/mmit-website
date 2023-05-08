import React from 'react';

interface Props {
  height?: string;
  color?: string;
}

const FadedHorizontalRule: React.FC<Props> = ({ height = '1px', color = '#ccc' }) => (
  <hr
    style={{
      height,
      border: 'none',
      backgroundColor: color,
      opacity: 0.8,
      margin: 0,
    }}
  />
);

export default FadedHorizontalRule;
