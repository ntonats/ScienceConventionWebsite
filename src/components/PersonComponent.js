import React from 'react';
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Brightness1Icon from '@material-ui/icons/Brightness1';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.spacing(38),
    marginRight: 16
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
}));

const PersonComponent = ({image, text, ...rest}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} {...rest}>
      <img src={image} alt='' className={classes.image}/>
      {text && <Typography variant={"body2"} style={{paddingLeft: 8}}>
        <Brightness1Icon style={{fontSize: 12, marginRight: 8}} color='primary'/>
        {text}
      </Typography>}
    </Box>
  );
}

export default PersonComponent