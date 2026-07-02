import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {
    const[isLogin,setisLogin]=useState(false);

    const location=useLocation();
    const navigate=useNavigate();

    const handleLog=() =>{
        setisLogin(true);
        navigate('/user'); 
    }

    const handleLogout=()=>{
        setisLogin(false);
        navigate('/home');
    }
  return (
    <div>
         <ul> 
            <li>
                <Link to='/'>Home</Link>
            </li>
            {isLogin && ( <>
                <li>
                <Link to='/user'>User</Link>
            </li>
            <li>
                <button onClick={handleLogout}>LogOut </button>
            </li>
            </>)}
           {!isLogin && (<>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <button onClick={handleLog}>Login</button>
            </li>
           
           </>)}
            
           
         </ul>
    </div>
  )
}

export default Nav
