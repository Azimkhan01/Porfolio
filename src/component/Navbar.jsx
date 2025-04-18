import React,{useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { LuGithub } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { TbUserEdit } from 'react-icons/tb';
import { RxCross2 } from "react-icons/rx";
import DownloadResume from './ui/DownloadResume';


function Navbar({targetRef,isIntersecting,showNav,setShowNav}) {
 
    const {pathname} = useLocation()
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    },[pathname])

    return (
    <>
        <nav ref={targetRef}   className={`  z-2 backdrop-blur-sm fixed top-0 p-4 w-full flex justify-between md:justify-center items-center`}>
            <div className=' w-full md:w-1/2 flex justify-between' >
                <div className=' hidden md:flex justify-evenly w-3/6'> 
                    <Link to={'/'} className={`${isIntersecting ? 'text-green-400' : 'text-black' }  font-semibold`}>Home</Link>
                    <Link to={'/project'} className={`${isIntersecting ? 'text-green-400' : 'text-black' }  font-semibold`}>Project</Link>
                    <Link to={'/about'} className={`${isIntersecting ? 'text-green-400' : 'text-black' }  font-semibold`}>About</Link>
                    <Link to={'/contact'} className={`${isIntersecting ? 'text-green-400' : 'text-black' }  font-semibold`}>Contact</Link>
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
        
        

        <nav className={` ${showNav ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 ' } transition-all ease-in-out duration-300 flex flex-col md:hidden w-full h-screen z-50 fixed top-0 bg-green-400`} >
                  <div className='w-full p-4 flex justify-between border-b-1'>
                    <div > 
                        <h1 className='text-3xl'>Navigation</h1>
                    </div>
                    <div>
                        <button onClick={()=>{setShowNav(false)}}><RxCross2 className='text-2xl shadow p-1 rounded' /></button>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center p-4' >
                        <Link to={'/'} className={`${isIntersecting ? 'text-white' : 'text-black' }  font-semibold border-b-1 w-full px-4 py-2`}> 01 Home</Link>
                        <Link to={'/project'} className={`${isIntersecting ? 'text-white' : 'text-black' }  font-semibold border-b-1 w-full px-4 py-2`}> 02 Project</Link>
                        <Link to={'/about'} className={`${isIntersecting ? 'text-white' : 'text-black' }  font-semibold border-b-1 w-full px-4 py-2`}> 03 About</Link>
                        <Link to={'/contact'} className={`${isIntersecting ? 'text-white' : 'text-black' }  font-semibold border-b-1 w-full px-4 py-2`}> 04 Contact</Link>
                  </div>
        </nav> 
        <div className='z-2 backdrop-blur-xs fixed bottom-0 w-full h-2 rounded-full md:h-4 ' />
        <DownloadResume/>        
    </>
  )
}

export default Navbar
