import React from 'react'
import { useState    } from 'react';

const UseState = () => {
   //    let counter=0;
    
   const[counter,setCounter]=useState(0);
     
    const increase=()=>{
         setCounter(counter+1);
         
    }

    const decrease=()=>{
        setCounter(counter-1);
       
    }
    
  return (<>
     <h1>Counter:{counter}</h1>
     <button onClick={increase}>Increase</button>
     <br></br>
     <button onClick={decrease}>dicreases</button>
    </>
  )
}

export default UseState
