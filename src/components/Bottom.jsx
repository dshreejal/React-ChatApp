import React from 'react'

const Bottom = () => {
    return (
        <div className='absolute bottom-0 w-full '>
            <form className=''>
                <input className='bg-red-700 text-white w-[80%] py-2 px-5 ' placeholder='Enter Message' />
                <button className='bg-green-600 w-[20%] py-2 '>Send</button>
            </form>
        </div>
    )
}

export default Bottom