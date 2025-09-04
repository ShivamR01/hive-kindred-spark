import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Theme {
  mode: 'light' | 'dark'
  toggleMode: () => void
}

interface User {
  id?: string
  name?: string
  email?: string
  avatar?: string
  isLoggedIn: boolean
}

interface AppState {
  theme: Theme
  user: User
  setUser: (user: Partial<User>) => void
  logout: () => void
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: {
        mode: 'light',
        toggleMode: () => {
          const currentMode = get().theme.mode
          const newMode = currentMode === 'light' ? 'dark' : 'light'
          set({ theme: { ...get().theme, mode: newMode } })
          
          // Update document class
          if (newMode === 'dark') {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        },
      },
      user: {
        isLoggedIn: false,
      },
      setUser: (userData) => {
        set({
          user: { ...get().user, ...userData, isLoggedIn: true }
        })
      },
      logout: () => {
        set({
          user: { isLoggedIn: false }
        })
      },
    }),
    {
      name: 'helphive-store',
      partialize: (state) => ({ 
        theme: state.theme,
        user: state.user 
      }),
    }
  )
)

// Initialize theme on app load
if (typeof window !== 'undefined') {
  const store = useStore.getState()
  if (store.theme.mode === 'dark') {
    document.documentElement.classList.add('dark')
  }
}