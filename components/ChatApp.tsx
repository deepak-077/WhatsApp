'use client'
import { useEffect, useState } from "react"
import Chat from "./Chats"
import Chatwindow from "./Chatwindow"
import Header from "./Header"
import Banner from "./Banner"
import {socket} from "../socket"



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
    name:"Hulk",
    img:'four.jpg',
    msg: "Salut",
    time:'yesterday'
  },
  {
    name:"Thor",
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
    name:"Captain America",
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
    name:"Iron Man",
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
    const [selectedChat, setSelectedChat]=useState(null);
    const [currentUser, setCurrentUser]=useState('');

    const [searchContact,setSearchContact] =useState("");
    const filterContact = chats.filter(chat => chat.name.toLowerCase().includes(searchContact.toLowerCase()))

    useEffect(()=>{
      const myName='alpha';
      setCurrentUser(myName);
      socket.emit('register',myName)
    })

    return (

        <div className="flex h-screen">
  
            {/* Left: chat list */}
            <div className="w-[440px] border border-[#262626]">
                <Header searchContact={searchContact} setSearchContact={setSearchContact}/>
                <Chat chats={chats} onSelectChat={setSelectedChat} />
            </div>

            {/* Right: chat window */}
            <div className="bg-[#121212]">
                {
                    selectedChat
                    ?<Chatwindow chat={selectedChat} currentUser={setCurrentUser}/>
                    :<Banner/>
                }
            </div>
            

        </div>
        
    )

}
export default ChatApp