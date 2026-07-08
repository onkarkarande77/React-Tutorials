import React from 'react'

const Filter = () => {
    const person=[
        {id:1,name:"Ram",active:true},
        {id:2,name:"Sham",active:false},
        {id:3,name:"Rakesh",active:true},
        {id:4,name:"Rajesh",active:true}]
    
       // const active_person=person.filter(data=>!data.active)
         
 return (
    <div>
        {person
        .filter((data) => data.active).map((item)=>(<div key={item.id}><h1>{item.name}</h1></div>)) }
    </div>
  )
}

export default Filter
