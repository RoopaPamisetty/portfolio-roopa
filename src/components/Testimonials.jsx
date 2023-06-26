import React from 'react'
import Section from './common/Section'
import avatar from '../assets/avatar.png'

const Testimonials = () => {
    
    const TESTIMONIALS = [
        {
            id: 1,
            image: avatar,
            name: "Infosys",
            comment: "Your dedicated efforts in automating the scripts using UFT. Your commitment and hard work are truly appreciated."
        },
        /*{
            id: 2,
            image: avatar,
            name: "Geetha",
            comment: "great to have FaYoutube."
        },
        {
            id: 3,
            image: avatar,
            name: "Ram",
            comment: "great to have FaYoutube."
        },*/
]


  return <Section title="Testimonials 💬"
  subtitle="The Testimonials section in my portfolio showcases the recognition I have received for my exceptional work and accomplishments. It is a testament to the dedication and expertise I bring to every project."
  >
    <div className='max-w-xl flex flex-col gap-8'>
        {TESTIMONIALS.map(({id, image, name, comment}) =>(

            <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-400'>
                <div className='w-1/3'>
                    <img src={image} alt={name} className='w-20 h-30 object-cover object-top pt-2' />
                </div>
                <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                    <h3 className='text-xl font-semibold'>{name}</h3>
                    <p className='flex flex-col justify-center items-center text-sm font-light'>{comment}</p>
                </div>
            </div>
        ))}
    </div>


  </Section>
}

export default Testimonials