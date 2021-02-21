import React from "react"
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({}));

const conventionData = [
  {
    title: "ISIVC'2020 - International Symposium on Signal, Image, Video and Communications",
    url: 'https://www.imt-atlantique.fr/en/the-school/events/conferences/isivc-2020-international-symposium-signal-image-video-and-communications'
  },
  {
    title: "ISIVC'2020 - International Symposium on Signal, Image, Video and Communications",
    url: 'https://www.imt-atlantique.fr/en/the-school/events/conferences/isivc-2020-international-symposium-signal-image-video-and-communications'
  },
  {
    title: "ISIVC'2020 - International Symposium on Signal, Image, Video and Communications",
    url: 'https://www.imt-atlantique.fr/en/the-school/events/conferences/isivc-2020-international-symposium-signal-image-video-and-communications'
  },
  {
    title: "ISIVC'2020 - International Symposium on Signal, Image, Video and Communications",
    url: 'https://www.imt-atlantique.fr/en/the-school/events/conferences/isivc-2020-international-symposium-signal-image-video-and-communications'
  },
  {
    title: "ISIVC'2020 - International Symposium on Signal, Image, Video and Communications",
    url: 'https://www.imt-atlantique.fr/en/the-school/events/conferences/isivc-2020-international-symposium-signal-image-video-and-communications'
  },
]

const Location = () => {
  const classes = useStyles();
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
              <a href={item.url} target="_blank">{item.title}</a>
            </Box>
          )
        })}
      </Box>
    </>
  )
}

export default Location
