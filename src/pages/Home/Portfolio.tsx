import  { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

type PortfolioItem = {
	type: string;
	name: string;
	image: string;
	description: string;
	demo: string;
	source: string;
	tools: string[];
};

const portfolios: Record<string, PortfolioItem[]> = {
	Web: [
		{
			type: "regular",
			name: "Phonebook",
			image: "http://localhost:5173/src/assets/images/jibon.jpg",
			description:
				"A CRUD Application to store your contact phone numbers, everything at one place",
			demo: "https://phonebookpca.netlify.com/",
			source: "https://github.com/zonayedpca/nodeMySQLPhonebook",
			tools: ["Express", "MySQL", "React"],
		},
		{
			type: "regular",
			name: "Holy Quran",
			image:
				"https://www.shutterstock.com/shutterstock/photos/2145394919/display_1500/stock-photo-holy-al-quran-with-written-arabic-calligraphy-meaning-of-al-quran-and-rosary-beads-or-tasbih-on-2145394919.jpg",
			description:
				"Read the Holy Quran with English Translation. Simple, basic, and clean",
			demo: "https://zonayedpca.github.io/HolyQuranReact/",
			source: "https://github.com/zonayedpca/HolyQuranReact",
			tools: ["React", "Redux"],
		},
	],
	Others: [
		{
			type: "regular",
			name: "React Native Welcome",
			image: "/images/react-native.jpg",
			description:
				"A helper package for React Native to welcome user with beautiful and interactive UI",
			demo: "https://www.npmjs.com/package/react-native-welcome",
			source: "https://github.com/zonayedpca/react-native-welcome",
			tools: ["NPM Package", "React Native"],
		},
		{
			type: "regular",
			name: "React Web Workers",
			image: "/images/web-workers.jpg",
			description: "A Small helper package for React to work with web workers",
			demo: "https://www.npmjs.com/package/react-web-workers",
			source: "https://github.com/zonayedpca/react-web-workers",
			tools: ["NPM Package", "React"],
		},
	],
};

const Portfolio = () => {
	const categories = Object.keys(portfolios);
	const [selectedCategory, setSelectedCategory] = useState<string>(
		categories[0]
	);

	return (
		<div id="portfolio" className="portfolio-container py-10   text-white">
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
