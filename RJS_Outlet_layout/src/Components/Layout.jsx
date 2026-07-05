import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
     <div>
      <header>
           <h1>My Strore</h1>
           <nav>
              <Link to={'/'}>Home</Link>|{" "}
              <Link to={'/about'}>About</Link>|{" "}
              <Link to={'/products'}>Products</Link>|{" "}
           </nav>
      </header>
      <main>
        <Outlet/>
      </main>

      <footer>
        <p>my shop footer</p>
      </footer>
     </div>
      
    </>
  )
}

export default Layout
