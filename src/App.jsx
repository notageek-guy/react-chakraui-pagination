
import React from 'react'
import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
