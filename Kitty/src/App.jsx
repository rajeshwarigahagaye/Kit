import { useState } from 'react'
import React from 'react'
import './App.css'
import Search from './Components/Search'
import Header from './Components/Header.jsx'
import ComponentSwitcher from './Components/ComponentSwitcher.jsx'

function App() {


  return (
    <>

      <div className='root'>
        <div className="header"><Header /></div>
        <div className="bar"><Search /></div>
        <div className="main"><ComponentSwitcher /></div>
      </div>

    </>
  )
}

export default App
