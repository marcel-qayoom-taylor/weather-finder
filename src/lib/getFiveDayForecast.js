export default async function getFiveDayForecast(city) {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  if (!apiKey) {
    throw new Error('Missing OPENWEATHERMAP_API_KEY in environment variables');
  }
  
  let geocodeResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
  let geocode = await geocodeResponse.json()
  let lat = geocode[0]?.lat
  let lon = geocode[0]?.lon
  
  let currentWeatherAPIQuery = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
  console.log("fetching", currentWeatherAPIQuery)

  let currentWeatherResponse = await fetch(currentWeatherAPIQuery)
  let currentWeather = await currentWeatherResponse.json()

  return currentWeather
}