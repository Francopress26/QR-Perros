import React from 'react'
import Nav from "../../components/navbar/navbar.jsx"

const MascotLayout = ({children,params}) => {

  return (
    <>
    <Nav ></Nav>
    {children}

    </>
  )
}

export default MascotLayout