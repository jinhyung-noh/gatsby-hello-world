import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

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
