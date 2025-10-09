'use client'
export default function Chat({chats , onSelectChat, searchTerm}){

  const filteredChats=searchTerm? chats.filter(chat =>chat.name.toLowerCase().includes(searchTerm.toLowerCase())):chats

    return (
        <div className="max-w-[440px] w-full max-h-[650px] overflow-y-auto whitespace-nowrap">
              {/* chats */}
              {filteredChats?.map((chat,index)=>(

              <div key={index} className="max-w-[440px] h-[72px] text-white flex items-center hover:bg-[#FFFFFF1A] rounded-2xl"
              onClick={()=>onSelectChat(chat)}>
                
                {/* dp */}
                <div className="max-w-[77px] w-full h-[73px] mt-[-1px] pr-[15px] pl-[13px] flex items-center">
                  <img className="size-[49px] rounded-full" src={chat.img} alt=" dp" />
                </div>

                {/* contact and chat message */}
                <div className="max-w-[343px] w-full h-[72px] pr-[15px] flex flex-col justify-center items-center">

                  {/* contact name and time */}
                  <div className=" max-w-[328px] w-full h-[24px] flex items-center">
                    {/* contact name */}
                    <div className=" max-w-[275px] w-full h-[24px] flex items-center ">
                      <span className="text-white" dangerouslySetInnerHTML={{__html: chat.name.replace (new RegExp(`(${searchTerm})`, "gi"),
                `<mark class="bg-yellow-300 text-black">$1</mark>`
              ),
            }}
          />
                      
                    </div>

                    {/* time */}
                    <div className=" max-w-[57.75px] h-[14px] mt-[3px] ml-[6px] text-xs text-[#FFFFFF99] whitespace-nowrap">
                      {chat.time}
                    </div>
                  </div>

                  <span className="max-w-[322px] w-full h-20px text-sm"> {chat.msg}</span>

                </div>

              </div>
              ))}
        </div>
    )
    
}
