import React from 'react'
import Logout from './Logout'
import Signin from './Signin'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
const Navbar = () => {
    const [user] = useAuthState(auth);
    return (

        <div className='flex justify-between items-center mx-auto p-4 px-7 h-16 bg-[#007AA3] '>
            <div>
                <h1 className='font-bold text-white text-2xl'>Chat App</h1>
            </div>
            <div className='flex gap-8'>
                {user ? <Logout /> : <Signin />}
            </div>
        </div>
    )
}

export default Navbar