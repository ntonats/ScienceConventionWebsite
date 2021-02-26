import React from 'react';
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Brightness1Icon from '@material-ui/icons/Brightness1';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.spacing(38),
    marginBottom: 16
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
}));

const PersonComponent = ({name, image, text, ...rest}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} {...rest}>
      <Typography variant='h4'>{name}</Typography>
      <img src={image} alt='' className={classes.image}/>
      {text && <Typography variant={"body2"} style={{paddingLeft: 8}}>
        <Brightness1Icon style={{fontSize: 12, marginRight: 8}} color='primary'/>
        {text}
      </Typography>}
    </Box>
  );
}

export default PersonComponent