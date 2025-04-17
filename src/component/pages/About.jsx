import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar'
import { motion } from "framer-motion";
import InstaLinkedIn  from '../ui/InstaLinkedIn'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
function About() {
    const targetRef = useRef(null)
            const[showNav , setShowNav] = useState(false)
            const isIntersecting = false
    const imageConstraintRef = useRef(null)
    const [tareef,setTareff] = useState("Skilled")
    const arrayOftareef = ["Skilled","Experience","Efficient","Impactful","Curious","Collaborative","Frontend","Backend","Full-Stack","Freelance",'Pixel-Perfect','Cutting-Edge','Scalable','Emphathetic','Versatile','Growth-Focused','Creative','Innovative','Dynamic','Interactive','Visionary','Passionate','Adaptive','Tech-Savvy','Problem Solving']
    useEffect(()=>{
      let i = 0
      setTimeout(()=>{
        setInterval(()=>{
           setTareff(arrayOftareef[i]) 
           if(i==arrayOftareef.length-1)
              i=0
           i++

        },1500)
      },2000)
    })


    const containerRef = useRef();

    useGSAP(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
        stagger: 0.5,
      });
    }, { scope: containerRef });



  return (
    <>
        <Navbar targetRef={targetRef} showNav={showNav} setShowNav={setShowNav} isIntersecting={isIntersecting} />
        
        <div ref={imageConstraintRef} className=' relative h-screen flex justify-center items-center'>
            <h1 className=' text-[55px] md:text-[150px]  text-[#262626]' >AZIMUDDEEN<span className='text-orange-400'>.</span></h1>
            <motion.div initial={{x:0,y:0}}  transition={{ease:"anticipate",delay:1,duration:2}} drag dragConstraints={imageConstraintRef} className=" border-8 border-white shadow rotate-30 absolute w-[200px] md:w-[300px] h-[300px] md:h-[400px] bg-center rounded-2xl bg-cover bg-[url('/about/image_1.jpg')]">
            </motion.div> 
            <motion.div initial={{x:0,y:0}} drag dragConstraints={imageConstraintRef} className=" border-8 border-white shadow -rotate-30 absolute w-[200px] md:w-[300px] h-[300px] md:h-[400px] bg-center rounded-2xl bg-cover bg-[url('/about/image_2.jpg')]">
            </motion.div>
            <motion.div initial={{x:0,y:0}} drag dragConstraints={imageConstraintRef} className=" border-8 border-white shadow rotate-60 absolute w-[200px] md:w-[300px] h-[300px] md:h-[400px] bg-center rounded-2xl bg-cover bg-[url('/about/image_42.jpg')]">
            </motion.div>
            <motion.div initial={{x:0,y:0}}  transition={{ease:"anticipate",delay:1,duration:2}} drag dragConstraints={imageConstraintRef} className=" border-8 border-white shadow -rotate-60 absolute w-[200px] md:w-[300px] h-[300px] md:h-[400px] bg-center rounded-2xl bg-cover bg-[url('/about/image_43.jpg')]">
            </motion.div>
            <motion.div initial={{x:0,y:0}}  transition={{ease:"anticipate",delay:1,duration:2}} drag dragConstraints={imageConstraintRef} className=" border-8 border-white shadow rotate-180 absolute w-[200px] md:w-[300px] h-[300px] md:h-[400px] bg-center rounded-2xl bg-cover bg-[url('/about/image_41.jpg')]">
            </motion.div>
            <motion.div initial={{x:0,y:0}}  transition={{ease:"anticipate",delay:1,duration:2}} drag dragConstraints={imageConstraintRef} className=" border-8 border-white shadow rotate-0 absolute w-[200px] md:w-[300px] h-[300px] md:h-[400px] bg-center rounded-2xl bg-cover bg-[url('/about/image_3.jpg')]">
            </motion.div>
            
        </div>
       
        <div ref={containerRef}  className='h-screen flex justify-center items-center flex-col gap-10'>
          <h1 className='hero-text  font-sans font-semibold text-2xl md:text-5xl transition ease-linear duration-200'>I'm Azimuddeen,<span className='p-2 bg-gradient-to-r from-green-300 to-green-500 rounded-xl font-semibold text-white'>{tareef}</span></h1>    
          <p className='hero-text p-4 text-2xl md:text-5xl md:w-4/6 text-left font-semibold'>
          Developer living in Kalyan-Mumbai & Focus on making digital experiences that are easy to use, enjoyable & get the job done.
          </p>
          <p className='hero-text p-4 text-xl md:text-2xl md:w-4/6 text-left font-semibold'>
          Passionate <span className='bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent'>Full-Stack Developer</span> with 1+ years of experience building scalable and user-focused web applications. Skilled in the <span className='bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent'>MERN stack</span> (MongoDB, Express, React, Node.js), Next.js. I focus on writing clean code, crafting intuitive UI/UX, and delivering impactful solutions from concept to deployment.
          </p>
          <p className='hero-text p-4 text-xl md:text-2xl md:w-4/6 text-left font-semibold'>As a <span className='bg-gradient-to-r from-green-600 to-green-300 bg-clip-text text-transparent'>Freelance Full-Stack Developer</span>, I’ve successfully designed and developed over eight websites, turning client ideas into fully functional, user-centric solutions. My freelance projects span e-commerce platforms, CRMs, and portfolio sites, all crafted with performance and scalability in mind.</p>
        </div>
        


        <InstaLinkedIn/>

    </>
  )
}




export default About
