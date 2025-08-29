import { motion } from "framer-motion";
import picture from "../../assets/images/Jillurahman.png";
import { Link } from "react-scroll";
import jibonResume from "../../assets/Jillu Rahman Jibon.pdf";

const About = () => {
	return (
		<section
			className="py-16 sm:py-28 px-4 sm:px-6  relative overflow-hidden"
			id="about">
			{/* Animated Background Glow */}
			<motion.div
				className="absolute inset-0 bg-yellow-500 opacity-5 rounded-full blur-3xl"
				initial={{ scale: 0, x: "-50%", y: "-50%" }}
				animate={{ scale: 1.5, rotate: 360 }}
				transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
				style={{ width: "150%", height: "150%", top: "50%", left: "50%" }}
			/>

			<div className="max-w-7xl mx-auto relative z-10">
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
					viewport={{ once: true }}
					className="text-3xl sm:text-5xl text-center text-white font-bold mb-8 sm:mb-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse-slow">
					About Me
				</motion.h2>

				<div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
					{/* Left side: Info */}
					<motion.div
						className="w-full md:w-1/2 text-center md:text-left text-gray-200 text-base sm:text-lg"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, type: "spring" }}
						viewport={{ once: true }}>
						<motion.p
							className="mt-4 sm:mt-6 leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							viewport={{ once: true }}>
							Hello! I'm{" "}
							<span className="text-yellow-400 font-bold">Jillur Rahman</span>,
							a professional{" "}
							<span className="text-yellow-400">Full Stack Developer</span> with
							<span className="text-yellow-400"> 3+ years</span> of experience
							in crafting high-quality, scalable web applications. 🚀
						</motion.p>

						<motion.p
							className="mt-4 sm:mt-6 leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}>
							I specialize in modern web technologies like
							<span className="text-yellow-400">
								{" "}
								React.js, Next.js, Node.js, Express.js, TypeScript, Redux,
								MongoDB, MySQL,
							</span>{" "}
							and
							<span className="text-yellow-400"> WordPress. </span>
							My goal is to understand your unique requirements and deliver
							smart, reliable solutions tailored to your vision.
						</motion.p>

						<motion.p
							className="mt-4 sm:mt-6 leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							viewport={{ once: true }}>
							Whether it's building from scratch, fixing bugs, optimizing
							performance, or developing custom WordPress sites -{" "}
							<span className="text-yellow-400">I've got you covered.</span> I
							thrive on solving complex problems and learning cutting-edge tech
							to create scalable, efficient solutions.
						</motion.p>

						<motion.p
							className="mt-4 sm:mt-6 leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}>
							My mission? To spark creativity in projects and team up with
							brilliant minds. I’m hungry for growth, ready for challenges, and
							on the hunt for
							<span className="text-yellow-400">
								{" "}
								epic job opportunities
							</span>{" "}
							in web development!
						</motion.p>

						<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
							<motion.a
								href={jibonResume}
								download
								className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold animate-pulse"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}>
								Get Resume
							</motion.a>

							<motion.span
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
								className="px-6 py-3 border-2 cursor-pointer border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-white hover:shadow-xl transition-all font-semibold">
								<Link to="skills" smooth={true} duration={500}>
									<motion.p whileHover={{ scale: 1.1 }}>Skills</motion.p>
								</Link>
							</motion.span>
						</div>
					</motion.div>

					{/* Right side: Image */}
					<motion.div
						className="w-full md:w-1/2 flex justify-center items-center relative"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.3, type: "spring" }}
						viewport={{ once: true }}>
						<div className="relative p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-lg">
							<img
								src={picture}
								alt="Md Jillur Rahman"
								className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[520px] rounded-lg transform grayscale transition-all duration-1000 hover:scale-105 hover:grayscale-0 hover:shadow-2xl"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
