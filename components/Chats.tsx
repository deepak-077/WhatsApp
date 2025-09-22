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

]


export default function Chat(){
    return (
        <>
              {/* chats */}
              {chats.map((item,index)=>(

              <div className="max-w-[440px] h-[72px] text-white flex items-center hover:bg-[#FFFFFF1A] rounded-2xl">
                
                {/* dp */}
                <div className="max-w-[77px] w-full h-[73px] mt-[-1px] pr-[15px] pl-[13px] flex items-center">
                  <img className="size-[49px] rounded-full" src={item.img} alt=" dp" />
                </div>

                {/* contact and chat message */}
                <div className="max-w-[343px] w-full h-[72px] pr-[15px] flex flex-col justify-center items-center">

                  {/* contact name and time */}
                  <div className=" max-w-[328px] w-full h-[24px] flex items-center">
                    {/* contact name */}
                    <div className=" max-w-[275px] w-full h-[24px] flex items-center ">
                      <span> {item.name} </span>
                      
                    </div>

                    {/* time */}
                    <div className=" max-w-[57.75px] h-[14px] mt-[3px] ml-[6px] text-xs text-[#FFFFFF99] whitespace-nowrap">
                      {item.time}
                    </div>
                  </div>

                  <span className="max-w-[322px] w-full h-20px text-sm"> {item.msg}</span>

                </div>

              </div>
              ))}
        </>
    )
    
}
