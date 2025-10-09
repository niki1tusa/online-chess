import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FIELDS } from './data';
import { ICell } from '@/types/global.types';

interface Props {
	fields: ICell[][];
}
export const initialState: Props = {
	fields: FIELDS,
};
function postitionActiveFigure(fields: ICell[][], id: string | null) {
	if (!id) return;
	for (let i = 0; i < 8; i++) {
		const j = fields[i].findIndex(cell => cell.figure?.id === id);
		if (j !== -1) {
			return { i, j };
		}
	}
	return null;
}
export const currentBoardSlice = createSlice({
	name: 'current-board',
	initialState,
	reducers: {
		addMarkMove: (state, action: PayloadAction<string | null>) => {
			const id = action.payload;
			// TODO: как сдедать так чтобы после смены активной шахматы - менялся markMove = false
			const position = postitionActiveFigure(state.fields, id);
			console.log(position);
			// ПОЧЕМУ I -> ВСЕГДА = 0
			for (let i = 0; i < state.fields.length; i++) {
				for (let j = 0; j < state.fields[i].length; j++) {
					let activeCellWithFigure = state.fields[i].find((item: any) => item.figure.id === id);
					let INDEX = state.fields[i].findIndex(
						item => item.figure?.id === activeCellWithFigure?.figure?.id
					);
					switch (activeCellWithFigure?.figure?.type) {
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
			for (let i = 0; i < state.fields.length; i++) {
				for (let j = 0; j < state.fields[i].length; j++) {
					let activeCellWithFigure = state.fields[i].find((item: any) => item.figure.id === id);
					let INDEX = state.fields[i].findIndex(
						item => item.figure?.id === activeCellWithFigure?.figure?.id
					);
					let coordActiveFigure = state.fields[i].find(
						item => item.figure?.id === activeCellWithFigure?.figure?.id
					);
					console.log(coordActiveFigure?.id);
					state.fields[i][j].markMove = true;
					if (activeCellWithFigure && j > 0) {
						if (state.fields[i][j].markMove) {
						}
						// ?
						// state.fields[i - 1][j + INDEX].figure?.id = activeCellWithFigure.figure?.id;
						// state.fields[i - 1][j + INDEX].figure.type = activeCellWithFigure.figure?.type;
						state.fields[i][j].figure = null;

						return;
					}
				}
			}
		},
	},
});

export const { addMarkMove, figureMove } = currentBoardSlice.actions;

export default currentBoardSlice.reducer;
