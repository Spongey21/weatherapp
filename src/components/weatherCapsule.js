"use client"

import Image from 'next/image'

import img from '/public/OvercastWeather.svg'

export default function WeatherCapsule() {
    return (
        <article className="flex flex-col justify-between align-center g-[16px] text-center text-white px-[8px] py-[16px] w-[60px] h-[140px] rounded-full bg-[#48319D99] border border-white/20 shadow-capsule hover:bg-[#48319D]">
            <h2 className='text-base whitespace-nowrap'>12 am</h2>
            <Image src={img} alt='capsule weather'/>
            <span className='text-base whitespace-nowrap'>19°</span>
        </article>
    )
}