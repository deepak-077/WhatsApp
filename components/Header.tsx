function Header(){
    return (
        <>
        {/* whatsapp logo */}
              <header className="max-w-[440px] w-full h-[64px] py-2.5 px-5 ">
                <div className="max-w-[400px] w-full h-[40px] flex items-center">
                  <span className="max-w-[310px] w-full h-[28px] text-white font-bold text-2xl">WhatsApp</span>

                  {/* buttons */}
                  <div className="max-w-[90px] w-full h-[40px]">
                    <button className="max-w-[40px] w-full h-[40px] p-2">
                      <img className="max-w-[24px] w-full h-[24px] " src="new-chat.png" alt="" />
                    </button>

                    <button className="max-w-[40px] w-full h-[40px] p-2">
                      <img className="max-w-[24px] w-full h-[24px] " src="dots.png" alt="" />
                    </button>
                  </div>


                </div>
      

              </header>

              {/* searchbar */}
              <div className="max-w-[440px] w-full h-[49px] ">

                <div className="max-w-[440px] w-full h-[44px] mb-[5px] px-5">

                  <div className="max-w-[400px] w-full h-[40px] mb-[5px] px-5 bg-[#FFFFFF1A] rounded-full pl-[46px] flex items-center gap-2">
                    <img className="size-5" src="search.png" alt="search icon" />
                    <p className="max-w-[354px] w-full h-[22px] text-white text-sm"> Search or start new chat</p>                
                  </div>

                </div>

              </div>

              {/* category of messages */}
              <div className="max-w-[440px] w-full h-[41px] pt-0.5 pr-2.5 pb-[7px] pl-5 flex gap-2 ">
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
        
        </>
    )
}


export default Header;