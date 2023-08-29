import { useState } from 'react'
import './App.css'
import Login from '../components/Login'
import { Navbar } from '../components/Navbar'

function App() {
  return (
    <div className='welcome'>
      <Navbar />
      <h1>Welcome to Stranger's Things</h1>
      <Login />
    </div>
  )
}

export default App
