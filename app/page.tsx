import Image from 'next/image';
import trafalgarIllustration from '@/public/trafalgar-illustration.svg';

export default function Home() {
	return (
		<div className="flex flex-row justify-between">
			<div className="basis-2/5 mt-44">
				<h1 className="text-5xl font-bold leading-tight">Virtual healthcare for you</h1>
				<p className="text-[#7D7987] text-xl mt-6 leading-8">
					Trafalgar provides progressive, and affordable healthcare, accessible on mobile
					and online <br />
					for everyone
				</p>
				<button className="border px-10 py-3 rounded-full bg-[#458FF6] font-bold text-white text-lg mt-12 hover:bg-[#3977cd]">
					Consult today
				</button>
			</div>
			<div className="mt-10">
				<Image src={trafalgarIllustration} alt="Illustration Trafalgar" />
			</div>
		</div>
	);
}
