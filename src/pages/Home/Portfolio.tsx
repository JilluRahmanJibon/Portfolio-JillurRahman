import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import arltl from "../../../src/assets/images/arltl.png";
import idiaDesigns from "../../../src/assets/images/idia-designs.png";
import gamingPortfolio from "../../../src/assets/images/gaming-portfolio.png";
import weg from "../../../src/assets/images/weg.png";
import snapAcademy from "../../../src/assets/images/snap-academy.png";

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
			name: "AR Labels and Trims LTD.",
			image: arltl,
			description:
				"A CRUD Application to store your contact phone numbers, everything at one place",
			demo: "https://arltl.com",
			source: "https://arltl.com",
		},
		{
			name: "Gaming Portfolio",
			image: gamingPortfolio,
			description: "Gaming Portfolio is a personal business website",
			demo: "https://gaming-portfolio-alpha.vercel.app",
			source: "https://github.com/JilluRahmanJibon/Gaming-Portfolio-Clone",
		},
		{
			name: "Western Education Group",
			image: weg,
			description: "Western Education Group is a business website",
			demo: "https://weg-five.vercel.app/",
			source: "https://github.com/JilluRahmanJibon/WEG-Clone",
		},
		{
			name: "IdiaDesigns",
			image: idiaDesigns,
			description: "IdiaDesigns is motion studio website",
			demo: "https://idia-client.vercel.app",
			source: "https://idia-client.vercel.app",
		},
		{
			name: "Snap Academy",
			image: snapAcademy,
			description: "Snap Academy is a Photography website",
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

	return (
		<div id="portfolio" className="portfolio-container py-24   text-white">
			<h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>

			{/* Category Buttons */}
			<div className="flex justify-center gap-4 mb-8">
				{categories.map(category => (
					<button
						key={category}
						onClick={() => setSelectedCategory(category)}
						className={`px-6 cursor-pointer py-2 rounded-md font-semibold transition-all ${
							selectedCategory === category
								? "bg-yellow-500 text-gray-900 shadow-lg"
								: "bg-gray-700 border-2 border-yellow-500"
						}`}>
						{category}
					</button>
				))}
			</div>

			{/* Portfolio Grid */}
			<motion.div
				className="grid md:grid-cols-2  lg:grid-cols-3 gap-8 px-5 md:px-20"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				{portfolios[selectedCategory]?.map((portfolio, index) => (
					<motion.div
						key={index}
						className="relative overflow-hidden rounded-lg shadow-lg group"
						whileHover={{ scale: 1.05 }}>
						{/* Portfolio Image */}
						<img
							src={portfolio.image}
							alt={portfolio.name}
							className="w-full h-60 object-cover group-hover:opacity-80 transition-all duration-300"
						/>

						{/* Overlay with Info */}
						<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-center p-5">
							<h3 className="text-xl font-bold mb-2">{portfolio.name}</h3>
							<p className="text-sm">{portfolio.description}</p>
							<div className="flex gap-4 mt-4">
								{portfolio.source && (
									<a
										href={portfolio.source}
										target="_blank"
										rel="noopener noreferrer"
										className="text-gray-300 hover:text-white text-xl">
										<FaGithub />
									</a>
								)}
								{portfolio.demo && (
									<a
										href={portfolio.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="text-green-400 hover:text-white text-xl">
										<FaExternalLinkAlt />
									</a>
								)}
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Portfolio;
