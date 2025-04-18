import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import ProjectCard from '../ui/ProjectCard';
import ExperienceCard from '../ui/ExperienceCard';
import { GiPolarStar } from "react-icons/gi";
import InstaLinkedIn from '../ui/InstaLinkedIn';
import gsap from "gsap";
function Home() {

    const skill = [
        {
            Role:"Full Stack Developer",
            companyName:"Prodigy Infotech",
            date:"Aug-Sep 2024",
            type:"Internship",
            description:"Completed a full stack development internship at Prodigy Infotech, where I built a chatting app with Employee management and authentication and a local e-commerce website. Gained hands-on experience with full-stack development, authentication, and real-world project implementation.",
            skill:["HTML/CSS/JS","Express","MongoDB"],
            img:"node.svg"
        },
        {
            Role:"Web Developer",
            companyName:"CodeTech IT Solution",
            date:"Aug-Oct 2024",
            type:"Internship",
            description:"Completed a web development internship at CodeTech IT Solution, where I built a Todo List App and Ecommerce Component in a  website. Gained hands-on experience with full-stack development, and real-world project implementation.",
            skill:["HTML/CSS/JS","Express","MongoDB"],
            img:"js.svg"
        },
        {
            Role:"Braniwave Matrix Solution",
            companyName:"CodeTech IT Solution",
            date:"Sep-Feb 2024-25",
            type:"Internship",
            description:"Completed a web development internship at Brainwave Matrix Solution, Gained hands-on experience with full-stack development, and real-world project implementation.",
            skill:["HTML/CSs/JS","Express","MongoDB"],
            img:"html.svg"
        }
    ]
    
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
            description:"Real Estate website for listing property and agent appointment aloting them our property for faster progress."
        }
    ]
    const wordRef = useRef(null);
    const indexRef = useRef(0); // Track index without causing re-renders
    const intervalRef = useRef(null);    
  const words = ["Hello", "Welcome", "React", "GSAP"]; // your word list
    const [love, setLove] = useState(words[0]);
    

    useEffect(() => {
        const animateWord = () => {
          // Animate out
          gsap.to(wordRef.current, {
            y: 20,
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
            onComplete: () => {
              // Update text
              indexRef.current = (indexRef.current + 1) % words.length;
              setLove(words[indexRef.current]);
    
              // Animate in
              gsap.fromTo(
                wordRef.current,
                { y: -20, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1.2,
                  ease: "power2.out",
                }
              );
            },
          });
        };
    
        intervalRef.current = setInterval(animateWord, 4000);
    
        return () => {
          clearInterval(intervalRef.current);
          gsap.killTweensOf(wordRef.current); // Clean up GSAP animations
        };
      }, []);
      
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

    return (
    <>
        
        <Navbar targetRef={targetRef} showNav={showNav} setShowNav={setShowNav} isIntersecting={isIntersecting} />
        
        

        
        <motion.div  className='h-screen flex flex-col justify-center items-center ' >

           <h1 style={{fontFamily:'inter,sans-serif'}} className=' text-3xl md:text-[60px]  font-semibold '>Hi,I'm Azimuddeen Khan</h1> 
            <h1 className='text-[30px] font-light' >I am Mern Stack Developer</h1>
            <h1 className='py-2 flex gap-1 justify-center items-center'>Love to build
                 <motion.span ref={wordRef} className='bg-gradient-to-l   from-green-500 to-green-300 py-1 px-2 rounded shadow text-white font-semibold block transition-all ease-in-out duration-150' >
                    {love}
                </motion.span>
            </h1>

        </motion.div>
        <div>
        
        <div  className='text-black text-3xl font-bold p-4 flex justify-center flex-col md:flex-row  sticky top-0   h-screen bg-[#EFEFEF] ' >
            
            <div className=' w-full md:w-1/2'>
                <div>
                <img src='/self-Bsv3AQWc.svg' />
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
           <div className='flex flex-col mt-[5%] gap-10 md:gap-0  w-5/6'>

           <div className='flex w-full h-1/5 '>
                <div className='w-1/2 flex flex-col gap-1  '>
                    <h1 className='text-green-500 text-2xl md:text-4xl font-medium'>FEATURED PROJECTS</h1>
                    <p className='text-gray text-lg md:text-2xl font-thin'>Selected Works</p>
                </div>
                
                <div className='flex w-1/2 justify-center items-center p-6'>
                    <Link  to={'/project'} className='flex justify-center  items-center gap-2  font-thin text-lg hover:text-green-400 transition-all ease-linear duration-150 '><span className=' w-full flex justify-center items-center  font-thin text-sm md:text-lg hover:text-green-400 transition-all ease-linear duration-150 hover:underline underline-offset-6' >See Projects</span> <FaArrowRightLong/> </Link>
                </div>
            </div>
            <div className='flex flex-col gap-5 md:gap-4'>
                {
                    pn.map((data,index)=>{
                        return <ProjectCard key={index} no={index+1} projectName={data.projectName} description={data.description}  />
                    })
                }
            </div>
           </div>
        </div>
        <div className='text-white text-3xl font-bold p-4 flex flex-col justify-center items-start md:items-center  sticky  top-0  h-screen bg-[#0F1012]' >
            <div className=' w-full md:w-5/6 flex flex-col justify-center items-center h-2/3 md:h-2/6 '>
                <div className='flex w-full justify-center gap-2 md:gap-0'>
                    <p className=' text-xl md:text-lg flex justify-center items-center'>🎉</p>
                    <p className='text-green-300'>SUPER POWER</p>
                    <p className=' text-xl md:text-lg flex justify-center items-center'>🎉</p>
                </div>
                <div>
                    <p className='text-sm text-gray-300 font-normal'>Which i have</p>
                </div>
                <div className='w-full mt-10 flex justify-center items-center'>
                    <p className=' text-2xl md:text-4xl font-normal text-center'>Turning ideas into functional, user-friendly web experiences with a blend of logic, creativity, and innovation</p>
                </div>
                
            </div>
        <div className='w-full overflow-x-hidden  md:mt-10'>
                <motion.div initial={{x:1600}} animate={{x:-3600}} transition={{duration:25,repeat:Infinity, repeatType:"loop" ,ease:"linear"}}  className='p-4 w-full flex flex-row  items-center flex-nowrap gap-20  md:gap-30' >
                    <img className=' h-12 md:h-14' src='/skills/html.svg' />
                    <img className=' h-12 md:h-14' src='/skills/css.svg' />
                    <img className=' h-12 md:h-14' src='/skills/js.svg' />
                    <img className=' h-12 md:h-14' src='/skills/figma.svg' />
                    <img className=' h-12 md:h-14' src='/skills/express.svg' />
                    <img className=' h-12 md:h-14' src='/skills/next.svg' />
                    <img className=' h-12 md:h-14' src='/skills/node.svg' />
                    <img className=' h-12 md:h-14' src='/skills/react.svg' />
                    <img className=' h-12 md:h-14' src='/skills/mongo.svg' />
                    <img className=' h-12 md:h-14' src='/skills/postgresql.svg' />
                    <img className=' h-12 md:h-14' src='/skills/tailwind.svg' />
                    <img className=' h-12 md:h-14' src='/skills/html.svg' />
                    <img className=' h-12 md:h-14' src='/skills/css.svg' />
                    <img className=' h-12 md:h-14' src='/skills/js.svg' />
                    <img className=' h-12 md:h-14' src='/skills/figma.svg' />
                    <img className=' h-12 md:h-14' src='/skills/express.svg' />
                    <img className=' h-12 md:h-14' src='/skills/next.svg' />
                    <img className=' h-12 md:h-14' src='/skills/node.svg' />
                    <img className=' h-12 md:h-14' src='/skills/react.svg' />
                    <img className=' h-12 md:h-14' src='/skills/mongo.svg' />
                    <img className=' h-12 md:h-14' src='/skills/postgresql.svg' />
                    <img className=' h-12 md:h-14' src='/skills/tailwind.svg' />
                </motion.div>
        </div>
        </div>
        <div ref={container2Ref} className=' p-2 md:p-4 flex  justify-center   sticky top-0   h-screen bg-[#F2F2F4]' >
            <div className=' w-full md:w-5/6 flex flex-col justify-center gap-5 md:gap-10'>
            
                <div className='flex items-center'>
                <GiPolarStar className='text-green-600 text-xl md:text-2xl font-sans'/>
                    <h1 className='text-green-600 text-3xl md:text-5xl font-sans'>Experience</h1>
                </div>
                
                <div className='flex flex-col gap-2 md:gap-5 w-full'>
                    {
                        skill.map((data,i)=>{
                            return (
                                <ExperienceCard Role={data.Role}  companyName={data.companyName} date={data.date} type={data.type} description={data.description} skill={data.skill} img={data.img} key={i} />
                            )
                        })
                    }
                </div>
            
            </div>
        </div>
       
        <InstaLinkedIn/>

        </div>
    </>
  )
}

export default Home
