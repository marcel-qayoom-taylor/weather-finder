import 'dotenv/config'

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>
}) {

  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  if (!apiKey) {
    throw new Error('Missing OPENWEATHERMAP_API_KEY in environment variables');
  }
  const city = (await params).city

  let geocodeResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
  let geocode = await geocodeResponse.json()
  let lat = geocode[0]?.lat
  let lon = geocode[0]?.lon
  let currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  let currentWeather = await currentWeatherResponse.json()
  let nice = JSON.stringify(currentWeather)
  return (
    <div>
      <p>My Post: {city}</p>
      <p>Lat is: {lat}</p>
      <p>Long is: {lon}</p>
      <p>weather is: {nice}</p>
      </div>
    )
}