"use client"

import Image from 'next/image'

import Controls from '@/components/controls'
import Clock from '@/components/clock'

import { faPlus, faLocationDot, faList } from '@fortawesome/free-solid-svg-icons'

import House from '/public/House.svg'
import Background from '/public/Stars.svg'

export default function Home() {
    return (
        <main>
            <Clock />
            <Controls leftIcon={faLocationDot} rightIcon={faList} btnIcon={faPlus} />
            <Image className='fixed top-[35%]' src={House} alt='house image'/>
            <Image src={Background} alt='page background'/>
        </main>
    )
}