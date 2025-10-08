import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FIELDS } from './data';
import { ICell, TFigure } from '@/types/global.types';


interface Props {
	fields: ICell[][];
}
export const initialState: Props = {
	fields: FIELDS,
};

export const currentBoardSlice = createSlice({
	name: 'current-board',
	initialState,
	reducers: {
		figureMove: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			if (!id) return;
			for (let i = 0; i < state.fields.length; i++) {
				for (let j = 0; j < state.fields[i].length; j++) {
					let activeFigure = state.fields[i].find((item: any) => item.figure.id === id);
					let coordActiveFigure = state.fields[i].find(
						item => item.figure.id === activeFigure?.figure.id
					);
					console.log(coordActiveFigure?.id);

					if (activeFigure && j > 0) {
						state.fields[i - 1][j].figure.id = activeFigure.figure.id;
						state.fields[i - 1][j].figure.type = activeFigure.figure.type;
						state.fields[i][j].figure.id = null
						state.fields[i][j].figure.type = null
						return;
					}
				}
			}
		},
	},
});

export const { figureMove } = currentBoardSlice.actions;

export default currentBoardSlice.reducer;
