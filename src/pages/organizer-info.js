import React from "react"
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import PersonComponent from "../components/PersonComponent";
import Person1 from '../images/person-1.jpg'
import Person2 from '../images/person-2.jpg'
import Person3 from '../images/person-3.jpg'
import Person4 from '../images/person-4.jpg'

const useStyles = makeStyles(theme => ({}));

const personData = [
  {
    name: 'Patricia Reiners',
    image: Person1,
    text: 'Patricia Reiners is a freelance UX designer from Berlin. She develops interactive digital experiences for services and apps through easy-to-use, user-focused concepts.\n' +
      'Her focus is on innovation, prototyping, and research for immersive technologies such as augmented reality and virtual reality. Her past clients include Google, Adobe, and a long list of international agencies and start-ups.'
  },
  {
    name: 'Óscar Santos Pérez',
    image: Person2,
    text: 'Óscar SP makes websites and apps that are easy to use and meet company goals. He specializes in user research and agile methodologies. A certified OKR Champion, Óscar masters a methodology that combines the objectives of the company and its employees.\n' +
      'Before opening his own studio and dedicating himself to user experience, he worked as an art director and designer in advertising and design studios like Neolabels, Keaton, or SrBurns.\n' +
      'He has designed and improved digital products for clients like Iberia, Randstad, Kymco, Universidad Europea, Ecoalf, and Metrovacesa.'
  },
  {
    name: 'Mario Ferrer',
    image: Person3,
    text: 'Mario Ferrer is a UX Writer and part of the product team at Skyscanner, where he works with a wide variety of professional profiles such as Product Designers, UX Researchers, Developers, Product Managers, and more.\n' +
      'He is the creator of the UX Writers España group, where events, talks, and more are organized to give support to those starting out in the field, helping the role of the UX Writer to continue growing in Spanish-speaking countries.\n' +
      'Before working as a UX Writer, Mario worked as a Creative Copywriter in various advertising agencies in Mexico and Spain. Then, he got into the tech industry, as a copywriter but this time on the client-facing side in the branding and communications department. He has worked at King, on various mobile app games like Candy Crush Saga, Farm Heroes Saga, Bubble Witch 3, and many more.'
  },
  {
    name: 'Arturo Servín',
    image: Person4,
    text: 'Arturo Servín is a graphic designer specializing in web design and has been a web designer for a!\n' +
      'Design, in addition to Community Professional for Adobe Systems for two years, and professor at different universities in Mexico, including Miami Ad School Mexico City. Guest instructor of different educational institutions, such as the Universidad Iberoamericana, Universidad Anáhuac campus Cancún, Tecnológico de Monterrey, Universidad de las Américas in Puebla, Universidad Autónoma de Guadalajara, among others. Founder of his own studio focused on ecommerce , web design and branding .\n'
  },
]

const OrganizerInfo = () => {
  const classes = useStyles();
  return (
    <>
      <Box p={12} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        {personData.map((item, index) => {
          return (
            <PersonComponent name={item.name} text={item.text} image={item.image} key={index}/>
          )
        })}
      </Box>
    </>
  )
}

export default OrganizerInfo
