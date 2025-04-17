import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CgArrowTopRight } from "react-icons/cg";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

function ProjectAlProject() {

  const img = [
                "/project/HomeQuest.png",
                "/project/GymManagement.png",
                "/project/StudentManagement.png",
                "/project/dashboard.png",
                "/project/ChattingApplication.png",
                "/project/Ecommerce.png",
                "/project/FlipkartClone.png",
                "/project/TodoList.png",               
              ]
  const projLink = 
  [
    "/project/HomeQuest",
    "/project/GymManagement",
    "/project/StudentManagement",
    "/project/dashboard",
    "/project/ChattingApplication",
    "/project/Ecommerce",
    "/project/FlipkartClone",
    "/project/TodoList",
  ]

  const container = useRef(null);

  useGSAP(() => {
    let sections = gsap.utils.toArray(".slide");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + container.current.offsetWidth,
      },
    });
  }, { scope: container });

  return (
    <div
      ref={container}
      className="box w-full h-screen overflow-hidden flex-nowrap flex gap-20 items-center justify-start"
    >
      {img.map((data, i) => (
        <div
          key={i}
          className="slide bg-gradient-to-r from-green-300 to-green-500 p-4 relative bg-green-100 w-5/6 md:w-1/2 flex justify-center items-center   flex-shrink-0 rounded-md"
        >
          <img className="rounded-xl object-cover"  src={data} />
          
          <div className=" bg-green-300 p-2 rounded-full absolute top-2.5 right-2.5">
              <Link to={projLink[i]}><CgArrowTopRight className="text-xl" /></Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectAlProject;
