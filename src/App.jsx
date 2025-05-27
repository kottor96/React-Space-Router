import { useState } from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from './pages/home'
import Destination from './pages/destination/Destination'
import Destination_lieu from './pages/destination/Destination_lieu'
import NavBar from './components/Nav'
import CrewMate from './pages/crew/CrewMate'
import Crew from './pages/crew/Crew'
import TechMoushou from './pages/TechMoushou/TechMoushou'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Destination' element={<Destination/>}>
          <Route index element={<Navigate to="MOON"/>}/>
          <Route path=':destination' element={<Destination_lieu/>}/>
        </Route>
        <Route path='/Crew' element={<Crew/>}>
          <Route index element={<Navigate to="Commander"/>}/>
          <Route path=':titre' element={<CrewMate/>}/>
        </Route>
        <Route path='/Tech'>
          <Route index element={<Navigate to="Launch vehicle"/>}/>
          <Route path=':tech' element={<TechMoushou/>}/>
        </Route>
        <Route path='*' />
      </Routes>
    </>
  )
}

export default App
