import { useEffect } from 'react'
import { useStore } from '@/store/useStore'

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useStore()

  useEffect(() => {
    // Apply theme class to document
    const root = document.documentElement
    if (theme.mode === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme.mode])

  return <>{children}</>
}