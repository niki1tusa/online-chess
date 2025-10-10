export type TFigure = {
	id: string;
	type: 'pawn' | 'king' | 'queen' | 'knight' | 'rook' | 'bishop' ;
    color: 'white' | 'black' 
};
export interface ICell {
	id: string;
	figure: TFigure | null;
    markMove: boolean
}
export interface ICellProps {
	colorCell: 'even' | 'odd';
	cell: ICell;
	activeFigure: TFigure | null;
	setActiveFigure: (arg: TFigure | null) => void;
}
