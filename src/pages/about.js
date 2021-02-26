import React from "react"
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";

const About = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography variant='h4' style={{textAlign: 'center', marginBottom: 32, maxWidth: 700}}>
        DesignTO Festival is Canada’s leading (and largest) annual design festival that celebrates design as a
        multidisciplinary form of creative thinking and making, with over 100 exhibitions and events forming Toronto’s
        design week, January 22-31, 2021.
      </Typography>
      <Typography variant='h5' style={{textAlign: 'center', marginBottom: 32, maxWidth: 700}}>
        Since 2011, DesignTO has been bringing communities together to celebrate design, by taking art and design out of
        the studio and into the urban realm.
      </Typography>
      <Typography variant='h5' style={{textAlign: 'center', marginBottom: 32, maxWidth: 700}}>
        In January 2020,
        the Festival featured 800+ artists and designers, and welcomed 160K+ visitors.
      </Typography>
    </Box>
  )
}

export default About
