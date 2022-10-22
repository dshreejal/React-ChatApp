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
        <form onSubmit={sendMessage} className='h-14 w-full max-w-[728px] flex absolute bottom-0'>
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className='bg-gray-400 placeholder:text-gray-500 text-gray-700 w-full text-xl p-3 outline-none border-none ' placeholder='Enter Message' />
            <button type="submit" className='bg-[#007AA3] w-[18%] '>Send</button>
        </form>

    )
}

export default Bottom