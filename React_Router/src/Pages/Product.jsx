import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
       <h1>Welcome to Product Compp</h1>
       <div>
        <h2>Product Page</h2>
        <nav>
            <Link to="phones">Phones</Link>|
            <Link to="laptops">Laptops</Link>|{""}

            <Link to="camera">Camera</Link>
        </nav>
        <Outlet/>
       </div>
    </div>
  )
}

export default Product
 