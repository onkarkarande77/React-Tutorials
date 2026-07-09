import React, { useState } from 'react'

const  from_Handaling = () => {
  // const [name, setname] = useState('');
  // const [email, setemail] = useState('');
  // const [password, setpassword] = useState('');

  const [formData, setformData] = useState({
    name:'',
    email:'',
    password:'',
    phone:'', 
  });
    
  const changeHandler=(e)=>{
    const{name,value}= e.target;

    setformData({...formData,[name]:value})
  }
   

   const onSubmitHandler=(e)=>{
    e.preventDefault();
    console.log(formData)
   }

   return (<>
    <form onSubmit={onSubmitHandler}>   <div>
     Name: <input onChange={changeHandler} name='name' value={formData.name} type="text"  /> 
     </div>  
     <br></br>
     <div>
     Email: <input onChange={changeHandler} name='email' value={formData.email} type="email"  />
     </div>   
     <br></br>
     <div>
     Password: <input onChange={changeHandler} name='password' value={formData.password} type="password"  />
     </div>   
     <br></br>
     <div>
     Phone: <input onChange={changeHandler} name='phone'  value={formData.phone} type="number"  />
     </div>  
     <div>
        <input type='submit' value="submit"/>  
        </div>
        </form>
  
       
      </>
     
    )





  // return (<>
  // <form onSubmit={onSubmitHandler}>   <div>
  //  Name: <input  onChange={(e)=> setname(e.target.value)} value={name} type="text"  /> 
  //  </div>  
  //  <br></br>
  //  <div>
  //  Email: <input onChange={(e)=>setemail(e.target.value)} value={email} type="email"  />
  //  </div>   
  //  <br></br>
  //  <div>
  //  Password: <input onChange={(e)=>setpassword(e.target.value)} value={password} type="password"  />
  //  </div>   
  //  <br></br>
  //  <div>
  //     <input type='submit' value="submit"/>  
  //     </div>
  //     </form>

     
  //   </>
   
  // )
}

export default  from_Handaling
