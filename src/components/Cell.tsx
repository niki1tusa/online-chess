'use client';

import clsx from 'clsx';
import {
	FaChessBishop,
	FaChessKing,
	FaChessKnight,
	FaChessPawn,
	FaChessQueen,
	FaChessRook,
} from 'react-icons/fa6';

import { figureMove } from '@/store/slices/boardSlice';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import { ICellProps, TFigure } from '@/types/global.types';

export const iconArr = [
	{ type: 'pawn', icon: FaChessPawn },
	{ type: 'rook', icon: FaChessRook },
	{ type: 'knight', icon: FaChessKnight },
	{ type: 'bishop', icon: FaChessBishop },
	{ type: 'queen', icon: FaChessQueen },
	{ type: 'king', icon: FaChessKing },
];
export default function Cell({
	colorCell = 'even',
	cell,
	activeFigure,
	setActiveFigure,
}: ICellProps) {
	const Icon = iconArr.find(item => item.type === cell.figure.type);
	const dispatch = useAppDispatch();
	const isActive = activeFigure?.id === cell.figure.id ? 'red' : 'black';

	return (
		<li
			className={clsx(
				'flex h-15 w-15 items-center justify-center',
				colorCell === 'even' ? 'bg-dark-cell' : 'bg-light-cell'
			)}
		>
			{Icon && (
				<div
					className={clsx(
						activeFigure?.id === cell.figure.id && 'text-red-500',
						cell.figure.color === 'white' && 'text-white',
						cell.figure.color === 'black' && 'text-black'
					)}
				>
					<Icon.icon
						size={30}
						onClick={() => {
							setActiveFigure(cell.figure);
							dispatch(figureMove(cell.figure.id as string));
						}}
					/>
				</div>
			)}
		</li>
	);
}
