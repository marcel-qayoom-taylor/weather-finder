import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from 'lucide-react'
import { getWeatherIcon } from '@/lib/getWeatherIcon'

export default function DayCard({ day, weatherType, temp, minTemp, maxTemp }) {
  return (
    <Card className="bg-white/50 backdrop-blur-sm">
      <CardContent className="p-4 text-center">
        <p className="font-semibold mb-2">{day}</p>
        <div className="flex justify-center mb-2">
          {getWeatherIcon(weatherType)}
        </div>
        <p className="text-lg font-bold mb-2">{temp}°C</p>
        <div className="flex justify-between text-sm">
          <span className="flex items-center">
            <ArrowDown className="w-3 h-3 text-blue-500 mr-1" />
            {minTemp}°
          </span>
          <span className="flex items-center">
            <ArrowUp className="w-3 h-3 text-red-500 mr-1" />
            {maxTemp}°
          </span>
        </div>
      </CardContent>
    </Card>
  )
} 