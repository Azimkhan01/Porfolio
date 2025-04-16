import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { TbUserEdit } from 'react-icons/tb';
import { RxCross2 } from "react-icons/rx";
function Home() {

    const containerRef  = useRef(null)
    const targetRef = useRef(null)
    const container2Ref = useRef(null)
    const [isIntersecting, setIsIntersecting] = useState(false);
    const[showNav , setShowNav] = useState(false)
    useEffect(() => {
       
        window.addEventListener('scroll',(e)=>{
            console.log(window.scrollY)
            const rect = containerRef.current.getBoundingClientRect()
            const rect2 = container2Ref.current.getBoundingClientRect()
            console.log(rect)
            if(rect.y == 0   )
            {
                console.log("true")
                setIsIntersecting(true)
            }else{
                setIsIntersecting(false)
            }

            if(rect2.y ==0)
                {
                    setIsIntersecting(false)
                }
        })
       
    }, []);

    
      
    useEffect(()=>{})

    return (
    <>
        <nav ref={targetRef}   className={`  z-2 backdrop-blur-2xl fixed top-0 p-4 w-full flex justify-between md:justify-center items-center`}>
            <div className=' w-full md:w-1/2 flex justify-between' >
                <div className=' hidden md:flex justify-evenly w-3/6'> 
                    <Link path={'/'} className={`${isIntersecting ? 'text-white' : 'text-black' }  font-semibold`}>Home</Link>
                    <Link path={'/'} className={`${isIntersecting ? 'text-white' : 'text-black' }  font-semibold`}>Project</Link>
                    <Link path={'/'} className={`${isIntersecting ? 'text-white' : 'text-black' }  font-semibold`}>About</Link>
                    <Link path={'/'} className={`${isIntersecting ? 'text-white' : 'text-black' }  font-semibold`}>Contact</Link>
                </div>
                <div className='flex gap-5 '>
                    <div className='bg-green-400 active:bg-white  hover:bg-white transition-all ease-linear duration-100 flex justify-center items-center p-2 rounded shadow'>
                        <a href='https://github.com/Azimkhan01' className='text-xl' target='_blank'><LuGithub/></a>
                    </div>
                    <div className='bg-green-400 active:bg-white  hover:bg-white transition-all ease-linear duration-100 flex justify-center items-center p-2 rounded shadow'>
                        <a href="https://www.linkedin.com/in/azimuddeen-khan/" className='text-xl' target='_blank'><RiLinkedinLine/></a>
                    </div>
                </div>
                <div className='bg-green-400 active:bg-white  hover:bg-white transition-all ease-linear duration-100 flex md:hidden justify-center items-center p-2 rounded shadow'>
                    <button onClick={()=>{setShowNav(true)}} ><GiHamburgerMenu className='text-xl'/></button>
                </div>
            </div>
        </nav>
        
        

        <nav className={` ${showNav ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0' } transition-all ease-in-out duration-300 flex flex-col md:hidden w-full h-screen z-50 absolute top-0 bg-green-400`} >
                  <div className='w-full p-4 flex justify-between border-b-2'>
                    <div > 
                        <h1 className='text-3xl'>Navigation</h1>
                    </div>
                    <div>
                        <button onClick={()=>{setShowNav(false)}}><RxCross2 className='text-2xl shadow p-1 rounded' /></button>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center p-4' >
                        <Link path={'/'} className={`${isIntersecting ? 'text-white' : 'text-black' }  font-semibold border-b-1 w-full px-4 py-2`}> 01 Home</Link>
                        <Link path={'/'} className={`${isIntersecting ? 'text-white' : 'text-black' }  font-semibold border-b-1 w-full px-4 py-2`}> 02 Project</Link>
                        <Link path={'/'} className={`${isIntersecting ? 'text-white' : 'text-black' }  font-semibold border-b-1 w-full px-4 py-2`}> 03 About</Link>
                        <Link path={'/'} className={`${isIntersecting ? 'text-white' : 'text-black' }  font-semibold border-b-1 w-full px-4 py-2`}> 04 Contact</Link>
                  </div>
        </nav>
        

        
        <div className='h-screen' >

        </div>
        <div>
        
        <div  className='text-black text-3xl font-bold p-4 flex justify-center items-center sticky top-0   h-screen bg-[#EFEFEF]' ><p>White</p></div>
        <div ref={containerRef} className='text-white text-3xl font-bold p-4 flex justify-center items-center sticky top-0   h-screen bg-[#161719]' ><p>Black - Light</p></div>
        <div className='text-white text-3xl font-bold p-4 flex justify-center items-center sticky  top-0  h-screen bg-[#0F1012]' ><p>Black</p></div>
        <div ref={container2Ref} className='text-gray-900 text-3xl font-bold p-4 flex justify-center items-center sticky top-0   h-screen bg-[#F2F2F4]' ><p>White</p></div>
        <div className='text-white text-3xl font-bold p-4 flex justify-center items-center sticky top-0   h-screen bg-[#86EFAC]' ><p>Instagram and LinkedIn</p></div>
        </div>
    </>
  )
}

export default Home
