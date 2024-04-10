import React from 'react'

const Contacts = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#111010] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/pbnvlmjb" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#E72929] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below OR send me an email -teddywilliejr@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name='message' cols="30" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-[#E72929] hover:border-[#E72929] px-4 py-3 my-8 mx-auto items-center'>Let's collaborate</button>
            </form>
        </div>
    )
}

export default Contacts
