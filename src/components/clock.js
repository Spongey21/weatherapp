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

    return (
        <article className="flex flex-col justify-center text-center fixed top-[5%] left-[50%] translate-x-[-50%]">
            <h1 className="text-white text-3xl capitalize">{!location.name ? location.name = 'unknown' : location.name}</h1>
            <h2 className="text-white text-7xl">{location.main && Math.round(location.main.temp - 274.15)}°</h2>
            <span className="text-gray-400 capitalize">{location.weather && location.weather[0].description}</span>
            <div className="flex justify-between w-4/6 m-auto">
                <span className="text-white capitalize">h:{location.main && Math.round(location.main.temp_max - 274.15)}°</span>
                <span className="text-white capitalize">l:{location.main && Math.round(location.main.temp_min - 274.15)}°</span>
            </div>
        </article>
    )
}