import React from 'react'
import { auth } from '../firebase'
const style = {
    sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received: `bg-[#e5e5ea] text-black float-left rounded-br-full`

}

const Chat = ({ message, scroll }) => {
    const messageClass =
        message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`

    return (
        <>
            <div className='py-1 mb-3' >
                <div className={`${messageClass} flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`}>
                    <p className='absolute mt-[-4rem] text-gray-600 text-xs'>{message.name}</p>
                    <p>{message.text}</p>
                </div>
            </div>
        </>
    )
}

export default Chat