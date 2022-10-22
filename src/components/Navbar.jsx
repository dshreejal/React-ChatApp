import React from 'react'
import Logout from './Logout'
import Signin from './Signin'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
const Navbar = () => {
    const [user] = useAuthState(auth);
    return (

        <div className='flex justify-between  items-center mx-auto px-8 py-2 h-[9vh] bg-[#007AA3] '>
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