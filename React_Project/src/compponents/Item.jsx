import React from 'react'

const Item = () => {
    const age=2;
    const aadhar=true;
    const email=false;
  return (<>
    <div>
            {(age>=18) ? (<><h1>u can drive</h1></>):(<><h1>u are not eligible</h1></>)  }
    </div>
     {aadhar && <h1>u ca open bank account</h1>}
     {email &&<h1>you can make youtube channer</h1>}

    </>
  )
}

export default Item

