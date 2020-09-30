import React from 'react';
import AssetImage from '../../molecules/AssetImages';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  item: {
    display: 'inline-block',
  },
});

const InlineBlock = (imageUrl) => {
  const {item} = useStyles();
  return (
    <div
      className={item}
      key={imageUrl}
    >
      <AssetImage imageUrl={imageUrl} />
    </div>
  )
}

const NftList = (images) => 
  <>{images.map(InlineBlock)}</>;

export default NftList;
