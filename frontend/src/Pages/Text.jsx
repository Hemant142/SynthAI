import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function Text() {
    const [prompt,setPrmpt]=useState("")
    const [response,setResponse]=useState("")
//    console.log(prompt)
    const handleSubmit=(e)=>{
        e.preventDefault()

    axios(`http://localhost:8080/openai`, {headers:{
        "Prompt":prompt
    }})

    .then((res)=>setResponse(res.data))
    .catch((err)=>setResponse(err.message))
    }
  return (
    <div>
        <input type='text' placeholder='Prompt' onChange={(e)=>setPrmpt(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>

        {response.length>0?(<div>
            {response.map((ele)=>(<h1>{ele.data}</h1>))}
        </div>):(<div>
        <h1>No Data</h1>
        </div>)}

    </div>
  )
}
