"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

import Weather from '@/components/weather'

import { useEffect, useState } from 'react'

import Link from 'next/link'

export default function Home() {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch('http://api.weatherapi.com/v1/current.json?key=549c436c54b84d7c844115022231312&q=London&aqi=no')
      const data = await res.json()

      setWeather(data.results)
    }
  })

  return (
    <>
      <header className='flex flex-col'>
        <nav className='flex w-1/2 gap-3 m-5 align-baseline'>
          <Link href='/'>
            <FontAwesomeIcon className='text-white self-center' icon={faChevronLeft} height={20} />
          </Link>
          <h1 className='text-4xl text-white'>Weather</h1>
        </nav>
        <label className='flex align-middle gap-2 w-11/12 m-auto p-1.5 rounded-lg'>
          <FontAwesomeIcon className='text-gray-400' icon={faSearch} height={20} />
          <input className='w-10/12 outline-none bg-transparent text-gray-400' type="text" placeholder='Search for a city or airport' />
        </label>
      </header>
      <main>
        {/* Replace params with api data */}
        <Weather degree='5' h='15' l='22' type='heavy rain' city='london' country='england'/> 
        <Weather degree='-1' h='25' l='72' type='cloudy' city='roskilde' country='denmark'/> 
        <Weather degree='50' h='55' l='59' type='sunny' city='cape town' country='africa'/> 
      </main>
    </>
  )
}