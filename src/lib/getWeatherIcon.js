import { Sun, Cloud, CloudRain, Snowflake, CloudDrizzle } from 'lucide-react'

export function getWeatherIcon(type) {
  console.log('Icon type received:', type)
  
  switch (type) {
    case "clear":
      return <Sun size={48} color="#FACC15" />
    case "clouds":
      return <Cloud size={48} color="#9CA3AF" />
    case "rain":
      return <CloudRain size={48} color="#60A5FA" />
    case "snow":
      return <Snowflake size={48} color="#BFDBFE" />
    case "drizzle":
      return <CloudDrizzle size={48} color="#60A5FA" />
    default:
      console.log('No matching icon for type:', type)
      return <Cloud size={48} color="#9CA3AF" />
  }
}


