import WeatherSearch from '@/components/WeatherSearch'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-purple-300 flex items-center justify-center p-4">
      <WeatherSearch />
    </div>
  )
}

