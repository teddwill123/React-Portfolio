import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#111010]'>

            {/* Introduction */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#E72929]'>Hi my name</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Teddy F Willie</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Front-End Web Developer</h2>
                <p className='text-[#8892b0] py-4 text-[17px]  max-w-[700px]:'>
                As a front-end developer, I specialize in crafting engaging and user-friendly web experiences through effective utilization of HTML,
                CSS, and JavaScript. With a keen eye for design and a passion for creating seamless interactions,
                I strive to bring innovative and responsive websites to life.
                </p>
                <div>
                    <button className='text-[white] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E72929] hover:border-[#E72929]'>
                        View Work 
                        <span className='group-hover:rotate-90 duration-300'>
                        <AiOutlineArrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
