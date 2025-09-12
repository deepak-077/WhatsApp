import Chat from "@/components/Chats";
import Header from "@/components/Header";

export default function Home() {
  return (
    //main container
    <div className="bg-[#161717] flex flex-col gap-2">

      {/* chats */}
      <div className="max-w-[408.8px] w-full ">
        <Header/>
        <Chat/>      

      </div>

      {/* chat window */}
      <div>

      </div>



    </div>
  );
}
