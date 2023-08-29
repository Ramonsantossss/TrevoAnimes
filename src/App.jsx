import React from 'react'

import './App.scss'
import Home from './pages/Home/Home'
import Navbar from './companents/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
   <React.Fragment>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<Home/>} />
        </Routes>
      </div>
   </React.Fragment>
  )
}

export default App
