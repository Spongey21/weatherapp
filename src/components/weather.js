"use client"

import weatherBackground from '/public/WeatherBackground.svg'
import overcast from '/public/OvercastWeather.svg'

import Image from 'next/image'

import { useEffect, useState } from 'react'
import GetLocation from '@/handlers/getLocation'

export default function Weather({ lat, lon }) {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    async function setData() {
      setWeather(await GetLocation(lat, lon))
    }
    setData()
  }, [])

  const kelvinToCelcius = 273.15

  return (
    <article className='grid grid-rows-[50px_50px_25px_25px_25px] grid-cols-[150px] w-11/12 h-48 mt-10 m-auto bg-weatherBackground bg-cover bg-no-repeat'>
      <Image className='row-start-1 row-end-2 col-start-2 col-end-3 m-auto' src={overcast} alt='cloud image' width={150} height={150} />
      <h2 className='text-7xl text-white row-start-1 row-end-1 col-start-1 col-end-1 text-center pt-8 capitalize'>{weather.main && Math.round(weather.main.temp - kelvinToCelcius)}°</h2>
      <span className='text-gray-400 row-start-4 row-end-4 col-start-1 text-left pl-5 capitalize whitespace-nowrap'>h:{weather.main && Math.round(weather.main.temp_max - kelvinToCelcius)}° l:{weather.main && Math.round(weather.main.temp_min - kelvinToCelcius)}°</span>
      <span className='text-white row-start-5 row-end-5 col-start-2 col-end-2 text-end pr-5 capitalize'>{weather.weather && weather.weather[0].description}</span>
      <span className='text-white row-start-5 row-end-5 col-start-1 col-end-1 text-left pl-5 capitalize whitespace-nowrap'>{!weather.name ? weather.name = 'unknown' : weather.name}</span>
    </article>
  )
}