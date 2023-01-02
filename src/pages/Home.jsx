import React, { useEffect } from 'react'
import Hero from './../components/Hero';
import Feature from './../components/Feature';
import Project from './../components/Project';
import FeatureTwo from './../components/FeatureTwo';
import Clients from './../components/Clients';
import Cta from './../components/Cta';
import Status from './../components/Status';
import Portfolio from './../components/Portfolio';
import Contact from './../components/Contact';
import Testimonials from './../components/Testimonials';
import Faq from '../components/Faq';


function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [])

  return (
    <>

      <Hero />
      {/* <Feature /> */}
      <FeatureTwo />
      <Clients />
      <Cta />
      <Status />
      <Project />
      <Testimonials />
      <Portfolio />
      <Faq />
      <Contact />
    </>
  )
}

export default Home