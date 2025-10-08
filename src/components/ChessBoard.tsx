'use client';

import { useEffect, useState } from 'react';

import Cell from '@/components/Cell';

import { useAppSelector } from '@/hooks/redux';

import { TFigure } from '@/types/global.types';

export default function ChessBoard() {
	const currentBoard = useAppSelector(state => state.currentBoard);
	const [activeFigure, setActiveFigure] = useState<null | TFigure>(null);

	return (
		<div className='flex'>
			<ul className='flex flex-col-reverse justify-end'>
				{Array.from({ length: 9 }, (_, i) => i + 1).map((_, index) => (
					<li key={index} className='flex h-15 w-15 items-center justify-center'>
						{index}
					</li>
				))}
			</ul>
			<ul className='grid grid-cols-8 grid-rows-9'>
				{currentBoard.fields.map((row, i) =>
					row.map((cell, j) => {
						const evenOrOdd = (i + j) % 2 === 1;
						const res = evenOrOdd ? 'even' : 'odd';
						return (
							<Cell
								key={j}
								colorCell={res}
								cell={cell}
								activeFigure={activeFigure}
								setActiveFigure={setActiveFigure}
							/>
						);
					})
				)}
				{Array.from({ length: 8 }, (_, i) => i + 1).map((_, index) => {
					const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
					return (
						<li key={index} className='flex h-15 w-15 items-center justify-center'>
							{symbols[index]}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
