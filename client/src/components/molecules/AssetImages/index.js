import React from 'react';

const AssetImage = (imageUrl) => {
  return (
    <img src={imageUrl}
      width="150"
      height="150"
      border="0"
      alt={imageUrl}
    />
  );
}

export default AssetImage;
