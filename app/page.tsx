import Chat from "@/components/Chats";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Chatwindow from "@/components/Chatwindow";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    //main container
    <div className="bg-[#161717] flex w-screen">
      <Sidebar/>

      {/* chats */}
      <div className="max-w-[440px] w-full border border-[#262626]">
        <Header/>
        <Chat/>      
        

      </div>

      {/* chat window */}
        <Chatwindow/>
        {/* <Banner/> */}

      



    </div>
  );
}
