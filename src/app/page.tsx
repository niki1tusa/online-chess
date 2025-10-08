import HomePageClient from '@/components/HomePageClient';
import Sidebar from '@/components/Sidebar';

export default function Home() {
	return (
		<div className='grid grid-cols-3 '>
			<div/>
			{/* <Sidebar /> */}
			<HomePageClient />
			{/* <div className='flex flex-col items-center'>
				<p>Statistic</p>
			</div> */}
			<div/>
		</div>
	);
}
