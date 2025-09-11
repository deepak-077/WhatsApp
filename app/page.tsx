import Image from "next/image";

export default function Home() {
  return (
    //main container
    <div className="bg-[#161717] flex flex-col gap-2">

      {/* chats */}
      <div className="max-w-[408.8px] w-full ">
        {/* whatsapp logo */}
              <header className="max-w-[408.8px] w-full h-[64px] py-2.5 px-5">
                <div className="max-w-[368.8px] w-full h-[40px] flex items-center">
                  <span className="max-w-[278.8px] w-full h-[28px] text-white font-bold text-2xl">WhatsApp</span>

                  {/* buttons */}
                  <div className="max-w-[90px] w-full h-[40px]">
                    <button className="max-w-[40px] w-full h-[40px] p-2">
                      <img className="max-w-[24px] w-full h-[24px] " src="" alt="" />
                    </button>

                    <button className="max-w-[40px] w-full h-[40px] p-2">
                      <img className="max-w-[24px] w-full h-[24px] " src="" alt="" />
                    </button>
                  </div>


                </div>
      

              </header>

              {/* searchbar */}
              <div className="max-w-[408.8px] w-full h-[49px] ">

                <div className="max-w-[408.8px] w-full h-[44px] mb-[5px] px-5">
                  <div className="max-w-[368.8px] w-full h-[40px] mb-[5px] px-5 bg-[#FFFFFF1A] rounded-full pl-[46px] flex items-center gap-2">
                    <img className="size-5" src="" alt="search icon" />
                    <p className="max-w-[322.8px] w-full h-[22px] text-white "> Search or start new chat</p>
                

                  </div>


              </div>

              </div>

              {/* category of messages */}
              <div className="max-w-[408.8px] w-full h-[41px] pt-0.5 pr-2.5 pb-[7px] pl-5 flex gap-2">
                <button className="py-1.5 px-3 rounded-full  border text-white flex items-center">
                  <div>ALL</div>
                </button>
                <button className="py-1.5 px-3 rounded-full  border text-white flex items-center">
                  <div>Unread</div>
                </button>
                <button className="py-1.5 px-3 rounded-full  border text-white flex items-center">
                  <div>Favourites</div>
                </button>
                <button className="py-1.5 px-3 rounded-full  border text-white flex items-center">
                  <div>Groups</div>
                </button>


              </div>

              {/* chats */}
              <div className="max-w-[408.8px] h-[72px] text-white flex items-center hover:bg-[#FFFFFF1A]  rounded-2xl">
                
                {/* dp */}
                <div className="max-w-[77px] w-full h-[73px] mt-[-1px] pr-[15px] pl-[13px] flex items-center">
                  <img className="size-[49px] rounded-full" src="/Kiara-advani.png" alt=" dp" />
                </div>

                {/* contact and chat message */}
                <div className="max-w-[311.8px] w-full h-[72px] pr-[15px] flex flex-col justify-center items-center">

                  {/* contact name and time */}
                  <div className=" max-w-[296.8px] w-full h-[24px] flex items-center">
                    {/* contact name */}
                    <div className=" max-w-[235px] w-full h-[24px] flex items-center ">
                      <span> alpha </span>
                      
                    </div>

                    {/* time */}
                    <div className=" max-w-[55.75px] h-[14px] mt-[3px] ml-[6px] text-xs">
                      Yesterday
                    </div>
                  </div>

                  <span className="max-w-[290.8px] w-full h-20px text-sm"> hii</span>


                </div>


              </div>
              

      </div>

      {/* chat window */}
      <div>

      </div>



    </div>
  );
}
