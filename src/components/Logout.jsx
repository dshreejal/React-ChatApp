import React from 'react'
import { auth } from '../firebase'


const Logout = () => {
    // const signOut = () => {
    //     signOut(auth)
    // }

    return (
        <div>
            <button onClick={() => auth.signOut(auth)} className='text-white text-xl'>Log Out</button>
        </div>
    )
}

export default Logout