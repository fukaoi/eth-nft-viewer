import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import NftList from '../organisms/NftList';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    alignItems: 'center',
  }
});

const Templates = ({metaDatas}) => {
  const {root} = useStyles();
  return (
    <div className={root}>
      <NftList metaDatas={metaDatas} />
    </div>
  )
}

export default Templates;
