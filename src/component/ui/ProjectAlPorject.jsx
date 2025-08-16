import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CgArrowTopRight } from "react-icons/cg";
gsap.registerPlugin(ScrollTrigger);

function ProjectAlProject() {

  const img = [
                "/project/botanix.png",
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
    {isLink:true,link:"https://botanixnatural.com"},
    {isLink:true,link:"https://github.com/Azimkhan01/HomeQuest"},
    {isLink:true,link:"https://github.com/Azimkhan01/GYM-MANAGEMENT-SYSTEM"},
    {isLink:true,link:"https://github.com/Azimkhan01/Class-Management"},
    {isLink:false,link:""},
    {isLink:true,link:"https://github.com/Azimkhan01/PRODIGY_FS_04"},
    {isLink:true,link:"https://github.com/Azimkhan01/PRODIGY_FS_03"},
    {isLink:true,link:"https://github.com/Azimkhan01/flipkart_html_css_js"},
    {isLink:true,link:"https://github.com/Azimkhan01/todo_list-_react"},
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
          <img lazy alt={data} className="rounded-xl object-cover"  src={data} />
          
          <div className={`${projLink[i]["isLink"] ? "" : "hidden"} bg-green-300 p-2 rounded-full absolute top-2.5 right-2.5`}>
              <a href={projLink[i]['link']} target="_blank"><CgArrowTopRight className="text-xl" /></a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectAlProject;
