import React from 'react'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

const googleSignin = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const Signin = () => {
    return (
        <div>
            <button className='text-white text-xl' onClick={googleSignin}>Sign In</button>
        </div>
    )
}

export default Signin