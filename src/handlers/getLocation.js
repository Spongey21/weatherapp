export default async function GetLocation(lat, lon, search) {
    const apiKey = '9c084fb2105a8455487eb0840db99b00'
    const res = await fetch(`${search}?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    const data = await res.json()
    console.log(data);
    return data
}