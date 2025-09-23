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
    msg: "hii",
    time:'11:50 am'
  },
  {
    name:"Alexa",
    img:'two.jpg',
    msg: "Are you coming today?",
    time:'10:20 am'
  },
  {
    name:"Zach",
    img:'four.jpg',
    msg: "Bye",
    time:'yesterday'
  },
  {
    name:"Aniket",
    img:'aniket.jpg',
    msg: "ok done",
    time:'yesterday'
  },
  {
    name:"Chris",
    img:'chris.jpg',
    msg: "Whatsupp buddy",
    time:'yesterday'
  },
  {
    name:"Taylor",
    img:'taylor.jpg',
    msg: "hii",
    time:'yesterday'
  },
  {
    name:"Sachin",
    img:'sachin.jpg',
    msg: "hii",
    time:'yesterday'
  },
  {
    name:"Alex",
    img:'three.jpg',
    msg: "Hey ",
    time:'10:11 am'
  },
  {
    name:"Steve",
    img:'me.jpg',
    msg: "hii",
    time:'yesterday'
  },
  {
    name:"Unknown",
    img:'random.jpg',
    msg: "hii",
    time:'yesterday'
  },
  {
    name:"Random",
    img:'random.jpg',
    msg: "hola",
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