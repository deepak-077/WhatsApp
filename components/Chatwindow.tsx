function Chatwindow(){
    return (
        <div className="  ">

            {/* older chats */}
            <div className="max-w-[963px] w-full pb-2 h-screen">
                
                {/* contact info */}
                <div className="max-w-[963px] w-full py-2.5 px-4 h-[64px] bg-yellow-300">
                    {/* dp */}
                    <div className=" max-w-[55px] w-full mt-[-1px] pr-[15px] h-[40px]">
                        <img className="size-10" src="" alt="picture" />

                    </div>

                    {/* name */}
                    <div className="max-w-[682px] w-full h-[21px]">

                    </div>

                    {/* calling & search */}
                    <div className="max-w-[174px] w-full h-[40px]">

                        {/* calling options */}
                        <div className="max-w-[64px] w-full h-[40px] ml-2.5 py-2 pr-1.5 pl-2.5">

                            <div className="w-[48px] h-[24px]">
                                <span className="w-[24px] h-[24px]">
                                    <img src="" alt="video" />

                                </span>
                            <span className="w-[20px] h-[20px] ml-1">
                                <img src="" alt="" />

                            </span>
                            </div>
                        </div>

                        {/* search */}
                        <button className="w-[40px] h-[40px] p-2">
                            <img className="w-[24px] h-[24px]" src="search.png" alt="search" />
                        </button>

                        {/* chat setting */}
                        <button className="w-[40px] h-[40px] p-2">
                            <img className="w-[24px] h-[24px]" src="dots.png" alt="search" />
                        </button>

                    </div>


                </div>

            </div>

            {/* type a message */}
            <div className="max-w-[963px] w-full pb-2 h-[64px]  ">

            </div>
        </div>
    )

}
export default Chatwindow