export default function CurrentWeather({ current }: { current: any }) {
  // Add error handling for when current is undefined
  if (!current || !current.main) {
    return (
      <div className="text-center p-4">
        <p>Loading weather data...</p>
      </div>
    )
  }

  // Convert Kelvin to Celsius
  const tempInCelsius = Math.round(current.main.temp - 273.15)
  
  // Get the weather description from the first weather item
  const weatherType = current?.weather?.[0]?.description || 'Unknown'
  
  // Convert wind speed from m/s to km/h
  const windSpeedKmh = Math.round(current.wind.speed * 3.6)

  return (
    <div className="text-center">
      {/* <div className="flex justify-center mb-4">
        {getWeatherIcon(current.weather[0].main)}
      </div> */}
      <h2 className="text-4xl font-bold mb-2">{tempInCelsius}°C</h2>
      <p className="text-xl mb-4 capitalize">{weatherType}</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 p-2 rounded-lg">
          <p className="text-sm text-blue-800">Humidity</p>
          <p className="text-lg font-semibold">{current.main.humidity}%</p>
        </div>
        <div className="bg-green-100 p-2 rounded-lg">
          <p className="text-sm text-green-800">Wind Speed</p>
          <p className="text-lg font-semibold">{windSpeedKmh} km/h</p>
        </div>
      </div>
    </div>
  )
}