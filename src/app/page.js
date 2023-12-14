"use client"

import Controls from '@/components/controls'
import Clock from '@/components/clock'
import { faPlus, faLocationDot, faList } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <main>
            <Clock/>
            <Controls leftIcon={faLocationDot} rightIcon={faList} btnIcon={faPlus}/>
        </main>
    )
}