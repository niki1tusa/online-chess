'use client';

import { store } from '@/store/store';
import Image from 'next/image';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function MainProvider({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Provider store={store}>
				<ToastContainer
					autoClose={10000}
					hideProgressBar={true}
					closeOnClick={false}
					icon={({ theme, type }) => (
						<Image width={50} height={50} alt='toast-knight' src='/knight.png' />
					)}
				/>
				{children}
			</Provider>
		</div>
	);
}
