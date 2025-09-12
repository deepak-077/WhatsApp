import Chat from "@/components/Chats";
import Header from "@/components/Header";
import Chatwindow from "@/components/Chatwindow";

export default function Home() {
  return (
    //main container
    <div className="bg-[#161717] flex w-screen">

      {/* chats */}
      <div className="max-w-[408.8px] w-full ">
        <Header/>
        <Chat/>      
        

      </div>

      {/* chat window */}
        <Chatwindow/>

      



    </div>
  );
}
