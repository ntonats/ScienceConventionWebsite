import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import MuiLink from "./utility/MuiLink";

const useStyles = makeStyles(theme => ({
  appBar: {
    flexGrow: 1,
  },
  box: {
    flexGrow: 1,
  },
  title: {
    marginRight: 16
  }
}));

const navigationTitles = [
  {path: '/', title: 'Home'},
  {path: '/about', title: 'About'},
  {path: '/location', title: 'Location'},
  {path: '/organizer-info', title: 'Organizer Info'},
  {path: '/form', title: 'Form'},
  {path: '/speech-info', title: 'Speech Info'},
]

export default function Header(props) {
  const {height = 64, onContactClick, ...rest} = props;

  const classes = useStyles();

  return (
    <header {...rest}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar style={{height: height}}>
          <Box display='flex' alignItems="center" className={classes.box}>
            {navigationTitles.map((item, index) => (
              <MuiLink to={item.path} variant='body2' className={classes.title} key={index}>{item.title}</MuiLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
}
