import Lenis from 'lenis'
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home';
import Project from './component/pages/Project';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
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
        <Route path='/about' element={<><About/></>} />
        <Route path='/contact' element={<><Contact/></>} />
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
