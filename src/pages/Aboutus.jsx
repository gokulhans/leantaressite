import React, { useEffect } from 'react'
import FeatureTwo from './../components/FeatureTwo';

function Aboutus() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [])
  return (
    <div className='pt-16'>
    <FeatureTwo />
    </div>
  )
}

export default Aboutus