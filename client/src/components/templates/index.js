import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import NftList from '../organisms/NftList';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    alignItems: 'center',
  }
});

const Templates = (images) => {
  const {root} = useStyles();
  return (
    <div className={root}>
      <NftList images={images} />
    </div>
  )
}

export default Templates;
