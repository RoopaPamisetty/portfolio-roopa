import React from 'react'
import {FaGithub, FaTwitter,FaLinkedin, FaArrowDown} from "react-icons/fa";
/*import {MdEmail} from "react-icons/md"*/
import avatar from "../assets/[removal.ai]_tmp-649ae3821ee62.png";
 
const Hero = () => {
    const SOCIAL = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/roopa-pamisetty",
            icon: <FaLinkedin/>,
        },
    {
        id: 2,
        link: "https://github.com/RoopaPamisetty",
        icon: <FaGithub />,
    },
   
    {
        id: 3,
        link: "https://twitter.com/Pamisetty_Roopa",
        icon: <FaTwitter/>,
    },
];

window.addEventListener("scroll", function(){
    const downArrow= document.querySelector(".down-arrow");
    if (this.scrollY >=90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
})


  return (
   <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
    <h2 className='text-5xl text-blue-500 uppercase font-bold'>Roopa Pamisetty</h2>
    <h3 className='py-3 text-2xl'>Test Engineer</h3>
    <p className='max-w-xl font-light text-gray-450'>
        Hello <span className='animate-pulse text-4xl'>👋</span>,
        Welcome to my portfolio. Currently am working as Test Engineer 💻. 
        Eager to dive into Web Development🚀.

    </p>

    {/* social icons */}
<div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
    {SOCIAL.map(({id, link, icon}) => (
        <a 
        href={link}
        key={id}
        target="_blank"
        rel="noopener noreferrer"
        className='cursor-pointer duration-300 hover:text-blue-600'
        >
            {icon}
        </a>

    ))}
    </div>
    {/*avatar and resume */}
    <div>
        <img src={avatar} alt="avatar" 
        className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-blue-500 rounded-xl'/>
        <a href="/Roopa Resume.pdf"
        download={true}
        className='flex items-center justify-center mt-10 bg-gradient-to-r from-blue-500 to-gray-700 text-white py-2 rounded-lg'
        
        >
            Resume

        </a>
    </div>
    {/* arrow down animation */}
    <div className='mt-10 down-arrow'>
        <FaArrowDown className='text-gray-400 text-2xl animate-bounce'/>
    </div>


</section>

  )
}

export default Hero