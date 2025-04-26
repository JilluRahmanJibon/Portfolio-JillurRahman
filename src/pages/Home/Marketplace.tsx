import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaRocket, } from "react-icons/fa";

const Marketplace = () => {
	const gigs = [
		{
			title: "Custom Web Development",
			description:
				"Build responsive, high-performance websites tailored to your needs.",
			icon: <FaCode />,
			price: "$200+",
			delay: 0.2,
		},
		{
			title: "UI/UX Design",
			description: "Craft stunning, user-friendly designs for web and mobile.",
			icon: <FaPaintBrush />,
			price: "$150+",
			delay: 0.4,
		},
		{
			title: "Project Launch Support",
			description:
				"Get your app or site live with deployment and optimization.",
			icon: <FaRocket />,
			price: "$100+",
			delay: 0.6,
		},
	];

	return (
		<section
			id="marketplace"
			className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 overflow-hidden">
			{/* Animated Background Glow */}
			<motion.div
				className="absolute inset-0 bg-yellow-500 opacity-10 rounded-full blur-3xl"
				initial={{ scale: 0, x: "-50%", y: "-50%" }}
				animate={{ scale: 1.5, rotate: 360 }}
				transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
				style={{ width: "150%", height: "150%", top: "50%", left: "50%" }}
			/>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
					viewport={{ once: true }}
					className="text-center mb-12 sm:mb-16">
					<h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse-slow">
						My Marketplace Gigs
					</h2>
					<motion.div
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						transition={{ duration: 1, delay: 0.3 }}
						className="w-32 sm:w-40 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"
					/>
					<p className="text-gray-300 max-w-xl mx-auto mt-4 text-base sm:text-lg">
						Hire me for quick, high-quality freelance services—delivered with a
						spark!
					</p>
				</motion.div>

				{/* Gig Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{gigs.map((gig, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: gig.delay, type: "spring" }}
							whileHover={{
								scale: 1.05,
								boxShadow: "0 0 15px rgba(234, 179, 8, 0.5)",
								rotate: 2,
							}}
							viewport={{ once: true }}
							className="p-6 bg-gray-800 rounded-xl shadow-lg border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300">
							<div className="flex items-center space-x-4">
								<div className="p-3 bg-yellow-400/20 rounded-full text-yellow-400 text-2xl">
									{gig.icon}
								</div>
								<div>
									<h3 className="text-lg sm:text-xl font-semibold text-white">
										{gig.title}
									</h3>
									<p className="text-gray-300 text-sm sm:text-base mt-1">
										{gig.description}
									</p>
								</div>
							</div>
							<div className="mt-4 flex justify-between items-center">
								<p className="text-yellow-400 font-bold text-lg">{gig.price}</p>
								<motion.button
									whileHover={{ scale: 1.1, rotate: 5 }}
									whileTap={{ scale: 0.9 }}
									className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full font-semibold shadow-md hover:shadow-xl transition-all">
									Order Now
								</motion.button>
							</div>
						</motion.div>
					))}
				</div>

				{/* Call-to-Action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					viewport={{ once: true }}
					className="mt-12 sm:mt-16 text-center">
					<p className="text-gray-300 text-base sm:text-lg mb-4">
						Need something custom? Let’s talk!
					</p>
					<motion.a
						href="#contact"
						whileHover={{
							scale: 1.1,
							boxShadow: "0 0 15px rgba(234, 179, 8, 0.7)",
						}}
						whileTap={{ scale: 0.95 }}
						className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
						Contact Me
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
};

export default Marketplace;
