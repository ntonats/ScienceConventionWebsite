import React from "react"
import SEO from "../components/utility/SEO"
import Typography from "@material-ui/core/Typography";
import MuiLink from "../components/utility/MuiLink";
import Box from "@material-ui/core/Box";
import PersonComponent from "../components/PersonComponent";
import TestIcon from '../images/gatsby-icon.png'
import ConventionImage from '../images/tech-convention.jpg'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    transition: '0.5s all ease-in-out',
    "&:hover": {
      transform: 'scale(1.5)'
    },
  }
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Box style={{
      }}>
        hello
      </Box>
    </>
  )
}

export default About
