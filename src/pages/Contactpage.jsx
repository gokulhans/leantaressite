import React, { useEffect } from 'react'
import Contact from './../components/Contact';

function Contactpage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [])
  return (
    <Contact />
  )
}

export default Contactpage