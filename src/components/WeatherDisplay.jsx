import CurrentWeather from './CurrentWeather'
import DailyForecast from './DailyForecast'

export default function WeatherDisplay({ city, currentWeather, forecast }) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Weather in {city}</h1>
      <CurrentWeather current={currentWeather} />
      <DailyForecast daily={forecast} />
    </div>
  )
}