import React from 'react'

const Map = () => {
    // const data=["Google","Microsoft","Apple","Facebook"]
    const smartPhone=[
       {id:1, model:'iphone 17 promax',img:"https://m.media-amazon.com/images/I/71JGCn1z1TL._AC_UY327_FMwebp_QL65_.jpg" },
       {id:2, model:'iphone 15 promax',img:"https://m.media-amazon.com/images/I/618vU2qKXQL._AC_UY327_FMwebp_QL65_.jpg" },
       {id:3, model:'iphone 14 promax',img:"https://m.media-amazon.com/images/I/71R8VsJ07nL._AC_UY327_FMwebp_QL65_.jpg" }
    ]
  return (
      <>
        <div>
           {smartPhone.map((data)=>(<div key={data.id}>
                <img src={data.img}></img>
                <h3>{data.model}</h3>
           </div>))}
             {/* {data.map((element,index)=>{
                <div key={index}>
                    <h1>{element}</h1>
                </div>
             })}  */}
        </div>
     
     
     </>
  )
}

export default Map
