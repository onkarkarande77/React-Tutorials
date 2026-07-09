import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";

const FetchData = () => {
 
    const [Api_data, setApi_data ] = useState([]);

 useEffect(() => {
   const fetchData=async ()=>{
      const api=await fetch("https://jsonplaceholder.typicode.com/todos")
      const data=await api.json();

      console.log("my data =",data);
      setApi_data(data);
   }
   fetchData();
 }, [])
 
  return (
    <div>
      {Api_data.map((items)=> (<div key={items.div}>
        <h2>{items.title}</h2>
      </div>) )}
    </div>
  )
}

export default FetchData
