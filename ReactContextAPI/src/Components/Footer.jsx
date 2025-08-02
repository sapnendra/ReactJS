import React, { useContext } from 'react'
import { DataContext } from '../context/Usercontext'

const Footer = () => {
    const data = useContext(DataContext)

  return (
    <div>
      <h1>City : {data.city}</h1>
    </div>
  )
}

export default Footer
