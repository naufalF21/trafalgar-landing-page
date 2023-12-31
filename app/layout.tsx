import './globals.css';
import { Mulish } from 'next/font/google';
import Header from './header';
import Image from 'next/image';
import element from '@/public/element.svg';

const mulish = Mulish({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'Trafalgar Landing Page',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={mulish.className}>
				<Image src={element} alt="Element Trafalgar" className="absolute mt-40" />
				<main className="flex min-h-screen flex-col pl-48 pr-32 text-primer">
					<Header />
					{children}
				</main>
			</body>
		</html>
	);
}
