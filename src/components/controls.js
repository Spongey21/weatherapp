import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ButtonBackground from '/public/Subtract.svg'
import IconBackground from '/public/Rectangle 364.svg'

export default function Controls({ leftIcon, rightIcon, btnIcon }) {
    return (
        <>
            <Image className='fixed bottom-0 left-[50%] translate-x-[-50%] z-10' src={ButtonBackground} alt='button background'/>
            <Image className='fixed bottom-0' src={IconBackground} alt='icon background'/>
            <FontAwesomeIcon className='text-purple-800 bg-white fixed bottom-[2.5%] left-[50%] translate-x-[-50%] rounded-full text-3xl p-5 z-10' icon={btnIcon} />
            <FontAwesomeIcon className='text-white fixed bottom-[3.5%] left-[10%] text-2xl z-10' icon={leftIcon} />
            <FontAwesomeIcon className='text-white fixed bottom-[3.5%] right-[10%] text-2xl z-10' icon={rightIcon} />
        </>
    )
}