'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { IconMoon, IconSun } from '../icons/icons'

export default function Toggler() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <button
      className='w-8 h-8  rounded-lg flex items-center justify-center hover:ring-2 ring-purple-700 transition-all duration-300 focus:outline-none'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label='Toggle Dark Mode'>
      {theme === 'light' ? <IconMoon /> : <IconSun />}
    </button>
  )
}
