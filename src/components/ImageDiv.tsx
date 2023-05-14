import React from 'react';

interface Props {
  imageName: string;
}

const ImageDiv: React.FC<Props> = ({ imageName }) => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#f1f1f1' }}>
      <img src={imageName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

export default ImageDiv;
