import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Section from './common/Section'
import contact from '../assets/mobile.png'

const Contact = () => {

    const SOCIAL = [
        {
            id: 3,
            link: "https://www.linkedin.com/in/roopa-pamisetty",
            icon: <FaLinkedin />,
        },
        {
            id: 2,
            link: "https://github.com/RoopaPamisetty",
            icon: <FaGithub />,
        },
        {
            id: 1,
            link: "https://twitter.com/Pamisetty_Roopa",
            icon: <FaTwitter />,
        },
      


    ]




  return <Section title='Contact 📲' 
  subtitle="Let's Connect and Create Together :)"
  >
    <div className='flex flex-col items-center justify-center gap-4 text-center'>
        <div><img src={contact} alt="Conatct info" className='w-32 h-32'/></div>
        <div>
            <p className='max-w-xs md:max-w-lg font-light'>
            Discover Your Perfect Fit: Reach out to me through your preferred channel for exciting opportunities aligned with my portfolio!😊
            </p>
        </div>
        <div className='flex w-full items-center justify-evenly text-3xl'>
            {SOCIAL.map(({id, link, icon}) => (
                <a href={link} target='_blank' rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-blue-500'> {icon} </a>
            ))}
        </div>
        {/* bottom form */}
        <div className='p-8 text-left w-full'>
            <form action="https://getform.io/f/369168a0-3233-44b2-be4f-1c41e3499f6a" method="POST">
                <div className='w-full'>
                    <div className='flex flex-col'>
                        <label className='capitalize text-sm py-2 font-extralight'>
                            name
                        </label>
                        <input type="text" name="name" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'></input>

                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='capitalize text-sm py-2 font-extralight'>
                            phone
                        </label>
                        <input type="text" name="phone" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'></input>

                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='capitalize text-sm py-2 font-extralight'>
                            email
                        </label>
                        <input type="text" name="email" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'></input>

                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='capitalize text-sm py-2 font-extralight'>
                            message
                        </label>
                        <textarea name="message" rows="10" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'></textarea>
                        
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='my-8 bg-gradient-to-r from-blue-500 to-gray-600 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200'>
                    send message
                    </button>
                  
                </div>
            </form>
        </div>




    </div>
     </Section>
}

export default Contact