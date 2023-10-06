import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function Text() {

    const [prompt,setPrmpt]=useState("")
    const [response,setResponse]=useState("")
//    console.log(prompt)
    const text=`imagine you are a teacher, and you have to teach ${prompt}  in java to a newbie so now you job is to well articulate and prepare all the resource including Youtube links and bloges which the newbie should have to get deep understanding of ${prompt} in java.`
    const handleSubmit=(e)=>{
        e.preventDefault()

    axios(`http://localhost:8080/bot/chat?prompt=${text}`)
    .then((res)=>{
        console.log(res.data)
        setResponse(res.data)})
    .catch((err)=>setResponse(err.message))
    }
  return (
    <div>
        <input type='text' placeholder='Prompt' onChange={(e)=>setPrmpt(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>

       
           <p>{response}</p>
        
       

    </div>
  )
}
