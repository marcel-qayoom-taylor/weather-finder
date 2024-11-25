import { getWeatherIcon } from '@/lib/utils'

export default function CurrentWeather({ current }) {
  const readable = JSON.stringify(current)
  
  return (
    <div className="text-center">
      <p>{readable}</p>
    </div>
  )
}

