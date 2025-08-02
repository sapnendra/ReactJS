import React, { useContext } from 'react'
import { DataContext } from '../context/Usercontext'

const Hero = () => {
    const data = useContext(DataContext);

  return (
    <div>
      <h1>Age : {data.age}</h1>
    </div>
  )
}

export default Hero
