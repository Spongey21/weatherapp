"use client"

import WeatherCapsule from '@/components/weatherCapsule'

export default function Forecast() {
    return (
        <article className="fixed bottom-[-3%] h-[45%] w-full bg-gradient-to-r from-[#48319D99] from-[-4.68%] to-[#48319D22] to-[95.45%] rounded-[2rem] backdrop-filter backdrop-blur-[1.25rem]">
            <div className="flex justify-between items-end h-10 mx-8">
                <span className="text-center text-base capitalize text-[#EBEBF599] whitespace-nowrap">hourly forecast</span>
                <span className="mb-auto bg-[rgba(0,0,0,0.3)] h-1 w-[40px] rounded-full mt-1"></span>
                <span className="text-center text-base capitalize text-[#EBEBF599] whitespace-nowrap">weekly forecast</span>
            </div>
            <div className="w-full h-[3px] bg-blend-overlay bg-gradient-to-br from-[rgba(0,0,0,0.3)] to-[rgba(255,255,255,0.3)]"></div>
            <article className="my-2 h-2/4 flex justify-start items-center pl-[16px] gap-[12px] overflow-hidden">
                <WeatherCapsule />
                <WeatherCapsule />
                <WeatherCapsule />
                <WeatherCapsule />
                <WeatherCapsule />
                <WeatherCapsule />
                <WeatherCapsule />
                <WeatherCapsule />
                <WeatherCapsule />
            </article>
        </article>
    )
}