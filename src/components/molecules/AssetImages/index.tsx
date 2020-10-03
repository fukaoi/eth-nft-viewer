import React from 'react';

const AssetImage = ({imageUrl}:{imageUrl: string}) => {
  return (
    <img src={imageUrl}
      width="150"
      height="150"
      alt={imageUrl}
    />
  );
}

export default AssetImage;
