import { motion } from "framer-motion";
import {
	FaGithub,
	FaLinkedin,
	FaFacebook,
	FaEnvelope,
	FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
	return (
		<section className="h-screen py-[200px] flex sm:justify-between items-center sm:flex-row flex-col    text-white px-6">
			<div className="sm:text-start text-center">
				<motion.h1
					className="text-xl md:text-2xl font-bold text-yellow-500"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					Hello! I am
				</motion.h1>
				<motion.h2
					className="text-2xl md:text-6xl font-bold mt-3 "
					data-aos="fade-up">
					Md Jillur Rahman
				</motion.h2>
				<motion.div
					className="mt-4 text-lg md:text-2xl font-medium"
					data-aos="fade-up"
					data-aos-delay="200">
					<p className="text-yellow-500 font-bold">Full Stack Developer</p>
					<ul className=" sm:flex gap-9 sm:list-disc text-white marker:text-yellow-500">
						<li className="list-none">Web Developer</li>
						<li>Programmer</li>
						<li>Software Engineer</li>
					</ul>
				</motion.div>
				<div className="mt-6 flex md:justify-start justify-center sm:space-x-6 space-x-3">
					<motion.a
						href="/path-to-your-resume.pdf"
						download
						className="px-6 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-500 transition"
						data-aos="fade-up"
						data-aos-delay="400">
						Get Resume
					</motion.a>
					<Link
						to="about"
						smooth={true}
						duration={500}
						data-aos="fade-up"
						data-aos-delay="600"
						className="px-6 py-2 border-2 border-yellow-500 cursor-pointer text-white rounded-md hover:bg-yellow-500  transition">
						<motion.p>About Me</motion.p>
					</Link>
				</div>
			</div>
			<div className=" text-3xl relative sm:mt-0 mt-8">
				<motion.p
					data-aos="fade-up"
					data-aos-delay="400"
					className="text-lg  font-semibold text-center sm:pb-0 pb-3 text-yellow-500 transform sm:rotate-90 sm:absolute sm:right-[-50px] sm:top-1/2">
					Follow Me
				</motion.p>
				<div className="flex sm:flex-col  sm:space-y-6 space-x-3">
					<motion.a
						data-aos="fade-up"
						data-aos-delay="500"
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-yellow-500 transition">
						<FaGithub />
					</motion.a>
					<motion.a
						data-aos="fade-up"
						data-aos-delay="600"
						href="https://wa.me/yourwhatsappnumber" // Replace with your WhatsApp link
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-yellow-500 transition">
						<FaWhatsapp />
					</motion.a>
					<motion.a
						data-aos="fade-up"
						data-aos-delay="700"
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-yellow-500 transition">
						<FaLinkedin />
					</motion.a>
					<motion.a
						data-aos="fade-up"
						data-aos-delay="800"
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-yellow-500 transition">
						<FaFacebook />
					</motion.a>
					<motion.a
						data-aos="fade-up"
						data-aos-delay="900"
						href="mailto:jillurahmanjibon@gmail.com"
						className="hover:text-yellow-500 transition">
						<FaEnvelope />
					</motion.a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
