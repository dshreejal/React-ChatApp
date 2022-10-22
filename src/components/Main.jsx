import { React, useEffect, useRef, useState } from 'react'
import Bottom from './Bottom'
import Chat from './Chat'
import { query, collection, orderBy, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"
const style = {
    mainstyle: {
        height: `calc(100vh - 60px - 56px - 20px)`,
        overflowY: `scroll`,
        position: `relative`,
    },
};
const Main = () => {
    const [messages, setMessages] = useState([])
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            })
            setMessages(messages);
            scroll.current.scrollIntoView({ behavior: "smooth" });
        })
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        scroll.current.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (
        <>
            <div className='bg-[#5CD6FF] w-full h-[92vh] flex justify-center items-center '>
                <div className='w-11/12 h-4/5 md:h-3/4 md:w-2/4 bg-white  relative shadow-2xl flex flex-col' style={style.mainstyle}>
                    {messages && messages.map((message) => (
                        <Chat key={message.id} message={message} />
                    ))}
                    <span ref={scroll}></span>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Bottom scroll={scroll} />
            </div>
        </>
    )
}

export default Main