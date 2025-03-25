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

	return (
		<AnimatePresence>
			{!hidden && (
				<motion.nav
					className={`w-full fixed top-0 left-0 z-50 text-white transition-all ${
						scrolling ? "bg-[#293649] shadow-md" : ""
					}`}
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -100, opacity: 0 }}
					transition={{ duration: 0.5, ease: "easeInOut" }}
				 >
					<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
						<a href="/">
							<img className="max-w-[100px]" src={logo} alt="Logo" />
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
							className="md:hidden focus:outline-none text-white text-xl">
							{menuOpen ? "✖" : "☰"}
						</button>
					</div>

					<AnimatePresence>
						{menuOpen && (
							<motion.div
								className="md:hidden flex flex-col bg-[#3c526d] p-6 shadow-lg space-y-4 text-white"
								initial={{ y: -50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -50, opacity: 0 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}>
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
			)}
		</AnimatePresence>
	);
};

export default Navbar;
