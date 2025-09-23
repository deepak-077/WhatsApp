function Chatwindow(){
    return(
        <div className="max-w-[963px] w-full py-[28px] h-screen text-white flex flex-col gap-2 items-center ">

            <div className="flex-1 flex flex-col items-center justify-center">

            <div className=" max-w-[560px] w-full h-[310px] mt-[-20px]">

            {/* image */}
            <div className="max-w-[560px] w-full h-[152px] flex justify-center">
                <img className="max-w-[228px] h-[152px] " src="whatsapp.png" alt="img" />

            </div>

            <div className="max-w-[560px] w-full h-[134px] flex flex-col items-center text-center">
                <div className="max-w-[560px] w-full h-[36px] mt-[24px] mb-[12px] text-4xl font-medium">
                    Download WhatsApp for Mac
                </div>

                <div className="max-w-[560px] w-full h-[16px] mb-[24px] font-medium ">
                    Make calls and get a faster experience when you download the Mac app.
                </div>
                
                <div className="max-w-[560px]  w-full h-[38px] mt-[32px] ">
                   <button className="max-w-[177.7px]  w-full h-[38px] bg-[#21c063] text-sm text-black font-semibold rounded-3xl">
                    Get from App Store
                   </button>
                </div>
                
            </div>
            
            </div>
            </div>

            <div className="mt-auto h-[22.3px] text-sm text-white flex ">
                    <img className="size-5" src="lock.png" alt="" />
                    <div className="text-[#ffffff99] font-semibold">Your personal messages are end-to-end encrypted</div>
            </div>
            

            


        </div>

    )
}
export default Chatwindow