import React from 'react';
import AssetImage from '../../molecules/AssetImages';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  item: {
    display: 'inline-block',
  },
});



const NftList = ({metaDatas}) => {
  const InlineBlock = (metaData) => {
    const {item} = useStyles();
    return (
      <div
        className={item}
        key={metaData}
      >
        <AssetImage imageUrl={metaData.image} />
      </div>
    )
  }
  console.log(metaDatas.metaDatas, metaDatas.metaDatas.length);
  return (<>{metaDatas.metaDatas.map(InlineBlock)}</>);
}

export default NftList;
