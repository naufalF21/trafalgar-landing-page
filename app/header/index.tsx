import Image from 'next/image';
import logoTrafalgar from '@/public/logo.svg';
import Navbar from '@/app/components/navbar';

export default function Header() {
	return (
		<header className="flex flex-row items-center justify-between pt-14">
			<Image src={logoTrafalgar} alt="Logo Trafalgar" priority={true} />
			<Navbar />
		</header>
	);
}
