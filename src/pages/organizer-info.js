import React from "react"
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import PersonComponent from "../components/PersonComponent";
import Ypo from '../images/ypo.jpg'

const useStyles = makeStyles(theme => ({}));

const personData = [
  {image: Ypo, text: 'test'},
  {image: Ypo, text: 'test'},
  {image: Ypo, text: 'test'},
  {image: Ypo, text: 'test'},
]

const OrganizerInfo = () => {
  const classes = useStyles();
  return (
    <>
      <Box p={12} display='flex' justifyContent='center'>
        {personData.map((item,index) => {
          return (
            <PersonComponent text={item.text} image={item.image} key={index}/>
          )
        })}
      </Box>
    </>
  )
}

export default OrganizerInfo
