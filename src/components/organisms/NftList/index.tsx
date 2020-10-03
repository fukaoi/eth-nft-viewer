import React from 'react';
import AssetImage from '../../molecules/AssetImages';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  item: {
    display: 'inline-block',
  },
});

const inlineBlock = (metaData: {image: string}, style: string) => {
  return (
    <div
      className={style}
      key={metaData.image}
    >
      <AssetImage imageUrl={metaData.image} />
    </div>
  )
}

const NftList = ({metaDatas}) => {
  const {item} = useStyles();
  return (<>{metaDatas.metaDatas.map(data => inlineBlock(data, item))}</>);
}

export default NftList;
