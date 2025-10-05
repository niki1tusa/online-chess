'use client'
import Image from 'next/image';
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
    [FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing, FaChessBishop, FaChessKnight, FaChessRook],
    [FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn, FaChessPawn],
    [FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing, FaChessBishop, FaChessKnight, FaChessRook],
  ];
}
export default function HomePageClient() {
	const [currentStateBoard, setCurrentStateBoard] = useState(new Board());
	return (
		<div>
			<Image width={50} height={50} src='/knight.png' alt='knight'/>
			<ul className='grid grid-cols-8 border grid-rows-8 shadow shadow-neutral-400'>
				{currentStateBoard.fields.map((cell, i) =>
					cell.map((figure, j) => {
						const evenOrOdd = (i + j) % 2 === 1;
						const res = evenOrOdd ? 'even' : 'odd';
						return <Cell key={j} group={res} figure={figure}/>;
					})
				)}
			</ul>
		</div>
	);
}
