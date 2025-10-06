'use client';

import { toast } from 'react-toastify';

import ChessBoard from './ChessBoard';

export default function HomePageClient() {
	return (
		<div className='flex flex-col gap-10'>
			<button className='border p-2 rounded max-w-[200px]' onClick={() => toast.info('Hi')}>click me</button>
			<ChessBoard />
		</div>
	);
}
