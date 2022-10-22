import React from 'react'
import Navbar from "./Navbar";

const Error = () => {
    return (
        <>
            <Navbar />
            <div className='bg-[#5CD6FF] w-full h-[92vh] flex justify-center items-center'>
                <div><h1>User not authenticated. Sign in to Continue</h1></div>
            </div>
        </>
    )
}

export default Error