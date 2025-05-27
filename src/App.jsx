import { useState } from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from './pages/home'
import Destination from './pages/destination/Destination'
import Destination_lieu from './pages/destination/Destination_lieu'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Destination' element={<Destination/>}>
          <Route index element={<Navigate to="MOON" replace/>}/>
          <Route path=':destination' element={<Destination_lieu/>}/>
        </Route>
        <Route path='/Crew'>
          <Route path=':crew'/>
        </Route>
        <Route path='/Tech'>
          <Route path=':tech'/>
        </Route>
      </Routes>
    </>
  )
}

export default App
