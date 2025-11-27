import axios from 'axios'
import Brands from '../../Components/Carousel/Brands.jsx'
import Header from '../../Components/Header/Header.jsx'
import Hero from '../../Components/Hero/Hero.jsx'
import How from '../../Components/How/How.jsx'
import Why from '../../Components/Why/Why.jsx'
import Testmonial from '../../Components/Testmonial/Testmonial.jsx'
import Contact from '../../Components/Contact/Contact.jsx'
import { Link } from 'react-router-dom'
import Cars from '../../Components/Cars/Cars.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Cars/>
      <How />
      <Brands/>
      <Why />
      <Testmonial/>
      <Contact/>
    </>
  )
}
