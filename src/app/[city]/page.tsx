import 'dotenv/config'
import getCurrentWeather from '@/lib/getCurrentWeather'
import getFiveDayForecast from '@/lib/getFiveDayForecast'
import WeatherDisplay from '@/components/WeatherDisplay'
import SearchForm from '@/components/SearchForm'

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY

  if (!apiKey) {
    throw new Error('Missing OPENWEATHERMAP_API_KEY in environment variables')
  }
  
  const city = (await params).city
  
  try {
    const [currentWeather, fiveDayForecast] = await Promise.all([
      getCurrentWeather(city),
      getFiveDayForecast(city)
    ])

    console.log("Current weather", currentWeather)

    return (
      <div className="container mx-auto p-4">
        <SearchForm />
        <WeatherDisplay 
          city={city}
          currentWeather={currentWeather}
          forecast={fiveDayForecast}
        />
      </div>
    )
  } catch (error) {
    // return (
    //   <div className="container mx-auto p-4">
    //     <p className="text-red-500">
    //       Error loading weather data for {city}: {error.message}
    //     </p>
    //   </div>
    // )
  }
}