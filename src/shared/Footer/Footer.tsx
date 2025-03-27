import { motion } from "framer-motion";

const Footer = () => {
	const currentYear = new Date().getFullYear();
const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",  
	});
};
	return (
		<footer className="relative py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
			{/* Animated Background Glow */}
			<motion.div
				className="absolute inset-0 bg-yellow-500 opacity-10 rounded-full blur-3xl"
				initial={{ scale: 0, x: "-50%", y: "-50%" }}
				animate={{ scale: 1.5, rotate: 360 }}
				transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
				style={{ width: "150%", height: "150%", top: "50%", left: "50%" }}
			/>

			{/* Floating Elements */}
			<motion.div
				animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
				transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
				className="absolute bottom-10 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-40 shadow-lg"
			/>
			<motion.div
				animate={{ y: [0, -25, 0], rotate: [0, -90, 0] }}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
				className="absolute bottom-16 right-16 w-3 h-3 bg-amber-500 rounded-full opacity-40 shadow-lg"
			/>
			<motion.div
				animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 2,
				}}
				className="absolute top-10 left-1/3 w-5 h-5 bg-yellow-400 rounded-full opacity-30 shadow-md"
			/>

			{/* Main Content */}
			<div className="max-w-7xl mx-auto relative z-10 text-center">
				{/* Animated Divider */}
				<motion.div
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-8 sm:mb-12"
				/>

				{/* Copyright Text */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
					viewport={{ once: true }}
					className="text-white">
					<p className="text-sm sm:text-base md:text-lg">
						© {currentYear} All Rights Reserved | Crafted with{" "}
						<motion.span
							animate={{ scale: [1, 1.2, 1] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="text-red-500">
							❤️
						</motion.span>{" "}
						by{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 font-bold drop-shadow-md">
							Jillur Rahman
						</span>
					</p>
					<motion.p
						whileHover={{ scale: 1.05, color: "#eab308" }}
						transition={{ duration: 0.3 }}
						className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4 inline-block bg-gray-700/50 px-3 py-1 rounded-full">
						Powered by React ⚛️ + TypeScript 📘 + Tailwind CSS 🌊
					</motion.p>
				</motion.div>

				{/* Back-to-Top Button */}
				<motion.a
					 onClick={scrollToTop}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					whileHover={{
						scale: 1.1,
						boxShadow: "0 0 15px rgba(234, 179, 8, 0.7)",
					}}
					whileTap={{ scale: 0.95 }}
					className="mt-6 sm:mt-8 inline-block cursor-pointer px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-full shadow-lg">
					Back to Top ↑
				</motion.a>
			</div>
		</footer>
	);
};

export default Footer;
