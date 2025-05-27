import { useState } from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from './pages/home'
import Destination from './pages/destination/Destination'
import Destination_lieu from './pages/destination/Destination_lieu'
import NavBar from './components/Nav'
import CrewMate from './pages/crew/CrewMate'
import Crew from './pages/crew/Crew'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Destination' element={<Destination/>}>
          <Route index element={<Navigate to="MOON" replace/>}/>
          <Route path=':destination' element={<Destination_lieu/>}/>
        </Route>
        <Route path='/Crew' element={<Crew/>}>
          <Route index element={<Navigate to="Commander" replace/>}/>
          <Route path=':titre' element={<CrewMate/>}/>
        </Route>
        <Route path='/Tech'>
          <Route index element={<Navigate replace/>}/>
          <Route path=':tech' element={<CrewMate/>}/>
        </Route>
        <Route path='*' />
      </Routes>
    </>
  )
}

export default App
