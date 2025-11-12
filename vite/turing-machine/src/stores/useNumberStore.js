import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useNumberStore = create(
  persist(
    (set) => ({
      number: 2,
      toggleNumber: () =>
        set((state) => ({
          number: state.number == 1 ? 2 : 1
        })),
    }),
    {
      name: "number-storage" // nom sous lequel l'état sera sauvegardé (localStorage)
    }
  )
)