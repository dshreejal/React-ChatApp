import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from "../firebase"

const Bottom = ({ scroll }) => {
    const [input, setInput] = useState("");
    const sendMessage = async (e) => {
        e.preventDefault();
        if (input === '') {
            alert("Please enter a valid message");
            return;
        }
        const { uid, displayName } = auth.currentUser
        let messageText = input;
        setInput("");
        await addDoc(collection(db, 'messages'), {
            text: messageText,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        scroll.current.scrollIntoView({
            behavior: 'smooth'
        })
    }
    return (
        <div className='absolute bottom-0 w-11/12 md:w-2/4 h-[7vh] mt-4'>
            <form onSubmit={sendMessage} className=''>
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className='bg-red-700 text-white w-[80%] py-2 px-5 ' placeholder='Enter Message' />
                <button type="submit" className='bg-green-600 w-[20%] py-2 '>Send</button>
            </form>
        </div>
    )
}

export default Bottom