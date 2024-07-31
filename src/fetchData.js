import React, { useEffect, useState } from "react"
import './App.css';

function FetchData() {
    const [name,setName] = useState([]);
  
    useEffect(()=>{
      names()
    },[])
  
    const names = async () => {
      const responce = await fetch('https://jsonplaceholder.typicode.com/users/');
  
      setName(await responce.json())
    }
    return(
      <div>
        <h1> Name mql mql </h1>
        <ol className="App, mql">
  
          {name.map((data, index )=> {
            return(
              <>
               <li key={index}>{data.name} </li>
               <li  key={index}> {data.username}</li>
               <li  key={index}> {data.email}</li>
               <li  key={index}> {data.address.street}</li><br></br>
                                                             
             
             
           
            </>
            )
          })}
        </ol>
      </div>
    )
  
  }
  
  export default FetchData;
  