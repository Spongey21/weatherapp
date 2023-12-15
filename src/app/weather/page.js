"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

import Weather from '@/components/weather'

import Link from 'next/link'

export default function WeatherList() {
  return (
    <>
      <header className='flex flex-col'>
        <nav className='flex w-1/2 gap-3 m-5 align-baseline'>
          <Link className='self-center' href='/'>
            <FontAwesomeIcon className='text-white' icon={faChevronLeft} height={20} />
          </Link>
          <h1 className='text-4xl text-white'>Weather</h1>
        </nav>
        <label className='flex gap-2 w-11/12 m-auto p-1.5 rounded-lg'>
          <FontAwesomeIcon className='text-gray-400 self-center text-lg' icon={faSearch} height={20} />
          <input className='w-10/12 outline-none bg-transparent text-gray-400 placeholder:text-lg' type="text" placeholder='Search for a city or airport' />
        </label>
      </header>
      <main>
        <Weather lat={55} lon={12}/>
        <Weather lat={55} lon={13}/>
        <Weather lat={55} lon={14}/>
        <Weather lat={55} lon={15}/>
        <Weather lat={55} lon={16}/>
        <Weather lat={55} lon={17}/>
      </main>
    </>
  )
}