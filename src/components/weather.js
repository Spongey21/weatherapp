"use client"

import Image from 'next/image'

import weatherImg from '/public/Weather.svg'
import cloudImg from '/public/Cloud.svg'

export default function Weather(params) {
    return (
        <article className='grid grid-rows-[100px_30px_30px] grid-cols-[150px] w-11/12 h-48 mt-10 m-auto'>
            <Image className='w-full rounded-3xl row-start-1 row-end-3 col-start-1 col-end-3' src={weatherImg} alt='weather image' width={500} height={500}/>
            <Image className='col-start-2 col-end-2 row-start-1 row-end-1' src={cloudImg} alt='cloud image' width={400} height={400}/>
            <h2 className='text-7xl text-white col-start-1 col-end-1 row-start-1 row-end-1 text-center pt-8 capitalize'>{params.degree}°</h2>
            <span className='text-gray-400 row-start-3 row-end-3 col-start-1 text-left pl-5 capitalize'>h:1° l:1°</span>
            <span className='text-white row-start-4 row-end-4 col-start-2 col-end-2 text-end pr-5 capitalize'>{params.type}</span>
            <span className='text-white col-start-1 col-end-1 row-start-4 row-end-4 text-left pl-5 capitalize'>{params.city}, {params.country}</span>
        </article>
    )
}