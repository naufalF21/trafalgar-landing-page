import Link from 'next/link';

export default function Navbar() {
	const navs = [
		{
			name: 'Home',
			slug: '/',
			active: true,
		},
		{
			name: 'Find a doctor',
			slug: '/#',
		},
		{
			name: 'Apps',
			slug: '/#',
		},
		{
			name: 'Testimonials',
			slug: '/#',
		},
		{
			name: 'About us',
			slug: '/#',
		},
	];

	return (
		<nav>
			<ul className="flex flex-row">
				{navs.map((nav, index) => {
					return (
						<li
							key={index}
							className={`ml-8 text-lg ${nav.active ? 'font-bold' : 'opacity-50'}`}
						>
							<Link href={nav.slug}>{nav.name}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
