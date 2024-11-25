"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function WeatherSearch() {
  const [city, setCity] = useState("")
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    if (city.trim()) {
      router.push(`/${city.trim().toLowerCase()}`)
    }
  }

  return (
    <Card className="w-full max-w-md transition-all duration-300 ease-in-out">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-primary">
          Weather Wonder
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSearch} className="flex space-x-2 mb-4">
          <Input
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">
            Search
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}