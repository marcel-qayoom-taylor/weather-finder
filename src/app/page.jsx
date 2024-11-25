import WeatherSearch from '@/components/WeatherSearch'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <WeatherSearch />
    </div>
  )
}

