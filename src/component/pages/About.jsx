import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar';
import { motion } from "framer-motion";
import InstaLinkedIn from '../ui/InstaLinkedIn';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const arrayOfTareef = [
    "Skilled", "Experience", "Efficient", "Impactful", "Curious", "Collaborative",
    "Frontend", "Backend", "Full-Stack", "Freelance", "Pixel-Perfect", "Cutting-Edge",
    "Scalable", "Empathetic", "Versatile", "Growth-Focused", "Creative", "Innovative",
    "Dynamic", "Interactive", "Visionary", "Passionate", "Adaptive", "Tech-Savvy", "Problem Solving"
  ];

  const [tareef, setTareef] = useState(arrayOfTareef[0]);
  const [showNav, setShowNav] = useState(false);
  const isIntersecting = false;

  const imageConstraintRef = useRef(null);
  const targetRef = useRef(null);
  const wordRef = useRef(null);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  // Word animation
  useEffect(() => {
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

    const animateWord = () => {
      if (!wordRef.current) return;

      gsap.to(wordRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          indexRef.current = (indexRef.current + 1) % arrayOfTareef.length;
          setTareef(arrayOfTareef[indexRef.current]);

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
      gsap.killTweensOf(wordRef.current);
    };
  }, []);

  // Scroll animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500",
        scrub: true,
        markers: false,
      },
    });

    tl.from(".hero-text", {
      y: 100,
      opacity: 0,
      stagger: 0.4,
      duration: 1,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <>
      <Navbar targetRef={targetRef} showNav={showNav} setShowNav={setShowNav} isIntersecting={isIntersecting} />

      {/* Draggable Image Section */}
      <div ref={imageConstraintRef} className='relative h-screen flex justify-center items-center'>
        <h1 className='text-[55px] md:text-[150px] text-[#262626]'>AZIMUDDEEN<span className='text-orange-400'>.</span></h1>

        {/* Draggable images */}
        <motion.div drag dragConstraints={imageConstraintRef} initial={{ x: 0, y: 0 }} transition={{ ease: "anticipate", delay: 1, duration: 2 }} className="border-8 border-white shadow rotate-30 absolute w-[200px] md:w-[300px] h-[300px] md:h-[400px] bg-center rounded-2xl bg-cover bg-[url('/about/image_1.jpg')]"></motion.div>
        <motion.div drag dragConstraints={imageConstraintRef} initial={{ x: 0, y: 0 }} className="border-8 border-white shadow -rotate-30 absolute w-[200px] md:w-[300px] h-[300px] md:h-[400px] bg-center rounded-2xl bg-cover bg-[url('/about/image_2.jpg')]"></motion.div>
        <motion.div drag dragConstraints={imageConstraintRef} initial={{ x: 0, y: 0 }} className="hidden border-8 border-white shadow rotate-60 absolute w-[200px] md:w-[300px] h-[300px] md:h-[400px] bg-center rounded-2xl bg-cover bg-[url('/about/image_42.jpg')]"></motion.div>
        <motion.div drag dragConstraints={imageConstraintRef} initial={{ x: 0, y: 0 }} transition={{ ease: "anticipate", delay: 1, duration: 2 }} className="border-8 border-white shadow rotate-0 absolute w-[200px] md:w-[300px] h-[300px] md:h-[400px] bg-center rounded-2xl bg-cover bg-[url('/about/image_3.jpg')]"></motion.div>
      </div>

      {/* Separated Animated Word Section */}
      <div className='h-screen sticky top-0 flex justify-center items-center bg-white'>
        <h1 className='text-center font-sans font-semibold text-2xl md:text-5xl transition ease-linear duration-200'>
          I'm Azimuddeen, <span className='p-2 bg-gradient-to-r from-green-300 to-green-500 rounded-xl font-semibold text-white' ref={wordRef}>{tareef}</span>
        </h1>
      </div>

      {/* Scroll Pinned Text Content Section */}
      <div ref={containerRef} className='min-h-[170vh] sticky top-0 flex justify-center items-center flex-col gap-10 bg-[#E8E2E2] px-4'>
        <p className='hero-text p-4 text-2xl md:text-5xl md:w-4/6 text-left font-semibold'>
          Developer living in Kalyan-Mumbai & focused on making digital experiences that are easy to use, enjoyable & get the job done.
        </p>

        <p className='hero-text p-4 text-xl md:text-2xl md:w-4/6 text-left font-semibold'>
          Passionate <span className='bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent'>Full-Stack Developer</span> with 1+ years of experience building scalable and user-focused web applications. Skilled in the <span className='bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent'>MERN stack</span> (MongoDB, Express, React, Node.js), Next.js. I focus on writing clean code, crafting intuitive UI/UX, and delivering impactful solutions from concept to deployment.
        </p>

        <p className='hero-text p-4 text-xl md:text-2xl md:w-4/6 text-left font-semibold'>
          As a <span className='bg-gradient-to-r from-green-600 to-green-300 bg-clip-text text-transparent'>Freelance Full-Stack Developer</span>, I’ve successfully designed and developed over eight websites, turning client ideas into fully functional, user-centric solutions. My freelance projects span e-commerce platforms, CRMs, and portfolio sites, all crafted with performance and scalability in mind.
        </p>
      </div>

      <InstaLinkedIn />
    </>
  );
}

export default About;
