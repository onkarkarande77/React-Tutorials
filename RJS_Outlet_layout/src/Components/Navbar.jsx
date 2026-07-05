import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div style={{background:'pink', padding:'10px',marginBottom:'100 px'}}>
          <nav>
            <Link to={'/'}>Home</Link> | {" "}
            <Link to={'/about'}>About</Link> | {" "}
            <Link to={'/products'}>Products</Link> | {" "}
          </nav>
         
      
    </div>
    </>
  )
}

export default Navbar
