import React from 'react'
import Section from './common/Section'

import uft from "../assets/uft-icon.jpg";
import research from "../assets/research.png";
import web from "../assets/web.png";
import sel from "../assets/Se.png";

const Services = () => {

  const services =[
    {

    id: 1,
    image: uft,
    title: "Unified Functional Testing",
    },
    {
        id: 2,
        image: web,
        title: "Web development",
    },
    {
        id:3,
        image: sel,
        title: "Automation using Selenium",
    },
    {
        id:4,
        image: research,
        title: "Research and Development",
    },
    
  ];



  return <Section title="Services ⚒️" 
  subtitle= "I offer a diverse range of skills and expertise that can contribute to the success of your projects. With a strong background in Test Engineering and front development. If you couldn't find what you were looking for or have any specific requirements, please feel free to contact me"
  >
    <div className='grid gap-10 lg:grid-cols-2' >
        {
            services.map(({id, image, title }) => (
                <div key={id} className='flex flex-col items-center justify-center p-5 shadow-lg dark: shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'>
                    <img src= {image} alt={title} className='w-36 h-36 md:w-44 md:h-44 object-contain ' />
                    <h3 className='mt-5 text-base'>{title}</h3>
                </div>
            ))
        }
        
    </div> 
  
  
  </Section>
    
  
}

export default Services