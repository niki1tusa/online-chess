'use client';

import { useState } from 'react';
import {
	FaChessBishop,
	FaChessKing,
	FaChessKnight,
	FaChessPawn,
	FaChessQueen,
	FaChessRook,
} from 'react-icons/fa6';

import Cell from '@/components/Cell';

class Board {
  fields = [
    // 8 (чёрные основные)
    [
      { id: '8a', figure: { id: 'bR1', icon: FaChessRook } },
      { id: '8b', figure: { id: 'bN1', icon: FaChessKnight } },
      { id: '8c', figure: { id: 'bB1', icon: FaChessBishop } },
      { id: '8d', figure: { id: 'bQ',  icon: FaChessQueen } },
      { id: '8e', figure: { id: 'bK',  icon: FaChessKing } },
      { id: '8f', figure: { id: 'bB2', icon: FaChessBishop } },
      { id: '8g', figure: { id: 'bN2', icon: FaChessKnight } },
      { id: '8h', figure: { id: 'bR2', icon: FaChessRook } },
    ],
    // 7 (чёрные пешки)
    [
      { id: '7a', figure: { id: 'bP1', icon: FaChessPawn } },
      { id: '7b', figure: { id: 'bP2', icon: FaChessPawn } },
      { id: '7c', figure: { id: 'bP3', icon: FaChessPawn } },
      { id: '7d', figure: { id: 'bP4', icon: FaChessPawn } },
      { id: '7e', figure: { id: 'bP5', icon: FaChessPawn } },
      { id: '7f', figure: { id: 'bP6', icon: FaChessPawn } },
      { id: '7g', figure: { id: 'bP7', icon: FaChessPawn } },
      { id: '7h', figure: { id: 'bP8', icon: FaChessPawn } },
    ],
    // 6
    [
      { id: '6a', figure: { id: null, icon: null } },
      { id: '6b', figure: { id: null, icon: null } },
      { id: '6c', figure: { id: null, icon: null } },
      { id: '6d', figure: { id: null, icon: null } },
      { id: '6e', figure: { id: null, icon: null } },
      { id: '6f', figure: { id: null, icon: null } },
      { id: '6g', figure: { id: null, icon: null } },
      { id: '6h', figure: { id: null, icon: null } },
    ],
    // 5
    [
      { id: '5a', figure: { id: null, icon: null } },
      { id: '5b', figure: { id: null, icon: null } },
      { id: '5c', figure: { id: null, icon: null } },
      { id: '5d', figure: { id: null, icon: null } },
      { id: '5e', figure: { id: null, icon: null } },
      { id: '5f', figure: { id: null, icon: null } },
      { id: '5g', figure: { id: null, icon: null } },
      { id: '5h', figure: { id: null, icon: null } },
    ],
    // 4
    [
      { id: '4a', figure: { id: null, icon: null } },
      { id: '4b', figure: { id: null, icon: null } },
      { id: '4c', figure: { id: null, icon: null } },
      { id: '4d', figure: { id: null, icon: null } },
      { id: '4e', figure: { id: null, icon: null } },
      { id: '4f', figure: { id: null, icon: null } },
      { id: '4g', figure: { id: null, icon: null } },
      { id: '4h', figure: { id: null, icon: null } },
    ],
    // 3
    [
      { id: '3a', figure: { id: null, icon: null } },
      { id: '3b', figure: { id: null, icon: null } },
      { id: '3c', figure: { id: null, icon: null } },
      { id: '3d', figure: { id: null, icon: null } },
      { id: '3e', figure: { id: null, icon: null } },
      { id: '3f', figure: { id: null, icon: null } },
      { id: '3g', figure: { id: null, icon: null } },
      { id: '3h', figure: { id: null, icon: null } },
    ],
    // 2 (белые пешки)
    [
      { id: '2a', figure: { id: 'wP1', icon: FaChessPawn } },
      { id: '2b', figure: { id: 'wP2', icon: FaChessPawn } },
      { id: '2c', figure: { id: 'wP3', icon: FaChessPawn } },
      { id: '2d', figure: { id: 'wP4', icon: FaChessPawn } },
      { id: '2e', figure: { id: 'wP5', icon: FaChessPawn } },
      { id: '2f', figure: { id: 'wP6', icon: FaChessPawn } },
      { id: '2g', figure: { id: 'wP7', icon: FaChessPawn } },
      { id: '2h', figure: { id: 'wP8', icon: FaChessPawn } },
    ],
    // 1 (белые основные)
    [
      { id: '1a', figure: { id: 'wR1', icon: FaChessRook } },
      { id: '1b', figure: { id: 'wN1', icon: FaChessKnight } },
      { id: '1c', figure: { id: 'wB1', icon: FaChessBishop } },
      { id: '1d', figure: { id: 'wQ',  icon: FaChessQueen } },
      { id: '1e', figure: { id: 'wK',  icon: FaChessKing } },
      { id: '1f', figure: { id: 'wB2', icon: FaChessBishop } },
      { id: '1g', figure: { id: 'wN2', icon: FaChessKnight } },
      { id: '1h', figure: { id: 'wR2', icon: FaChessRook } },
    ],
  ];
}
export default function ChessBoard() {
	const [currentStateBoard, setCurrentStateBoard] = useState(new Board());
	return (
		<div className='flex'>
			<ul>
				{Array.from({ length: 8 }, (_, i) => i + 1).map((_, index) => (
					<li key={index} className='flex h-15 w-15 items-center justify-center'>{index}</li>
				))}
			</ul>
			<ul className='grid grid-cols-8 grid-rows-9'>
				{currentStateBoard.fields.map((row, i) =>
					row.map((cell, j) => {
						const evenOrOdd = (i + j) % 2 === 1;
						const res = evenOrOdd ? 'even' : 'odd';
						return <Cell key={j} group={res} cell={cell} />;
					})
				)}
				{Array.from({ length: 8 }, (_, i) => i + 1).map((_, index) => {
					const symbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
					return <li key={index} className='flex h-15 w-15 items-center justify-center'>{symbols[index]}</li>;
				})}
			</ul>
		</div>
	);
}
