import DayCard from './DayCard'

export default function DailyForecast({ daily }) {
  // Process the forecast data to get daily values
  const processedDays = daily.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000)
    const day = date.toLocaleDateString('en-US', { weekday: 'short' })
    
    // Only take one reading per day (first one)
    if (!acc[day]) {
      acc[day] = {
        day,
        weatherType: item.weather[0].main.toLowerCase(),
        temp: Math.round(item.main.temp - 273.15),
        minTemp: Math.round(item.main.temp_min - 273.15),
        maxTemp: Math.round(item.main.temp_max - 273.15)
      }
    }
    return acc
  }, {})

  // Convert to array and take first 5 days
  const forecastDays = Object.values(processedDays).slice(0, 5)

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecastDays.map((day, index) => (
          <DayCard
            key={index}
            day={day.day}
            weatherType={day.weatherType}
            temp={day.temp}
            minTemp={day.minTemp}
            maxTemp={day.maxTemp}
          />
        ))}
      </div>
    </div>
  )
}

