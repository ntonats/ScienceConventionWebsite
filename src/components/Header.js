import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {MailOutline} from "@material-ui/icons";
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

  }
}));

const navigationTitles = [
  {path: '/', title: 'Home'},
  {path: '/about', title: 'About'},
  {path: '/location', title: 'Location'},
  {path: '/organizer-info', title: 'Organizer Info'},
  {path: '/', title: 'Form'},
  {path: '/', title: 'Home'},
]

export default function Header(props) {
  const {height = 64, onContactClick, ...rest} = props;

  const classes = useStyles();

  return (
      <header {...rest}>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar style={{height: height}}>
            <Box display='flex' alignItems="center" className={classes.box}>
              <MuiLink to="/" variant='body2' className={classes.title}>Home</MuiLink>
              <MuiLink to="/About" variant='body2' className={classes.title}>About</MuiLink>
            </Box>
          </Toolbar>
        </AppBar>
      </header>
  );
}
