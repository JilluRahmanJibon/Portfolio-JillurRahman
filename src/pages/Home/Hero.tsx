import { motion } from "framer-motion";
import {
	FaGithub,
	FaLinkedin,
	FaFacebook,
	FaEnvelope,
	FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter, FaSquareUpwork } from "react-icons/fa6";
import { Link } from "react-scroll";
import jibonResume from "../../assets/Jillu Rahman Jibon.pdf";

const Hero = () => {
	const socialIcons = [
		{
			href: "https://www.upwork.com/freelancers/webdeveloperjillur?mp_source=share",
			icon: <FaSquareUpwork />,
			delay: 400,
		},
		{
			href: "https://github.com/JilluRahmanJibon",
			icon: <FaGithub />,
			delay: 500,
		},

		{ href: "https://wa.me/+8801910924868", icon: <FaWhatsapp />, delay: 600 },
		{
			href: "https://www.linkedin.com/in/jillurahmanjibon",
			icon: <FaLinkedin />,
			delay: 700,
		},
		{ href: "https://x.com/JR_JillurRahman", icon: <FaXTwitter />, delay: 800 },
		{
			href: "https://web.facebook.com/dev.JillurRahman",
			icon: <FaFacebook />,
			delay: 900,
		},
		{
			href: "mailto:jillurahmanjibon@gmail.com",
			icon: <FaEnvelope />,
			delay: 1000,
		},
	];

	return (
		<section className=" h-screen py-[200px] relative  text-white px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700  overflow-hidden ">
			<div className="max-w-7xl mx-auto flex sm:justify-between items-center sm:flex-row flex-col">
				{/* Animated Background Element */}
				<motion.div
					className="absolute inset-0 w-full h-full bg-yellow-500 opacity-10 rounded-full blur-3xl"
					initial={{ scale: 0, x: "-50%", y: "-50%" }}
					animate={{ scale: 1.5, rotate: 360 }}
					transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
					style={{ top: "50%", left: "50%" }}
				/>

				<div className="w-full sm:w-1/2 sm:text-left text-center z-10">
					<motion.h1
						className="text-xl md:text-2xl font-extrabold text-yellow-400 drop-shadow-md"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}>
						Hello! I am
					</motion.h1>
					<motion.h2
						className="text-4xl md:text-7xl font-extrabold mt-3 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.2 }}>
						Md Jillur Rahman
					</motion.h2>
					<motion.div
						className="mt-4 text-lg md:text-2xl font-medium"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<p className="text-yellow-400 font-bold tracking-wide">
							Full Stack Developer
						</p>
						<ul className="sm:flex gap-6 sm:list-disc text-white marker:text-yellow-400 mt-2">
							<li className="list-none">Programmer</li>
							<li>Web Developer</li>
							<li>Web Designer</li>
						</ul>
					</motion.div>
					<div className="mt-8 flex md:justify-start justify-center sm:space-x-6 space-x-3">
						<motion.a
							href={jibonResume}
							download
							className="px-8 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-all font-semibold animate-pulse"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}>
							Get Resume
						</motion.a>
						<motion.p
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.7 }}
							whileHover={{
								scale: 1.05,
								boxShadow: "0 0 15px rgba(234, 179, 8, 0.7)",
							}}
							whileTap={{ scale: 0.95 }}
							className="px-8 cursor-pointer py-3 border-2 border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-white hover:shadow-xl transition-all font-semibold">
							<Link to="about" smooth={true} duration={500}>
								<motion.span whileHover={{ scale: 1.1 }}>About Me</motion.span>
							</Link>
						</motion.p>
					</div>
				</div>

				<div className="w-full sm:w-auto text-2xl sm:text-3xl relative sm:mt-0 mt-8  flex flex-col sm:flex-row justify-center sm:justify-end items-center sm:items-start">
					<motion.p
						className="text-base whitespace-nowrap  sm:text-lg font-semibold text-yellow-400 transform sm:rotate-90 sm:absolute sm:right-[-50px] sm:top-1/2 text-center pb-4 sm:pb-5 tracking-wide order-1 sm:order-2"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						Follow Me
					</motion.p>
					<div className="flex z-20 flex-row sm:flex-col justify-center space-x-3 sm:space-x-0 sm:space-y-6 order-2 sm:order-1">
						{socialIcons.map((item, index) => (
							<motion.a
								key={index}
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-yellow-400 hover:shadow-lg transition-all"
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 0.5,
									delay: item.delay / 1000,
									type: "spring",
								}}
								whileHover={{ scale: 1.2, rotate: 10 }}>
								{item.icon}
							</motion.a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
