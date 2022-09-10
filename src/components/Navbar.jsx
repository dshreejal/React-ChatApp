import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between  items-center mx-auto px-8 py-2 h-[8vh] bg-[#007AA3] '>
            <div>
                <h1 className='font-bold text-white text-2xl'>Chat App</h1>
            </div>
            <div className='flex'>
                <button className='text-white text-xl'>Sign In</button>
                {/* <button className='text-white'>Sign Out</button> */}
            </div>
        </div>
    )
}

export default Navbar