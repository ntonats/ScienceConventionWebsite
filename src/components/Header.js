import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import MuiLink from "./utility/MuiLink";
import Cookies from "js-cookie";

const useStyles = makeStyles(() => ({
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
  const [titles, setTitles] = useState()

  useEffect(() => {
    if (Cookies.get('JWT')) {
      setTitles(navigationTitles)
    } else {
      setTitles([
        {path: '/', title: 'Home'},
        {path: '/about', title: 'About'},
        {path: '/location', title: 'Location'},
        {path: '/organizer-info', title: 'Organizer Info'},
        {path: '/form', title: 'Form'},
      ])
    }
  }, [])

  const {height = 64, onContactClick, ...rest} = props;

  const classes = useStyles();

  return (
    <header {...rest}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar style={{height: height}}>
          <Box display='flex' alignItems="center" className={classes.box}>
            {titles && titles.map((item, index) => (
              <MuiLink to={item.path} variant='body2' className={classes.title} key={index}>{item.title}</MuiLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
}
