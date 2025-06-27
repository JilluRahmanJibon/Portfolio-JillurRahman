import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import arltl from "../../../src/assets/images/arltl.png";
import idiaDesigns from "../../../src/assets/images/idia-designs.png";
import jobwhee from "../../../src/assets/images/jobwhee.png";
import gamingPortfolio from "../../../src/assets/images/gaming-portfolio.png";
import sunnahTech from "../../../src/assets/images/sunnah-tech.png";
import weg from "../../../src/assets/images/weg.png";
import snapAcademy from "../../../src/assets/images/snap-academy.png";
import musicExclusive from "../../../src/assets/images/music-exclusive.png";

type PortfolioItem = {
	name: string;
	image: string;
	description: string;
	demo: string;
	source: string;
};

const portfolios: Record<string, PortfolioItem[]> = {
	Web: [
		{
			name: "Jobwhee Marketplace",
			image: jobwhee,
			description:
				"Jobwhee is a global full-stack platform for international job listings, connecting employers and talented professionals worldwide through a modern, scalable, and user-friendly web application.",
			demo: "https://jobwhee.com/",
			source: "https://github.com/JilluRahmanJibon",
		},
		{
			name: "AR Labels and Trims LTD.",
			image: arltl,
			description:
				"A full-stack garments factory website that manages production, inventory, and orders efficiently, providing a seamless platform for factory operations and stakeholder collaboration in one place.",
			demo: "https://arltl.com",
			source: "https://arltl.com",
		},
		{
			name: "Software Agency",
			image: sunnahTech,
			description:
				"Sunnah Technology is a professional software agency website delivering custom web and app development solutions, focusing on quality, innovation, and client satisfaction across diverse industries.",
			demo: "https://sunnahtechnology.com",
			source: "https://sunnahtechnology.com",
		},
		{
			name: "Music Exclusive",
			image: musicExclusive,
			description:
				"Music Exclusive is a streaming website offering a vast library of tracks, playlists, and personalized recommendations, delivering high-quality audio experiences to music lovers worldwide.",
			demo: "https://musicexclusive.io",
			source: "https://github.com/JilluRahmanJibon",
		},
		{
			name: "Gaming Portfolio",
			image: gamingPortfolio,
			description:
				"A personal gaming-themed business website showcasing gaming content, merchandise, and services, designed to engage enthusiasts with an immersive and interactive online experience.",
			demo: "https://gaming-portfolio-alpha.vercel.app",
			source: "https://github.com/JilluRahmanJibon/Gaming-Portfolio-Clone",
		},
		{
			name: "Western Education Group",
			image: weg,
			description:
				"A sleek, professional business website providing comprehensive education services, designed to offer seamless access to courses, resources, and support for learners and educators alike.",
			demo: "https://weg-five.vercel.app/",
			source: "https://github.com/JilluRahmanJibon/WEG-Clone",
		},
		{
			name: "IdiaDesigns",
			image: idiaDesigns,
			description:
				"A dynamic motion studio portfolio showcasing creative projects with flair, highlighting expertise in animation, visual storytelling, and innovative design to captivate clients and collaborators.",
			demo: "https://idia-client.vercel.app",
			source: "https://idia-client.vercel.app",
		},
		{
			name: "Snap Academy",
			image: snapAcademy,
			description:
				"A vibrant photography academy website offering comprehensive courses, workshops, and resources designed to inspire and equip aspiring photographers with creative skills and professional expertise.",
			demo: "https://snap-academy-1.web.app",
			source: "https://github.com/JilluRahmanJibon/Snap-Academy",
		},
	],
};

const Portfolio = () => {
	const categories = Object.keys(portfolios);
	const [selectedCategory, setSelectedCategory] = useState<string>(
		categories[0]
	);
	const [activeCard, setActiveCard] = useState<number | null>(null);

	const handleCardClick = (index: number) => {
		// Toggle active card only on mobile (below sm: 640px)
		if (window.innerWidth < 640) {
			setActiveCard(activeCard === index ? null : index);
		}
	};

	return (
		<section
			id="portfolio"
			className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
			{/* Animated Background Glow */}
			<motion.div
				className="absolute inset-0 bg-yellow-500 opacity-10 rounded-full blur-3xl"
				initial={{ scale: 0, x: "-50%", y: "-50%" }}
				animate={{ scale: 1.5, rotate: 360 }}
				transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
				style={{ width: "150%", height: "150%", top: "50%", left: "50%" }}
			/>

			<div className="max-w-7xl mx-auto relative z-10 text-center">
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
					viewport={{ once: true }}
					className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse-slow">
					Portfolio
				</motion.h2>

				{/* Category Buttons */}
				<div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
					{categories.map(category => (
						<motion.button
							key={category}
							onClick={() => setSelectedCategory(category)}
							whileHover={{
								scale: 1.1,
								boxShadow: "0 0 15px rgba(234, 179, 8, 0.7)",
							}}
							whileTap={{ scale: 0.95 }}
							className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
								selectedCategory === category
									? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg"
									: "bg-gray-700 border-2 border-yellow-400 text-yellow-400 hover:bg-gray-600"
							}`}>
							{category}
						</motion.button>
					))}
				</div>

				{/* Portfolio Grid */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{portfolios[selectedCategory]?.map((portfolio, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
							viewport={{ once: true }}
							className="relative overflow-hidden rounded-xl shadow-lg group bg-gray-800 border border-yellow-500/20 cursor-pointer"
							onClick={() => handleCardClick(index)}
							whileHover={{
								scale: 1.05,
								boxShadow: "0 0 20px rgba(234, 179, 8, 0.5)",
							}}>
							{/* Portfolio Image */}
							<img
								src={portfolio.image}
								alt={portfolio.name}
								className="w-full h-60 object-cover transition-all duration-500 group-hover:opacity-70 group-hover:scale-105"
							/>

							{/* Overlay with Info */}
							<div
								className={`absolute inset-0 h-full bg-black/70 to-transparent flex flex-col justify-end p-5 transition-all duration-300 ${
									typeof window !== "undefined" &&
									window.innerWidth < 640 &&
									activeCard === index
										? "opacity-100"
										: "opacity-0 group-hover:opacity-100"
								}`}>
								<h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-2 drop-shadow-md">
									{portfolio.name}
								</h3>
								<p className="text-sm sm:text-base text-gray-200 ">
									{portfolio.description}
								</p>
								<div className="flex gap-4 mt-4">
									{portfolio.source && (
										<a
											href={portfolio.source}
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-300 hover:text-yellow-400 text-xl sm:text-2xl transition-all"
											onClick={e => e.stopPropagation()}>
											<FaGithub />
										</a>
									)}
									{portfolio.demo && (
										<a
											href={portfolio.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="text-yellow-400 hover:text-yellow-500 text-xl sm:text-2xl transition-all"
											onClick={e => e.stopPropagation()}>
											<FaExternalLinkAlt />
										</a>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
