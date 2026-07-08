import React from 'react'

const Events = () => {
    const showAlert=()=>{
        alert("This my new brand new alert")
      }
  return (<>
      <h1>Events</h1>
      <button onClick={showAlert}>click</button>
    </>
  )
}

export default Events
