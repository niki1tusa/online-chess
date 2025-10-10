'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import {
	FaChessBishop,
	FaChessKing,
	FaChessKnight,
	FaChessPawn,
	FaChessQueen,
	FaChessRook,
} from 'react-icons/fa6';

import { addMarkMove, figureMove } from '@/store/slices/boardSlice';

import { useAppDispatch } from '@/hooks/redux';

import { ICellProps } from '@/types/global.types';

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
	const Icon = iconArr.find(item => item.type === cell.figure?.type);
	const dispatch = useAppDispatch();
	const isActive = activeFigure?.id === cell.id
	return (
		<li
			className={clsx(
				'flex h-15 w-15 items-center justify-center',
				colorCell === 'even' ? 'bg-dark-cell' : 'bg-light-cell'
			)}
		>
			{/* TODO: анимация с помошью framer по увеличению маштаба */}
			{cell.markMove && cell.figure && (
				<div
					className='bg-success ring-success h-4 w-4 cursor-pointer rounded-full ring-2 ring-offset-2'
					onClick={() => dispatch(figureMove(cell.figure.id))}
				/>
			)}
			{Icon && (
				<motion.div
					animate={isActive ? { scale: 1.25 } : { scale: 1 }}
					transition={{ type: 'spring', stiffness: 250, damping: 15 }}
					className={clsx(cell.figure?.color === 'white' ? 'text-white' : 'text-black')}
				>
					<Icon.icon
						size={30}
						onClick={() => {
							if (!cell.figure) return null;
							setActiveFigure(cell.figure);
							dispatch(addMarkMove(cell.figure?.id));
						}}
					/>
				</motion.div>
			)}
		</li>
	);
}
