export type TFigure = {
	id: null;
	type: 'pawn' | 'king' | 'queen' | 'knight' | 'rook' | 'bishop' | null;
    color: 'white' | 'black'
};
export interface ICell {
	id: string;
	figure: TFigure;
    markMove: boolean
}
export interface ICellProps {
	colorCell: 'even' | 'odd';
	cell: ICell;
	activeFigure: TFigure | null;
	setActiveFigure: (arg: TFigure) => void;
}
