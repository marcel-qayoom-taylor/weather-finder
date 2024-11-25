import { Sun, Cloud, CloudRain, Snowflake } from 'lucide-react'

export function getWeatherIcon(type) {
  
  if (type === "clear") return <Sun size={128} color="#FACC15" />
  if (type === "cloudy") return <Cloud size={128} color="#9CA3AF" />
  if (type === "rainy") return <CloudRain size={128} color="#60A5FA" />
  if (type === "snowy") return <Snowflake size={128} color="#BFDBFE" />
  return null
}


