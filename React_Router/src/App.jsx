 import React from 'react'
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
 import Home from './Pages/Home';
 import Contact from './Pages/Contact';
 import About from './Pages/About';
 import Navbar from './Componemts/Navbar';
import User from './Pages/User';
import Dynamic_User from './Pages/Dynamic_User';
import Nav from './Componemts/Nav';
function App() {

  return (
    <>
       <Router>
         {/* <Navbar/> */}
         <Nav/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/user/' element={<User/>}/>
          <Route path='/user/:id' element={<Dynamic_User/>}/>
          <Route path="*" element={<h1>Enter Correct URL</h1>}/>
          
         </Routes>
       </Router>
    </>
  )
}

export default App
