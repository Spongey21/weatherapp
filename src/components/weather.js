"use client"

import weatherBackground from '/public/WeatherBackground.svg'
import overcast from '/public/OvercastWeather.svg'

import Image from 'next/image'

import { useEffect, useState } from 'react'

export default function Weather({lat, lon}) {
    const [weather, setWeather] = useState({})

    useEffect(() => {
      async function getData() {
        const apiKey = '9c084fb2105a8455487eb0840db99b00'
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        const data = await res.json()

        setWeather(data)
    }
  
      getData()
    }, [])

    return (
        <article className='grid grid-rows-[100px_30px_30px] grid-cols-[150px] w-11/12 h-48 mt-10 m-auto'>
            <Image className='w-full rounded-3xl row-start-1 row-end-3 col-start-1 col-end-3' src={weatherBackground} alt='weather image' width={500} height={500}/>
            <Image className='col-start-2 col-end-3 row-start-1 row-end-2 m-auto' src={overcast} alt='cloud image' width={150} height={150}/>
            <h2 className='text-7xl text-white col-start-1 col-end-1 row-start-1 row-end-1 text-center pt-8 capitalize'>{weather.main && Math.round(weather.main.temp - 274.15)}°</h2>
            <span className='text-gray-400 row-start-3 row-end-3 col-start-1 text-left pl-5 capitalize whitespace-nowrap'>h:{weather.main && Math.round(weather.main.temp_max  - 274.15)}° l:{weather.main && Math.round(weather.main.temp_min  - 274.15)}°</span>
            <span className='text-white row-start-4 row-end-4 col-start-2 col-end-2 text-end pr-5 capitalize'>{weather.weather && weather.weather[0].description}</span>
            <span className='text-white col-start-1 col-end-1 row-start-4 row-end-4 text-left pl-5 capitalize whitespace-nowrap'>{!weather.name ? weather.name = 'unknown' : weather.name}</span>
        </article>
    )
}