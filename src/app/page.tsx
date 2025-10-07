import HomePageClient from '@/components/HomePageClient';
import Sidebar from '@/components/Sidebar';

export default function Home() {
	return (
		<div className='grid grid-cols-3 '>
			<Sidebar />
			<HomePageClient />
			<div>
				<p>Statistic</p>
			</div>
		</div>
	);
}
