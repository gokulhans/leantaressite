import React, { useEffect } from 'react'
import FeatureTwo from './../components/FeatureTwo';
import Feature from './../components/Clients';

function Services() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior:'smooth'
    });
  }, [])
  return (
    <div className='pt-16'>
      <FeatureTwo />
    </div>
  )
}

export default Services