import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import logo from "../../assets/logo/logo.png";
import jibonResume from "../../assets/Jillu Rahman Jibon.pdf";

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		let prevScrollPos = window.scrollY;

		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			setScrolling(currentScrollPos > 50);
			setHidden(prevScrollPos < currentScrollPos && currentScrollPos > 100);
			prevScrollPos = currentScrollPos;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	const handleResumeDownload = () => {
		const link = document.createElement("a");
		link.href = jibonResume;
		link.download = "Md Jillur Rahman.pdf";
		link.click();
	};

	const navItems = [
		{ to: "about", label: "About" },
		{ to: "skills", label: "Skill" },
		{ to: "portfolio", label: "Portfolio" },
		{ to: "contact", label: "Contact" },
	];

	return (
		<AnimatePresence>
			{!hidden && (
				<motion.nav
					className={`w-full fixed top-0 left-0 z-50 text-white transition-all ${
						scrolling
							? "bg-gradient-to-r from-[#293649] via-[#1a2634] to-[#3c526d] shadow-[0_0_15px_rgba(234,179,8,0.3)]"
							: "bg-transparent"
					}`}
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -100, opacity: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}>
					<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
						<a href="/">
							<motion.img
								className="max-w-[100px]"
								src={logo}
								alt="Logo"
								initial={{ scale: 0, rotate: -180 }}
								animate={{ scale: 1, rotate: 0 }}
								transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
							/>
						</a>

						<motion.div
							className="hidden md:flex items-center space-x-6"
							initial="hidden"
							animate="visible"
							variants={{
								hidden: { opacity: 0 },
								visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
							}}>
							{navItems.map(item => (
								<motion.div
									key={item.to}
									variants={{
										hidden: { y: -20, opacity: 0 },
										visible: { y: 0, opacity: 1 },
									}}>
									<Link
										to={item.to}
										smooth={true}
										duration={500}
										activeClass="text-yellow-400 border-b-2 border-yellow-400"
										className="hover:text-yellow-400 hover:shadow-[0_0_10px_rgba(234,179,8,0.7)] transition cursor-pointer text-lg font-semibold">
										{item.label}
									</Link>
								</motion.div>
							))}
							<motion.button
								onClick={handleResumeDownload}
								className="px-6 py-2 border-2 border-yellow-500 text-white rounded-full hover:bg-yellow-600 hover:shadow-[0_0_15px_rgba(234,179,8,0.8)] transition animate-pulse-slow"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								Resume
							</motion.button>
						</motion.div>

						<button
							onClick={handleMenuToggle}
							className="md:hidden focus:outline-none text-white text-3xl">
							<motion.div
								animate={
									menuOpen
										? { rotate: 90, scale: 1.1 }
										: { rotate: 0, scale: 1 }
								}
								transition={{ duration: 0.3 }}>
								{menuOpen ? "✖" : "☰"}
							</motion.div>
						</button>
					</div>

					<AnimatePresence>
						{menuOpen && (
							<>
								<motion.div
									className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									onClick={handleMenuToggle}
								/>
								<motion.div
									className="md:hidden flex flex-col bg-gradient-to-b from-[#3c526d] to-[#1a2634] p-6 shadow-[0_0_20px_rgba(234,179,8,0.5)] space-y-6 text-white absolute top-full left-0 w-full z-50"
									initial={{ y: -50, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									exit={{ y: -50, opacity: 0 }}
									transition={{ duration: 0.3, ease: "easeInOut" }}>
									{navItems.map(item => (
										<Link
											key={item.to}
											to={item.to}
											smooth={true}
											duration={500}
											className="hover:text-yellow-400 hover:shadow-[0_0_10px_rgba(234,179,8,0.7)] transition text-xl font-bold"
											onClick={handleMenuToggle}>
											{item.label}
										</Link>
									))}
									<button
										onClick={handleResumeDownload}
										className="px-6 py-3 border-2 border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-600 hover:text-white hover:shadow-[0_0_15px_rgba(234,179,8,0.8)] transition animate-pulse-slow">
										Resume
									</button>
								</motion.div>
							</>
						)}
					</AnimatePresence>
				</motion.nav>
			)}
		</AnimatePresence>
	);
};

export default Navbar;
