import React from 'react'
import Section from './common/Section'
import {FaGithub, FaExternalLinkSquareAlt }from 'react-icons/fa'

import p1 from "../assets/weather_forecast.png";
import p2 from "../assets/po.png";


const Portfolio = () => {

    const projects = [

        {
            id: 1,
            image: p1,
            title: "Weather Forecast",
            github: "https://github.com/RoopaPamisetty/weatherforecast",
            demo: "https://roopapamisetty.github.io/weatherforecast/",
        },
        {
            id: 2,
            image: p2,
            title: "React Portfolio",
            github: "",
            demo: "",
        },

       /* {
            id: 3,
            image: p3,
            title: "best App",
            github: "",
            demo: "",
        },
        {
            id: 4,
            image: p4,
            title: "best App",
            github: "",
            demo: "",
        },
        {
            id: 5,
            image: p5,
            title: "best App",
            github: "",
            demo: "",
        },
        {
            id: 6,
            image: p6,
            title: "best App",
            github: "",
            demo: "",
        }, */



    ]



  return <Section title="Portfolio 🗒️"
  subtitle="Please note that the projects show cased in my portfolio section were developed by me a while ago. While these projects might not reflect my current skill level, they serve as a testament to my experience and capabilities as a developer. So, please go gentle on them😅"
  >
    <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
      {projects.map(({id, image, title, github, demo}) => (
        <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
            <img src={image} alt={title} className='w-2/3' />
            <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                <h2>{title}</h2>
                <a className= 'text-lg md:text-xl lg:text-2xl cursor-pointer duration-300 hover:text-blue-400' href={github} target="_blank" rel='noopener noreferrer'><FaGithub /> </a>
                    <a className= 'text-lg md:text-xl lg:text-2xl cursor-pointer duration-300 hover:text-blue-400' href={demo}target="_blank" rel='noopener noreferrer'><FaExternalLinkSquareAlt /></a>
                            </div>
        </div>

      ))}
    </div>
    
     </Section>
}

export default Portfolio