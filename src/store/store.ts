import { configureStore } from '@reduxjs/toolkit'
import { activeFigureSlice } from './slices/activeSlice'

export const store = configureStore({
  reducer: {activeFigure: activeFigureSlice},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch