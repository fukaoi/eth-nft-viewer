import React from 'react';
import AssetImage from '../../molecules/AssetImages';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  item: {
    display: 'inline-block',
    margin: 6,
  },
});

const InlineBlock = ({metaData}: {metaData: any}) => {
  const {
    item
  } = useStyles();

  return (
    <div
      className={item}
      key={metaData.image}
    >
      <AssetImage imageUrl={metaData.image} />
    </div>
  )
}

const NftList = ({metaDatas}: {metaDatas: any}) => {
  console.log(metaDatas);
  return (
    <>
      {metaDatas.map((metaData: any) => <InlineBlock metaData={metaData} />)}
    </>
  );
}

export default NftList;
