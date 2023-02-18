import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Common/Footer/Footer'
import Header from '../Common/Header/Header'

const LayOut = () => {
  return (
    <div>
      <Header />
      <div className=" min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default LayOut
