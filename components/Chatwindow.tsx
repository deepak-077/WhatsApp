'use client'

import { io } from "socket.io-client"
import { useEffect,useState } from "react"

const socket=io("http://localhost:3001")

function Chatwindow({chat, currentUser}){

    const [allMessages,setAllMessages] = useState({});
    const [input,setInput]=useState("");

    const currentChatMessages = allMessages[chat.name] || [];


    useEffect(()=>{

        const handleMessage = ({from ,messageText}) =>{
            setAllMessages(prev=>{
                const updated ={...prev };
                if(!updated[from]){
                    updated[from]=[];
                }
                updated[from] = [...updated[form],{from, text: messageText}];
                return updated
            })
        }

        socket.on("private message", handleMessage);

        return ()=>{
            socket.off("private message",handleMessage);
        };
    },[])


    function handleSend(){
        socket.emit("private message", {
            messageText: input,
            receipient: chat.name
        });

        setAllMessages(prev =>{
            const updated = {...prev};
            
            if(!updated[chat.name]){
                updated[chat.name]=[];

            }
            updated[chat.name]=[...updated[chat.name], { from: currentUser || "You", text: input }]
            return updated;
        })
        setInput("");
    }


    return (
        <div className="flex flex-col h-screen items-center ">

            {/* contact info */}
                <div className="max-w-[963px] w-full py-2.5 px-4 h-[64px]  flex items-center">
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

                        {/* calling options */}
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

                        {/* search */}
                        <button className="w-[40px] h-[40px] p-2">
                            <img className="w-[24px] h-[24px]" src="search.png" alt="search" />
                        </button>

                        {/* chat setting */}
                        <button className="w-[40px] h-[40px] p-2">
                            <img className="w-[24px] h-[24px]" src="dots.png" alt="search" />
                        </button>

                    </div>


                </div>

            {/* older chats */}
            <div className="max-w-[964px] w-full pb-2 flex-1">
                <div className="flex-1 overflow-y-auto bg-black w-full p-4 text-white">
                {currentChatMessages.map((msg, idx) => (
                    <div key={idx} className="mb-2">
                        <strong>{msg.from}:</strong> {msg.text}
                    </div>
                 ))}
                </div>
            </div>

            {/* type a message */}
            <div className="max-w-[963px] w-full pb-2 h-[64px]  ">
                <div className="max-w-[939px] w-full h-[52px] bg-[#262626] rounded-4xl mx-3 mb-3 p-[5px] flex items-center">

                    {/* Send items */}
                    <button className="w-[40px] h-[40px] p-2">
                        <img className="w-[24px] h-[24px]" src="plus.png" alt="add" />
                    </button>

                    {/* Stickers */}
                    <button className="w-[40px] h-[40px] p-2">
                        <img className="w-[24px] h-[24px]" src="sticker.png" alt="stickers" />
                    </button>

                    <input value={input} onChange={e =>setInput(e.target.value)} placeholder= "Type a message"
                    className="w-[796px] h-[22px] text-[#FFFFFF99] text-sm"/> 

                    <button className="w-[40px] h-[40px]">
                        <img className="w-[24px] h-[24px]" src="mic.png" alt="mic" />
                    </button>

                    {/* send */}
                    <button className="w-[40px] h-[40px] bg-[#21c063] rounded-full flex justify-center items-center"
                    onClick={handleSend}>
                        <img className="w-[20px] h-[20px]" src="send.png" alt="mic" />
                    </button>

                </div>

            </div>
        </div>
    )

}
export default Chatwindow