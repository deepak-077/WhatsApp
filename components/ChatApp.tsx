'use client'
import { useState } from "react"
import Chat from "./Chats"
import Chatwindow from "./Chatwindow"
import Header from "./Header"
import Banner from "./Banner"
import Banner2 from "./Banner2"


const chats=[
  {
    name:"Siri",
    img:'one.jpg',
    msg: "Hii",
    time:'11:50 am'
  },
  {
    name:"Alexa",
    img:'two.jpg',
    msg: "Hola",
    time:'10:20 am'
  },
  {
    name:"Zach",
    img:'four.jpg',
    msg: "Salut",
    time:'yesterday'
  },
  {
    name:"Aniket",
    img:'aniket.jpg',
    msg: "Hallo",
    time:'yesterday'
  },
  {
    name:"Chris",
    img:'chris.jpg',
    msg: "Ciao",
    time:'yesterday'
  },
  {
    name:"Taylor",
    img:'taylor.jpg',
    msg: "Ola",
    time:'yesterday'
  },
  {
    name:"Alex",
    img:'three.jpg',
    msg: "Hey ",
    time:'10:11 am'
  },
  {
    name:"Sachin",
    img:'sachin.jpg',
    msg: "नमस्ते",
    time:'yesterday'
  },
  {
    name:"Steve",
    img:'me.jpg',
    msg: "こんにちは",
    time:'yesterday'
  },
  {
    name:"Unknown",
    img:'random.jpg',
    msg: "안녕하세요",
    time:'yesterday'
  },
  {
    name:"Random",
    img:'random.jpg',
    msg: "Adios",
    time:'yesterday'
  },
  {
    name:"Random3",
    img:'random.jpg',
    msg: "ciao",
    time:'yesterday'
  },

]

function ChatApp(){
    const [selectedChat,setSelectedChat]=useState(null);

    return (

        <div className="flex h-screen">
            
            {/* Left: chat list */}
            <div className="w-[440px] border border-[#262626]">
                <Header/>
                <Chat chats={chats} onSelectChat={setSelectedChat} />
            </div>

            {/* Right: chat window */}
            <div className="bg-[#121212]">
                {
                    selectedChat
                    ?<Chatwindow chat={selectedChat} />
                    :<Banner/>
                }
            </div>
            

        </div>
        
    )

}
export default ChatApp