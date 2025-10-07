import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface Props {
	value: string | null;
}
export const initialState: Props = {
	value: null,
};

export const activeFigureSlice = createSlice({
	name: 'active-figure',
	initialState,
	reducers: {
		inActive: (state, action: PayloadAction<string | null>) => {
			state.value = action.payload;
		},
	},
});

export const { inActive } = activeFigureSlice.actions;

export const selectCount = (state: RootState) => state.activeFigure;

export default activeFigureSlice.reducer;
