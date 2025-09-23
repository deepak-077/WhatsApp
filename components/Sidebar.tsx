function Sidebar(){
    return(
        <div className="w-[70px] h-screen flex flex-col items-center justify-between   p-2.5">
            <div className="w-[40px]">

                <div className="w-[40px] h-[238px]  pt-2.5">

                <div className="w-[40px] h-[238px]">
                    <button className="size-10 p-2">
                        <img src="message.png" alt="chats" />
                    </button>

                    <button className="size-10 p-2">
                        <img src="status.png" alt="status" />
                    </button>
                    
                    <button className="size-10 p-2">
                        <img src="status.png" alt="channels" />
                    </button>

                    <button className="size-10 p-1">
                        <img src="community.png" alt="communities" />
                    </button>
                    <button className="size-10 p-2">
                        <img src="meta.png" alt="Meta AI" />
                    </button>

                </div>

                </div>

            </div>

            {/* setting and dp */}
            <div className="w-[40px] h-[88px]">
                <button className="size-10 p-2">
                    <img src="settings.png" alt="settings" />
                </button>
                
                <button className="size-10 p-1.5">
                    <img className="rounded-full" src="me.jpg" alt="profile" />
                </button>

            </div>

        </div>
    )

}
export default Sidebar