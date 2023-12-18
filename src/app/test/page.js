"use client"

export default function Fisk() {
    return (
        <main>
            <article className="fixed bottom-0 h-2/5 w-full bg-indigo-500 rounded-3xl">
                <div className="flex justify-between h-10 ml-5 mr-5 mt-5">
                    <span>hello</span>
                    <span className="bg-[rgba(0,0,0,0.3)] h-1 w-[30px] rounded-full mt-1"></span>
                    <span className="text-center w-96">hello</span>
                </div>
                <div className="w-[390px] h-[3px] bg-blend-overlay bg-gradient-to-l from-[rgba(0,0,0,0.3)] to-[rgba(255,255,255,0.3)]"></div>
            </article>
        </main>
    )
}