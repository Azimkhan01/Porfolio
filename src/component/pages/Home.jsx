import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'motion/react'
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import ProjectCard from '../ui/ProjectCard';
function Home() {
    const [love,setLove] = useState("Website")
    const containerRef  = useRef(null)
    const targetRef = useRef(null)
    const container2Ref = useRef(null)
    const [isIntersecting, setIsIntersecting] = useState(false);
    const[showNav , setShowNav] = useState(false)
    const pn = [
        {
            projectName:"Gym Management",
            description:"Membership management that allow to handle member send mail delete arrangement and so on."
        },
        {
            projectName:"HomeQuest",
            description:"Real Estate website for listing property and agent appointment aloting them our property for faster progess."
        }
    ]
    useEffect(() => {
       
        window.addEventListener('scroll',()=>{
            const rect = containerRef.current.getBoundingClientRect()
            const rect2 = container2Ref.current.getBoundingClientRect()
            if(rect.y == 0   )
            {
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

    useEffect(() => {
        const word = ['Website', 'Api', 'Routes', 'Database'];
        let i = 0;
    
        const interval = setInterval(() => {
          setLove(word[i]);
          i = (i + 1) % word.length;  // This ensures i wraps back to 0 after reaching the last element
        }, 2000);
    
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      }, []); // Empty dependency array ensures it runs only once
      
    useEffect(()=>{})

    return (
    <>
        
        <Navbar targetRef={targetRef} showNav={showNav} setShowNav={setShowNav} isIntersecting={isIntersecting} />
        
        

        
        <motion.div  className='h-screen flex flex-col justify-center items-center ' >

           <h1 style={{fontFamily:'inter,sans-serif'}} className=' text-3xl md:text-[60px]  font-semibold '>Hi,I'm Azimuddeen Khan</h1> 
            <h1 className='text-[30px] font-light' >I am Mern Stack Developer</h1>
            <h1 className='py-2 flex gap-1 justify-center items-center'>Love to build
                 <motion.span  className='bg-green-400 py-1 px-2 rounded shadow text-white font-semibold block transition-all ease-in-out duration-150' >
                    {love}
                </motion.span>
            </h1>

        </motion.div>
        <div>
        
        <div  className='text-black text-3xl font-bold p-4 flex justify-center flex-col md:flex-row  sticky top-0   h-screen bg-[#EFEFEF] ' >
            
            <div className=' w-full md:w-1/2'>
                <div>
                <img src='/public/self-Bsv3AQWc.svg' />
                </div>    
            </div>

            <div className=' w-full md:w-1/2 flex flex-col justify-evenly'>
                <div className='flex flex-col gap-1'>
                    <p className='font-thin text-sm'>Overview</p>
                    <p className='text-green-500 text-sm font-mono'>Who am i</p>
                </div>
                <div className='w-full md:w-5/6'>
                    <h1 className='text-gray-500 leading-8 md:leading-15 text-left text-2xl md:text-5xl font-medium'>
                    I'm a full-stack developer passionate about building innovative web applications and digital experiences
                    </h1>
                </div>
                <div>
                    <Link className='text-sm text-green-500 rounded-4xl border-2  border-transparent hover:border-green-500  transition-all ease-linear duration-150 p-2' to={'/contact'}>Know more {'->'}</Link>
                </div>

            </div>

        </div>
        <div ref={containerRef} className='text-white  text-3xl font-bold p-4 flex justify-center   sticky top-0   h-screen bg-[#161719]' >
           <div className='flex flex-col mt-[10%]  w-5/6'>

           <div className='flex w-full h-1/5'>
                <div className='w-1/2 flex flex-col gap-1  '>
                    <h1 className='text-green-500 text-4xl font-medium'>FEATURED PROJECTS</h1>
                    <p className='text-gray text-2xl font-thin'>Selected Works</p>
                </div>
                
                <div className='flex w-1/2 justify-center items-center p-6'>
                    <Link  to={'/project'} className='flex justify-center  items-center gap-2  font-thin text-lg hover:text-green-400 transition-all ease-linear duration-150 '><span className='flex justify-center items-center  font-thin text-lg hover:text-green-400 transition-all ease-linear duration-150 hover:underline underline-offset-6' >See All Projects</span> <FaArrowRightLong/> </Link>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                {
                    pn.map((data,index)=>{
                        return <ProjectCard no={index+1} projectName={data.projectName} description={data.description}  />
                    })
                }
            </div>
           </div>
        </div>
        <div className='text-white text-3xl font-bold p-4 flex justify-center items-center sticky  top-0  h-screen bg-[#0F1012]' ><p>Black</p></div>
        <div ref={container2Ref} className='text-gray-900 text-3xl font-bold p-4 flex justify-center items-center sticky top-0   h-screen bg-[#F2F2F4]' ><p>White</p></div>
        <div className='text-white text-3xl font-bold p-4 flex justify-center items-center sticky top-0   h-screen bg-[#86EFAC]' ><p>Instagram and LinkedIn</p></div>
        </div>
    </>
  )
}

export default Home
