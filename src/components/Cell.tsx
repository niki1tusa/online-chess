import clsx from 'clsx';
import { IconType } from 'react-icons';

export default function Cell({
	group = 'even',
	figure,
}: {
	group: 'even' | 'odd';
	figure: IconType | null;
}) {
	const Icon = figure;
	return (
		<li className={clsx('h-15 w-15 flex items-center justify-center', group === 'even' ? 'bg-dark-cell' : 'bg-light-cell')}>
			{Icon && <Icon size={30}  fill='black'/>}
		</li>
	);
}
