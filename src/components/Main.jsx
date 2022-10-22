import { React, useEffect, useRef, useState } from 'react'
import Bottom from './Bottom'
import Chat from './Chat'
import { query, collection, orderBy, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"
import Navbar from "./Navbar";

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

            <div className='bg-[#5CD6FF]'>
                <Navbar />
                <div className="max-w-[728px] mx-auto text-center px-8">
                    <section className="flex flex-col h-[90vh] bg-white  mt-10 shadow-xl border relative">
                        <div className='flex flex-col p-[10px]' style={style.mainstyle} >
                            {messages && messages.map((message) => (
                                <Chat key={message.id} message={message} />
                            ))}
                            <span ref={scroll}></span>
                        </div>
                        <div className='mt-8'>
                            <Bottom scroll={scroll} />
                        </div>
                    </section>
                    <div className='h-10'>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Main
