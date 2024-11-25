import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Sun, Cloud, CloudRain, Snowflake } from 'lucide-react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
