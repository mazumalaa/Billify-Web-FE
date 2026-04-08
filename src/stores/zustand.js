// Imports
import { create } from "zustand";

const useUIStore = create((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open }))
}))

// Export
export default useUIStore;
