import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

import Weather from '@/components/weather'

export default function Home() {
  return (
    <>
      <header className='flex flex-col'>
        <nav className='flex w-1/2 gap-3 m-5 align-baseline'>
          <FontAwesomeIcon className='text-white self-center' icon={faChevronLeft} height={20} />
          <h1 className='text-4xl text-white'>Weather</h1>
        </nav>
        <label className='flex align-middle gap-2 w-11/12 m-auto p-1.5 rounded-lg'>
          <FontAwesomeIcon className='text-gray-400' icon={faSearch} height={20} />
          <input className='w-10/12 outline-none bg-transparent text-gray-400' type="text" placeholder='Search for a city or airport' />
        </label>
      </header>
      <main>
        <Link href="/public/weather.png"/>
        <img className='w-11/12 m-auto mt-10' alt="weather" />
      </main>
    </>
  )
}
