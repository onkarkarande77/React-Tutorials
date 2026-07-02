import React from 'react'
import { Link } from 'react-router-dom'
const User = () => {
     
    const user=[
        {id:1,name:'superman',gmail:'super@gmail.com',age:20},
        {id:2,name:'spiderman',gmail:'spider@gmail.com',age:20},
        {id:3,name:'batman',gmail:'bat@gmail.com',age:20},
        {id:4,name:'ironman',gmail:'iron@gmail.com',age:20},
    ]
  return (
     <>
        {user.map((data) =><div key={data.id}>
            <Link to={`/user/${data.id}`}><h1>{data.name}</h1></Link>
        </div>)} 
     </>
  )
}

export default User
