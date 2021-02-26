import React from "react"
import Box from "@material-ui/core/Box";

const conventionData = [
  'https://group.acm.org/conferences/group20/',
  'https://invisibletalks.com/conference-2020-std/',
  'http://uxcampdc.com/index.html'
]

const Location = () => {
  return (
    <>
      <Box display='flex' justifyContent='center'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22374.061530504445!2d-73.562337!3d45.494824!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb732a719a45c45f6!2s%C3%89cole%20de%20technologie%20sup%C3%A9rieure%20%C3%89TS!5e0!3m2!1sen!2sus!4v1613923491700!5m2!1sen!2sus"
          width="800" height="600" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false"
          title='map'/>
      </Box>
      <Box display='flex' flexDirection='column' alignItems='center'>
        {conventionData.map((item, index) => {
          return (
            <Box key={index}>
              <a href={item} target="_blank">{item}</a>
            </Box>
          )
        })}
      </Box>
    </>
  )
}

export default Location
