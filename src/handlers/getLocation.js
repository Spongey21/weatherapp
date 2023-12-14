export default async function GetLocation(lat, lon) {
    const apiKey = '9c084fb2105a8455487eb0840db99b00'
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    const data = await res.json()

    return data
}