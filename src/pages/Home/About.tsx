import { motion } from "framer-motion";
import picture from "../../assets/images/jibon.jpg";
import { Link } from "react-scroll";

const About = () => {
	return (
		<section className="py-28 px-6 " id="about">
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-3xl text-center text-white font-semibold mb-8">
				My Skills
			</motion.h2>

			<div className="mx-auto flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0">
				{/* Left side: Info with rotation effect */}
				<motion.div
					className="text-center text-md text-gray-200 md:text-left w-full lg:w-1/2"
					initial={{ opacity: 0, rotate: -15 }}
					animate={{ opacity: 1, rotate: 0 }}
					transition={{ duration: 1 }}>
					<div>
						<motion.p className="mt-6" data-aos="fade-up" data-aos-delay="100">
							Hello! I'm Jillur Rahman, a passionate Jr. Full Stack Developer. I
							specialize in developing web applications using modern
							technologies like JavaScript, TypeScript, Redux, and Next.js. With
							strong frontend skills in HTML5, CSS3, and JavaScript, I’m
							well-versed in popular libraries and frameworks like React.js,
							Bootstrap, and Tailwind CSS.
						</motion.p>

						<motion.p className="mt-6" data-aos="fade-up" data-aos-delay="200">
							I have hands-on experience with backend development, utilizing
							tools like Express.js, MySQL, and MongoDB, along with RESTful API
							development. I enjoy learning new technologies and solving complex
							problems to build scalable and efficient web applications.
						</motion.p>

						<motion.p className="mt-6" data-aos="fade-up" data-aos-delay="300">
							My goal is to contribute to projects that require creative
							solutions and to collaborate with talented teams. I’m always eager
							to grow and take on new challenges, and I’m open to exciting job
							opportunities that align with my skills and passion for web
							development.
						</motion.p>

						<div className="mt-8 flex justify-center md:justify-start space-x-4">
							<motion.a
								href="/path-to-your-resume.pdf"
								download
								data-aos="fade-up"
								data-aos-delay="400"
								className="px-6 py-3 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-500 transition">
								Get Resume
							</motion.a>

							<Link
								to="skills"
								smooth={true}
								duration={500}
								data-aos="fade-up"
								data-aos-delay="700"
								className="px-6 py-2 border-2 border-yellow-500 cursor-pointer text-white rounded-md hover:bg-yellow-500  transition">
								<motion.p>Skills</motion.p>
							</Link>
						</div>
					</div>
				</motion.div>

				{/* Right side: Image with smaller size */}
				<motion.div
					className="relative group w-full md:w-1/2 flex justify-center items-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.3 }}>
					{/* Portfolio Image */}
					<img
						src={picture}
						alt="Md Jillur Rahman"
						className="w-[320px] rounded-lg transform scale-95 grayscale transition-all duration-1000 group-hover:scale-100 group-hover:grayscale-0"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
