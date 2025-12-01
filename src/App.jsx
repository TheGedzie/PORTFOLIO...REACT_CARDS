import { useState } from 'react'
import { MainLayout } from './Components/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/forbidden' element={<div>forbidden !!!!</div>} />
        <Route path='/addquestion' element={<div>add question</div>} />
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
