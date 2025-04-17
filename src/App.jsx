import Lenis from 'lenis'
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home';
import Project from './component/pages/Project';
function App() {
  useEffect(()=>{
    const lenis = new Lenis();
    function raf(time)
    {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  },[])
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Home/></>} />
        <Route path='/project' element={<><Project/></>} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
