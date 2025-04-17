import React, { useRef, useState } from 'react'
import Navbar from '../Navbar'
import InstaLinkedIn from '../ui/InstaLinkedIn'
function Contact() {

    const targetRef = useRef(null)
            const[showNav , setShowNav] = useState(false)
            const isIntersecting = false

  return (
    <>
     <Navbar targetRef={targetRef} showNav={showNav} setShowNav={setShowNav} isIntersecting={isIntersecting} /> 

     <div  className=' relative h-screen flex justify-center items-center'>
            <h1 className=' text-[55px] md:text-[150px]  text-[#262626]' > CONTACT <span className='text-orange-400'>.</span></h1>  
    </div>

    <div className=' bg-[#E8E2E2] h-screen sticky top-0 flex flex-col justify-center items-center gap-10 '>

        <div className=' w-3/6 md:w-1/6 bg-[#D4D4D4] rounded-full flex justify-center items-center hover:animate-pulse transition-all ease-in-out duration-200'><img className='w-6/6' src='/handshake.svg' alt='handShake'/></div>
        <div><h1 className='text-gray-600 text-2xl md:text-4xl font-bold'>Tell me about your next project</h1></div>
          <div className='flex gap-3'>
            <a className='px-6 py-3 rounded-3xl text-white font-semibold text-sm md:text-lg hover:animate-pulse  bg-[#000000c5]' href="mailto:someone@example.com">Email me</a>
            <a className='px-6 py-3 rounded-3xl text-white font-semibold text-sm md:text-lg hover:animate-pulse  bg-green-400 ' href='https://api.whatsapp.com/send?phone=917678084267&text=Hi%20wanna%20hire%20for%20freelancing'>Whatsapp</a>
          </div>
    </div>

    <InstaLinkedIn/>

    </>
  )
}

export default Contact
