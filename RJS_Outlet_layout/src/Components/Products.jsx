import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to={'phone'}>Phones</Link> |{" "}
          </li>

          <li>
            <Link to={'camera'}>Camera</Link> |{" "}
          </li>

          <li>
            <Link to={'laptop'}>Laptops</Link> |{" "}
          </li>
        </ul>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Products