'use client';

import { toast } from 'react-toastify';

const SIDEBAR_DATA = [
	{ id: 1, title: 'Tutorial' },
	{ id: 2, title: 'Online' },
	{ id: 3, title: 'Bot' },
];
export default function Sidebar() {
	return (
		<nav className='flex flex-col items-center gap-3'>
			{SIDEBAR_DATA.map(item => (
				<div
					className='bg-success text-secondary flex w-[150px] items-center rounded px-5 font-medium'
					key={item.id}
				>
					{item.title}
				</div>
			))}
			<button className='max-w-[200px] rounded border p-2' onClick={() => toast.info('Hi')}>
				click me
			</button>
		</nav>
	);
}
