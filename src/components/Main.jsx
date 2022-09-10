import React from 'react'
import Bottom from './Bottom'

const Main = () => {
    return (
        <div className='bg-[#5CD6FF] w-full h-[92vh] flex justify-center items-center'>
            <div className='w-11/12 h-4/5 md:h-3/4 md:w-2/4 bg-white  relative shadow-2xl'>

                <Bottom />
            </div>
        </div>
    )
}

export default Main