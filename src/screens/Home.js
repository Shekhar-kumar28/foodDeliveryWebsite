import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Crousal from '../components/Crousal'

const Home = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div className='mt-2'><Crousal/></div>
      <div className='m-3'><Cards/></div>
      <div className='m-3'><Cards/></div>
      <div className='m-3'><Cards/></div>
      <div className='m-3'><Cards/></div>
      <div className='m-3'><Cards/></div>
      <div className='m-3'><Cards/></div>
      <div><Footer /></div>
    </div>
  )
}

export default Home
