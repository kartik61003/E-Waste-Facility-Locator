import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import './style/App.css'

const Layout = () => {
  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
     </>
  )
}

export default Layout
