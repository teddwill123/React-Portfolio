import React from 'react'
import WorkImg from "../assets/projects/workImg.jpeg"
import realEstate from "../assets/projects/realestate.jpg"
import MyRun from "../assets/projects/myRun.png"
import ProjectTracker from "../assets/projects/projectTracker.png"
import WeatherApp from "../assets/projects/weatherApp.png"
import ReadmeGen from "../assets/projects/readmeGen.png"

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            {/* Continier */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#E72929]'>Work</p>
                    <p className='py-6'>Checkout some of my recent work</p>
                </div>

                {/* Continer Item */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    <div style={{background: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-dev'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                        {/* Grid Item */}
                    <div style={{background: `url(${realEstate})`}} className='shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-dev'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                                </a>
                            </div>
                        </div>
                    </div>                    {/* Grid Item */}
                    <div style={{background: `url(${MyRun})`}} className='shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-dev'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                My Run
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://anarab.github.io/MyRun/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                                </a>
                                <a href="https://github.com/AnaraB/MyRun">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                        {/* Grid Item */}
                    <div style={{background: `url(${ProjectTracker})`}} className='shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-dev'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Project Tracker
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                                </a>
                            </div>
                        </div>
                    </div>                    {/* Grid Item */}
                    <div style={{background: `url(${WeatherApp})`}} className='shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-dev'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            Weather-Dashboard
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://teddwill123.github.io/Weather-Dashboard/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                                </a>
                                <a href="https://github.com/teddwill123/Weather-Dashboard">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                        {/* Grid Item */}
                    <div style={{background: `url(${ReadmeGen})`}} className='shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-dev'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            Readme-Generator
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://teddwill123.github.io/Readme-Generator/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                                </a>
                                <a href="https://github.com/teddwill123/Readme-Generator">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work




