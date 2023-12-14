"use client"

import GetLocation from "@/handlers/getLocation";
import { useEffect, useState } from "react";

export default function clock() {
    const [location, setLocation] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            setLocation(await GetLocation(position.coords.latitude, position.coords.longitude))
        });
    }, [])

    console.log(location);

    return (
        <article className="flex flex-col justify-center text-center fixed top-[10%] left-[50%] translate-x-[-50%]">
            <h1 className="text-white text-4xl">{!location.name ? location.name = 'unknown' : location.name}</h1>
            <h2 className="text-white text-8xl">{location.main && Math.round(location.main.temp - 274.15)}°</h2>
            <span className="text-gray-400">{location.location && location.location[0].description}</span>
            <div className="flex justify-between">
                <span className="text-white">H:{location.main && Math.round(location.main.temp_max - 274.15)}°</span>
                <span className="text-white">L:{location.main && Math.round(location.main.temp_min - 274.15)}°</span>
            </div>
        </article>
    )
}