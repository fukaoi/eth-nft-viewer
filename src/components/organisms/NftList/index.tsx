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

const NftList = ({metaDatas}:{metaDatas: any}) => {
  const {
    item
  } = useStyles();

  return (<>{metaDatas.map((data: {image: string}) => inlineBlock(data, item))}</>);
}

export default NftList;
