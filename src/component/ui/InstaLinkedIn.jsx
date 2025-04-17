import React, { useRef, useState } from 'react'
import {motion} from 'motion/react'
function InstaLinkedIn() {
    const lastContainer = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    return (
    
            <>
            <div className='text-white text-3xl font-bold p-4 flex justify-center items-center outline-offset-0 outline-8 outline-green-400  rounded-t-[25%] sticky top-0   h-auto bg-[#86EFAC]' >

                <div ref={lastContainer} className='w-full flex flex-col justify-center items-center p-6 '>
                    <motion.div 
                        drag 
                        dragConstraints={lastContainer} 
                        animate={position} 
                        transition={{ type: "spring", stiffness: 300 }} 
                        onDragEnd={() => {setPosition({ x: 0, y: 0 });}} 
                        className="flex justify-center items-center w-full ">
                            <a 
                                className="w-full text-shadow text-5xl md:text-8xl font-semibold text-center text-black" 
                                href="/">
                                    LINKEDIN
                            </a>
                     </motion.div>
                    <motion.div 
                        drag 
                        dragConstraints={lastContainer} 
                        animate={position} 
                        transition={{ type: "spring", stiffness: 300 }} 
                        onDragEnd={() => {setPosition({ x: 0, y: 0 });}} 
                        className='flex justify-center items-center w-full'>
                            <a 
                                className=' w-full  text-shadow text-5xl md:text-8xl  font-semibold text-center text-black' 
                                href='/'>
                                    INSTAGRAM
                            </a>
                    </motion.div>
                </div>

            </div>
    </>
  )
}

export default InstaLinkedIn
