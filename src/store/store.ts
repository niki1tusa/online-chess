import { configureStore } from '@reduxjs/toolkit';


import currentBoardReducer from './slices/boardSlice';

export const store = configureStore({
	reducer: {  currentBoard: currentBoardReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
