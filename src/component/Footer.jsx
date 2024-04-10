import React from 'react'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full h-[100px] bg px-4 bg-[#111010] text-gray-50'>
        <div className='p-4'>
            <ul className='flex justify-center items-center'>
                <li>
                    <a href="https://github.com/teddwill123" >
                        <FaGithub size={30} />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/teddywillie123?igshid=MTNiYzNiMzkwZA==">
                        <FaInstagram size={30}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/teddy-f-willie-7b8626264">
                        <FaLinkedin size={30} /> 
                    </a>
                </li><li>
                    <a href="https://x.com/tedd32223?t=NyYhOwwI4vdHFhfSLUTUWg&s=09">
                        <FaTwitter size={30} /> 
                    </a>
                </li>
            </ul>
        </div>
        <div className='py-2'>
            <p className='flex justify-center items-center'>Copyright © {new Date().getFullYear()}. Portfolio</p>
        </div>
    </div>
  )
}

export default Footer
