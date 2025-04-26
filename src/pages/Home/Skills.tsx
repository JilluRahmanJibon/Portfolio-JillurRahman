import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Skills = () => {
	const skills = {
		Web: [
			{ name: "JavaScript", percent: 85 },
			{ name: "TypeScript", percent: 70 },
			{ name: "React JS", percent: 95 },
			{ name: "Next JS", percent: 70 },
			{ name: "Redux", percent: 75 },
			{ name: "Node JS", percent: 87 },
			{ name: "Express JS", percent: 92 },
			{ name: "MongoDB", percent: 97 },
			{ name: "MySQL", percent: 80 },
			{ name: "Firebase", percent: 87 },
			{ name: "JWT", percent: 94 },
		],
		"CSS Framework": [
			{ name: "Tailwind CSS", percent: 97 },
			{ name: "Bootstrap", percent: 95 },
			{ name: "Foundation", percent: 80 },
			{ name: "Ant Design", percent: 85 },
			{ name: "Material UI", percent: 80 },
			{ name: "AOS", percent: 90 },
			{ name: "Framer Motion", percent: 83 },
			{ name: "Swiper", percent: 80 },
		],
		Tools: [
			{ name: "Git", percent: 96 },
			{ name: "PhotoShop", percent: 75 },
			{ name: "Figma", percent: 90 },
			{ name: "Vercel", percent: 95 },
			{ name: "Netlify", percent: 85 },
		],
	};

	const skillsName = Object.keys(skills) as (keyof typeof skills)[];
	const [selectedSkill, setSelectedSkill] = useState<keyof typeof skills>(
		skillsName[0]
	);
	const selectedSkills = skills[selectedSkill];

	return (
		<section
			id="skills"
			className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
			{/* Animated Background Glow */}
			<motion.div
				className="absolute inset-0 bg-yellow-500 opacity-10 rounded-full blur-3xl"
				initial={{ scale: 0, x: "-50%", y: "-50%" }}
				animate={{ scale: 1.5, rotate: 360 }}
				transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
				style={{ width: "150%", height: "150%", top: "50%", left: "50%" }}
			/>

			<div className="max-w-7xl mx-auto text-center relative z-10">
				<motion.h2
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
					viewport={{ once: true }}
					className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse-slow">
					My Skills
				</motion.h2>

				{/* Skill Category Navigation */}
				<ul className="grid grid-cols-2 sm:flex sm:justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
					{skillsName.map(name => (
						<motion.li
							whileTap={{ scale: 0.95 }}
							whileHover={{
								scale: 1.1,
								boxShadow: "0 0 15px rgba(234, 179, 8, 0.7)",
							}}
							onClick={() => setSelectedSkill(name)}
							className={`cursor-pointer px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base font-semibold ${
								name === selectedSkill
									? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg"
									: "bg-gray-700 border-2 border-yellow-400 text-yellow-400 hover:bg-gray-600"
							}`}
							key={name}>
							{name}
						</motion.li>
					))}
				</ul>

				{/* Skill Progress Bars */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{selectedSkills.map(({ name, percent }, index) => (
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
							viewport={{ once: true }}
							key={name}
							className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-yellow-500/20">
							<div className="flex justify-between items-center mb-3">
								<h4 className="text-lg sm:text-xl font-semibold text-yellow-400">
									{name}
								</h4>
								<p className="text-white font-bold">
									<CountUp end={percent} duration={2} />%
								</p>
							</div>
							<div className="relative">
								<div className="bg-gray-600 rounded-full h-3 w-full overflow-hidden">
									<motion.div
										initial={{ width: "0%" }}
										animate={{ width: `${percent}%` }}
										transition={{ duration: 2, ease: "easeOut" }}
										className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.7)]"
									/>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
