import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { TbUserEdit } from 'react-icons/tb';
import { RxCross2 } from "react-icons/rx";
function Navbar({targetRef,isIntersecting,showNav,setShowNav}) {
  return (
    <>
        <nav ref={targetRef}   className={`  z-2 backdrop-blur-2xl fixed top-0 p-4 w-full flex justify-between md:justify-center items-center`}>
            <div className=' w-full md:w-1/2 flex justify-between' >
                <div className=' hidden md:flex justify-evenly w-3/6'> 
                    <Link path={'/'} className={`${isIntersecting ? 'text-green-400' : 'text-black' }  font-semibold`}>Home</Link>
                    <Link path={'/'} className={`${isIntersecting ? 'text-green-400' : 'text-black' }  font-semibold`}>Project</Link>
                    <Link path={'/'} className={`${isIntersecting ? 'text-green-400' : 'text-black' }  font-semibold`}>About</Link>
                    <Link path={'/'} className={`${isIntersecting ? 'text-green-400' : 'text-black' }  font-semibold`}>Contact</Link>
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
        
        

        <nav className={` ${showNav ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 ' } transition-all ease-in-out duration-300 flex flex-col md:hidden w-full h-screen z-50 absolute top-0 bg-green-400`} >
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
    </>
  )
}

export default Navbar
