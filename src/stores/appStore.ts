import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  activeNeonColor: 'green' | 'purple' | 'red'
  setActiveNeonColor: (color: 'green' | 'purple' | 'red') => void

  isMenuOpen: boolean
  toggleMenu: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      activeNeonColor: 'green',
      setActiveNeonColor: (color) => set({ activeNeonColor: color }),

      isMenuOpen: false,
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    }),
    {
      name: 'blackout-storage',
    }
  )
)
