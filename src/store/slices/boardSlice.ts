import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FIELDS } from './data';
import { ICell, TFigure } from '@/types/global.types';

interface Props {
	fields: ICell[][];
}
export const initialState: Props = {
	fields: FIELDS,
};
function postitionActiveFigure(fields: ICell[][], id: string) {
	for (let i = 0; i < 8; i++) {
		const j = fields[i].findIndex(cell => cell.figure.id === id);
		return {i, j}
	}
	return null
}
export const currentBoardSlice = createSlice({
	name: 'current-board',
	initialState,
	reducers: {
		addMarkMove: (state, action: PayloadAction<string | null>) => {
			const id = action.payload;
			if (!id) return;
			const position = postitionActiveFigure(state.fields, id)
			console.log(position)
			// ПОЧЕМУ I -> ВСЕГДА = 0
			for (let i = 0; i < state.fields.length; i++) {
				for (let j = 0; j < state.fields[i].length; j++) {
					let row = i;
					let col = j;
					let activeCellWithFigure = state.fields[i].find((item: any) => item.figure.id === id);
					let INDEX = state.fields[i].findIndex(
						item => item.figure.id === activeCellWithFigure?.figure.id
					);
					let coordActiveFigure = state.fields[i].find(
						item => item.figure.id === activeCellWithFigure?.figure.id
					);
					switch (activeCellWithFigure?.figure.type) {
						case 'pawn':
							if (i > 0) state.fields[i - 1][j + INDEX].markMove = true;
							return;
						default:
							break;
					}
				}
			}
		},
		figureMove: (state, action: PayloadAction<string | null>) => {
			const id = action.payload;
			if (!id) return;
			for (let i = 0; i < state.fields.length; i++) {
				for (let j = 0; j < state.fields[i].length; j++) {
					let row = i;
					let col = j;
					let activeCellWithFigure = state.fields[i].find((item: any) => item.figure.id === id);
					let INDEX = state.fields[i].findIndex(
						item => item.figure.id === activeCellWithFigure?.figure.id
					);
					let coordActiveFigure = state.fields[i].find(
						item => item.figure.id === activeCellWithFigure?.figure.id
					);
					console.log(coordActiveFigure?.id);
					state.fields[i][j].markMove = true;
					if (activeCellWithFigure && j > 0) {
						state.fields[i - 1][j + INDEX].figure.id = activeCellWithFigure.figure.id;
						state.fields[i - 1][j + INDEX].figure.type = activeCellWithFigure.figure.type;
						state.fields[i][j].figure.id = null;
						state.fields[i][j].figure.type = null;

						return;
					}
				}
			}
		},
	},
});

export const { addMarkMove, figureMove } = currentBoardSlice.actions;

export default currentBoardSlice.reducer;
