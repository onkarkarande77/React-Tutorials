import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'


const Dynamic_User = () => {
    let {id}=useParams();
    const user=[
        {id:1,name:'superman',gmail:'super@gmail.com',age:20},
        {id:2,name:'spiderman',gmail:'spider@gmail.com',age:20},
        {id:3,name:'batman',gmail:'bat@gmail.com',age:20},
        {id:4,name:'ironman',gmail:'iron@gmail.com',age:20},
    ]

    const specific_user=user.find(data=>data.id ==id);

    const loction=useLocation();
    const navigate=useNavigate();
  return (    
    <div>
      <h1>Name={specific_user.name}</h1>
      <h1>Email={specific_user.gmail}</h1>
      <h1>Age={specific_user.age}</h1>

    {location.pathname==`/user/${id}` && <div><h1>Hello {specific_user.name }</h1></div>}  
    
    <div>
         
    </div>
     <button onClick={()=>navigate('/')}>Go to Gome page</button>
    </div>
  )
}

export default Dynamic_User
