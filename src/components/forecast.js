"use client"

export default function Forecast() {
    return (
        <article className="fixed bottom-[-3%] h-[45%] w-full bg-cool/30 rounded-[2rem] backdrop-filter backdrop-blur-[1.5rem]">
            <div className="flex justify-between items-end h-10 mx-8">
                <span className="text-center text-sm capitalize">daily forecast</span>
                <span className="mb-auto bg-[rgba(0,0,0,0.3)] h-1 w-[40px] rounded-full mt-1"></span>
                <span className="text-center text-sm capitalize">weekly forecast</span>
            </div>
            <div className="w-[390px] h-[3px] bg-blend-overlay bg-gradient-to-l from-[rgba(0,0,0,0.3)] to-[rgba(255,255,255,0.3)]"></div>
        </article>
    )
}