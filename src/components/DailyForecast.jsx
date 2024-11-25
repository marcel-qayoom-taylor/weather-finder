import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from 'lucide-react'
import { getWeatherIcon } from '@/lib/utils'

export default function DailyForecast({ daily }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">5-Day Forecast</h3>
      <p>{JSON.stringify(daily)}</p>
    </div>
  )
}

