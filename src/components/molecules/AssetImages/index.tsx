import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  image: {
    width: 150,
    height: 150,
  }
});

const AssetImage = ({imageUrl}: {imageUrl: string}) => {
  const {image} = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia image={imageUrl} className={image} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizar
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default AssetImage;
