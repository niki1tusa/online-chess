import clsx from 'clsx';
import { IconType } from 'react-icons';

export default function Cell({
	group = 'even',
	cell,
}: {
	group: 'even' | 'odd';
	cell: { id: string; figure: { id: null; icon: IconType | null } };
}) {
	const Icon = cell.figure.icon;
	return (
		<li
			className={clsx(
				'flex h-15 w-15 items-center justify-center',
				group === 'even' ? 'bg-dark-cell' : 'bg-light-cell'
			)}
		>
			{Icon && <Icon size={30} fill='black' onClick={() => {}} />}
		</li>
	);
}
