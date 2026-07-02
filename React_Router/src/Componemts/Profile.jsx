import React from 'react'
import { useLoaderData } from 'react-router-dom'
const Profile = () => {
    const user=useLoaderData();
  return (
    <>
       <div className="profiel-card">
          <h2>Git Hub </h2>
          <img src={user.avatar_url} alt='av' width={100}/>
       </div>
    </>
  )
}

export default Profile
