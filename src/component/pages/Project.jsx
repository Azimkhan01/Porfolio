import React, { useRef, useState } from 'react'
import Navbar from '../Navbar'
import ProjectAlPorject from '../ui/projectAlPorject'
import InstaLinkedIn  from '../ui/InstaLinkedIn'
function Project() {
    const targetRef = useRef(null)
        const[showNav , setShowNav] = useState(false)
        const isIntersecting = false
    
  return (
    <>
        <Navbar targetRef={targetRef} showNav={showNav} setShowNav={setShowNav} isIntersecting={isIntersecting} />
        
        <div className='h-screen flex justify-center items-center'>
            <h1 className=' text-[60px] md:text-[150px]  text-[#262626]' >PROJECT<span className='text-orange-400'>.</span></h1>
        </div>

        <div className='h-screen  items-center'>
            <ProjectAlPorject/>
            <InstaLinkedIn/>
        </div>

    

    </>
  )
}

export default Project
