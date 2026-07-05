 import React from 'react'
import { Route, BrowserRouter as Routers,Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Products from './Components/Products'
import Navbar from './Components/Navbar'
import Camera from './Pages/Camera'
import Laptops from './Pages/Laptops'
import Phone from './Pages/Phone'
import Layout from './Components/Layout'
 
 const App = () => {
   return (
     <div>
       <Routers>
          {/* <Navbar/> */}
            <Routes>
               <Route path='/' element={<Layout/>}>

                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='products' element={<Products/>}>
                <Route path='camera' element={<Camera/>}/>
                <Route path='laptop' element={<Laptops/>}/>
                <Route path='phone'  element={<Phone/>}/>
                </Route>
               </Route>
            </Routes>
       </Routers>
       
     </div>
   )
 }
 
 export default App
 