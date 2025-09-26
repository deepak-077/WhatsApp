'use client';

import { io } from "socket.io-client"
import { useRef, useEffect, useState } from "react"

const socket = io("http://localhost:3001")

function Chatwindow({ chat, currentUser }) {
    const [allMessages, setAllMessages] = useState({});
    const [input, setInput] = useState("");

    const textArea = useRef(null);
    
    const currentChatMessages = allMessages[chat.name] || [];

    useEffect(() => {
        const handleMessage = ({ from, messageText }) => {
            setAllMessages(prev => {
                const updated = { ...prev };
                if (!updated[from]) {
                    updated[from] = [];
                }
                updated[from] = [...updated[from], { from, text: messageText }];
                return updated;
            });
        };

        socket.on("private message", handleMessage);

        return () => {
            socket.off("private message", handleMessage);
        };
    }, []);

    //auto scroll to newer messages
    const messagesEndref= useRef(null);

    useEffect(()=>{
        if(messagesEndref.current){
            messagesEndref.current.scrollIntoView({behaviour:'auto'});
        }
    },[currentChatMessages]);


    function handleSend() {
        if (!input.trim()) return;

        socket.emit("private message", {
            messageText: input,
            receipient: chat.name
        });

        setAllMessages(prev => {
            const updated = { ...prev };

            if (!updated[chat.name]) {
                updated[chat.name] = [];
            }

            updated[chat.name] = [...updated[chat.name], { from: currentUser || "You", text: input }];
            return updated;
        });

        setInput("");

        // Reset height after clearing input
        const textarea = textArea.current;
        if (textarea) {
            textarea.style.height = 'auto';
        }
    }

    return (
        <div className="flex flex-col h-screen items-center overflow-hidden">
            {/* contact info */}
            <div className="max-w-[963px] w-full py-2.5 px-4 h-[64px] flex items-center">
                {/* dp */}
                <div className=" max-w-[55px] w-full mt-[-1px] pr-[15px] h-[40px]">
                    <img className="size-10 rounded-full" src={chat?.img} alt="picture" />
                </div>

                {/* name */}
                <div className="max-w-[682px] w-full h-[21px] text-white font-bold">
                    {chat?.name}
                </div>

                {/* calling & search */}
                <div className="max-w-[174px] w-full h-[40px] flex gap-1.5">
                    <div className="max-w-[64px] w-full h-[40px] ml-2.5 py-2 pr-1.5 pl-2.5">
                        <div className="w-[48px] h-[24px] flex items-center">
                            <span className="w-[24px] h-[24px]">
                                <img className="w-[24px] h-[24px]" src="video.png" alt="video" />
                            </span>
                            <span className="w-[20px] h-[20px] ml-1 flex items-center">
                                <img className="w-[18px] h-[18px]" src="down.png" alt="" />
                            </span>
                        </div>
                    </div>

                    <button className="w-[40px] h-[40px] p-2">
                        <img className="w-[24px] h-[24px]" src="search.png" alt="search" />
                    </button>

                    <button className="w-[40px] h-[40px] p-2">
                        <img className="w-[24px] h-[24px]" src="dots.png" alt="search" />
                    </button>
                </div>
            </div>

            {/* older messages */}
            <div className="max-w-[964px] w-full flex-1 overflow-y-auto bg-black p-4 text-white">
                {currentChatMessages.map((msg, idx) => (
                    <div key={idx} className="mb-2">
                        <strong>{msg.from}:</strong> {msg.text}
                    </div>
                ))}

                <div ref={messagesEndref}></div>
            </div>

            {/* type a message */}
            <div className="max-w-[963px] w-full pb-2 max-h-[188px]">
                <div className="max-w-[939px] w-full bg-[#262626] rounded-4xl mx-3 mb-3 p-[5px] flex items-end">

                    <button className="w-[40px] h-[40px] p-2">
                        <img className="w-[24px] h-[24px]" src="plus.png" alt="add" />
                    </button>

                    <button className="w-[40px] h-[40px] p-2">
                        <img className="w-[24px] h-[24px]" src="sticker.png" alt="stickers" />
                    </button>

                    <textarea
                        ref={textArea}
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                            const textarea = textArea.current;
                            if (textarea) {
                                textarea.style.height = 'auto';
                                
                                //resize height to contain added lines 
                                textarea.style.height = textarea.scrollHeight + 'px';

                            }
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSend();
                            }
                        }}
                        placeholder="Type a message"
                        className="w-[796px] max-h-[188px] overflow-y-auto text-[#FFFFFF99] outline-none text-sm resize-none bg-transparent"
                        style={{ lineHeight: '1.5' }}
                    />

                    <button className="w-[40px] h-[40px]">
                        <img className="w-[24px] h-[24px]" src="mic.png" alt="mic" />
                    </button>

                    <button className="w-[40px] h-[40px] bg-[#21c063] rounded-full flex justify-center items-center"
                        onClick={handleSend}>
                        <img className="w-[20px] h-[20px]" src="send.png" alt="send" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chatwindow;
