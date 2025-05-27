import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Destination'>
          <Route path=':destination'/>
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
