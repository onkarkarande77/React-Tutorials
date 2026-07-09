import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffect = () => {
  const[counter,setCounter]=useState(0)
  useEffect(()=>{
  console.log("use effect is running")
  document.title=counter;
     
  },[counter])//dependency array

  return (
    <div>
      <h1>Counter={counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Increase</button>
      <button onClick={()=>setCounter(counter-1)}>Decreases</button>
    </div>
  )
}

export default UseEffect
