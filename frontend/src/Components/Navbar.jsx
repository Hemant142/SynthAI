import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Sign up</Link>
        <Link to={"/text"}>Text</Link>
        <Link to={"/display"}>Display</Link>
    </div>
  )
}
