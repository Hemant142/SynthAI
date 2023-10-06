import React from 'react'
import {Route, Routes} from "react-router-dom"
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Text from '../Pages/Text'
import Display from '../Pages/Display'
export default function AllRoutes() {
  return (
    <div>
<Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/text' element={<Text/>}/>
    <Route path='/display' element={<Display/>}/>
</Routes>
    </div>
  )
}
