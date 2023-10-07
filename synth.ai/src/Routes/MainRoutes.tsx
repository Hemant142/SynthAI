import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Dashboard from '../Components/Dashboard'

function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
        
    </div>
  )
}

export default MainRoutes