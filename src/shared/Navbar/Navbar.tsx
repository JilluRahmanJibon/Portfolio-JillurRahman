import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolling(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	const handleResumeDownload = () => {
		const link = document.createElement("a");
		link.href = "/path-to-your-resume.pdf";
		link.download = "Md_Jillu_Rahman_Resume.pdf";
		link.click();
	};

	return (
		<motion.nav
			className={`w-full fixed top-0 left-0 z-50 text-white transition-all duration-300 ${
				scrolling && "bg-[#293649] shadow-md "
			}`}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			data-aos="fade-down">
			<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
				<a href="/">
					<img className="max-w-[100px]" src={logo} alt="" />
				</a>

				<div className="hidden md:flex items-center space-x-6">
					{[
						{ to: "about", label: "About" },
						{ to: "skills", label: "Skill" },
						{ to: "portfolio", label: "Portfolio" },
						{ to: "contact", label: "Contact" },
					].map(item => (
						<Link
							key={item.to}
							to={item.to}
							smooth={true}
							duration={500}
							className="hover:text-yellow-500 transition cursor-pointer">
							{item.label}
						</Link>
					))}

					<button
						onClick={handleResumeDownload}
						className="px-5 py-2 border-2 border-yellow-500 cursor-pointer text-white rounded-md hover:bg-yellow-500 hover:text-white transition">
						Resume
					</button>
				</div>

				<button
					onClick={handleMenuToggle}
					className={`md:hidden focus:outline-none text-white text-xl`}>
					{menuOpen ? "✖" : "☰"}
				</button>
			</div>

			{/* Animate Presence for menu opening and closing */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						className="md:hidden flex flex-col bg-[#3c526d] p-6 shadow-lg space-y-4 text-white"
						initial={{ translateY: "-100%" }}
						animate={{ translateY: "0%" }}
						exit={{ translateY: "-100%" }}
						transition={{ duration: 0.3 }}>
						{[
							{ to: "about", label: "About" },
							{ to: "skills", label: "Skill" },
							{ to: "portfolio", label: "Portfolio" },
							{ to: "contact", label: "Contact" },
						].map(item => (
							<Link
								key={item.to}
								to={item.to}
								smooth={true}
								duration={500}
								className="hover:text-yellow-500 transition">
								{item.label}
							</Link>
						))}

						<button
							onClick={handleResumeDownload}
							className="px-5 py-2 border border-yellow-500 text-yellow-500 rounded-xl hover:bg-yellow-500 hover:text-white transition">
							Resume
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};

export default Navbar;
