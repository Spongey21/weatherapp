"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

import Weather from '@/components/weather'

import { useEffect, useState } from 'react'

import Link from 'next/link'

export default function WeatherList() {
  const [weather, setWeather] = useState([])

  const mathEquation = (300 - 32) / 5

  useEffect(() => {
    async function getData() {
      const lon = Math.floor(Math.random() * 100)
      const lat = Math.floor(Math.random() * 100)
      const apiKey = '9c084fb2105a8455487eb0840db99b00'
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
      const data = await res.json()

      weather.push(...weather, data)
    }

    getData()
  }, [])

  return (
    <>
      <header className='flex flex-col'>
        <nav className='flex w-1/2 gap-3 m-5 align-baseline'>
          <Link className='self-center' href='/'>
            <FontAwesomeIcon className='text-white' icon={faChevronLeft} height={20} />
          </Link>
          <h1 className='text-4xl text-white'>Weather</h1>
        </nav>
        <label className='flex align-middle gap-2 w-11/12 m-auto p-1.5 rounded-lg'>
          <FontAwesomeIcon className='text-gray-400' icon={faSearch} height={20} />
          <input className='w-10/12 outline-none bg-transparent text-gray-400' type="text" placeholder='Search for a city or airport' />
        </label>
      </header>
      <main>
        {/* Replace params with api data <Weather degree={weather.main && weather.main.temp} type={weather.weather && weather.weather[0].description} city='fix' country='fix'/>*/}
        {weather.map(forecast => forecast.cod == 200 &&  <Weather 
                                                          degree={forecast.main && Math.round(forecast.main.temp - 273.15)} 
                                                          type={forecast.weather && forecast.weather[0].description} 
                                                          city='fix'
                                                          country='fix'/>)}
      </main>
    </>
  )
}