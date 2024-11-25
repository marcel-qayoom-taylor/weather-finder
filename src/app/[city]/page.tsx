import 'dotenv/config'
import getCurrentWeather from '@/lib/getCurrentWeather'
import getFiveDayForecast from '@/lib/getFiveDayForecast';

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

  let currentWeather = await getCurrentWeather(city)
  let nice = JSON.stringify(currentWeather)

  let fiveDay = await getFiveDayForecast(city)
  let fiveDayNice = JSON.stringify(fiveDay)

  return (
    <div>
      <p>My Post: {city}</p>
      <p>weather is: {nice}</p>
      {/* <p>five day is: ${fiveDayNice}</p> */}
      </div>
    )
}