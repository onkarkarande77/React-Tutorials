import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Layout from './Componemts/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product';
import Laptops from './Pages/Laptops'
import Phones from './Pages/Phones'
import Camera from './Pages/Camera'
import Nav from './Componemts/Nav'

const Index = () => {
  return (
    <>
      <Router>
         {/* <Navbar/> */}
          {/* <Nav/>  */}
         <Routes>
          <Route path='/' element={<Layout/>}>
             <Route index element={<Home/>}></Route>
             <Route path="about" element={<About/>}/> 

             <Route path="products" element={<Product/>} >
             <Route path="phones" element={<Phones/>} />
             <Route path="laptops" element={<Laptops/>} />
             <Route path="camera" element={<Camera/>} />
             </Route>
          </Route>
           
         </Routes>
       </Router>
    </>
  )
}

export default Index
