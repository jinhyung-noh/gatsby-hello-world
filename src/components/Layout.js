import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

import "normalize.css"
import "../assets/css/main.css"

const Layout = props => {
  const { children } = props
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
