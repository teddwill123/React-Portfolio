import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-[#111010] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#38BDF8]'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hello! I am Teddy. Nice to meet you, Welcome to my Portfolio</p>
                    </div>
                    <div >
                        <p className='text-xl'>I am Front-end Web Developer adept in collaborating
                            with UX and design teams to plan the technical writing and execution of functional 
                            specifications for websites and applications. Experienced in building multi-platform 
                            websites using Responsive Web Design/RWD.</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default About
