import React from 'react'
import newsApp from "../assets/projects/newsApp.png"
import netflixClone from "../assets/projects/Netflix.png"
import MyRun from "../assets/projects/myRun.png"
import ProjectTracker from "../assets/projects/projectTracker.png"
import WeatherApp from "../assets/projects/weatherApp.png"
import biteByte from "../assets/projects/biteByte.png"

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#111010]'>
            {/* Continier */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#38BDF8]'>Work</p>
                    <p className='py-6'>Checkout some of my recent work</p>
                </div>

                {/* Continer Item */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    <div style={{background: `url(${newsApp})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-dev'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                NEWS APP
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://teddy-news123.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                                </a>
                                <a href="https://github.com/teddwill123/News-App">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                        {/* Grid Item */}
                    <div style={{background: `url(${netflixClone})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-dev'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                NETFLIX CLONE
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://desired-movies-23.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                                </a>
                                <a href="https://github.com/teddwill123/NETFLIX-REACT-JS">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                                </a>
                            </div>
                        </div>
                    </div>                    {/* Grid Item */}
                    <div style={{background: `url(${MyRun})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-dev'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                MY RUN
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
                    <div style={{background: `url(${ProjectTracker})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-dev'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                PROJECT TRACKER
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://teddwill123.github.io/Project-Tracker/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                                </a>
                                <a href="https://github.com/teddwill123/Project-Tracker">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                                </a>
                            </div>
                        </div>
                    </div>                    {/* Grid Item */}
                    <div style={{background: `url(${WeatherApp})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-dev'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            WEATHER-DASHBOAED
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
                    <div style={{background: `url(${biteByte})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='shadow-lg shadow-[#040c16 group container rounded-md flex justify-center items-center mx-auto content-dev'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            BITE BYTES
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://bite-bytes.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                                </a>
                                <a href="https://github.com/teddwill123/Bite-Bytes">
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




