import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Skills = () => {
	const skills = {
		Web: [
			{ name: "JavaScript", percent: 80 },
			{ name: "TypeScript", percent: 60 },
			{ name: "React JS", percent: 90 },
			{ name: "Next JS", percent: 70 },
			{ name: "Redux", percent: 50 },
			{ name: "Node JS", percent: 80 },
			{ name: "Express JS", percent: 90 },
			{ name: "MongoDB", percent: 90 },
			{ name: "MySQL", percent: 85 },
			{ name: "Firebase", percent: 75 },
			{ name: "JWT", percent: 80 },
		],
		"CSS Framework": [
			{ name: "Tailwind CSS", percent: 90 },
			{ name: "Bootstrap", percent: 85 },
			{ name: "Foundation", percent: 80 },
			{ name: "Ant Design", percent: 85 },
			{ name: "Material UI", percent: 85 },
			{ name: "AOS (Animation Library)", percent: 80 },
			{ name: "Framer Motion (Animation Library)", percent: 90 },
			{ name: "Swiper (UI Library)", percent: 80 },
		],
		Tools: [
			{ name: "Git", percent: 90 },
			{ name: "PhotoShop", percent: 75 },
			{ name: "Figma", percent: 80 },
			{ name: "Vercel", percent: 85 },
			{ name: "Netlify", percent: 85 },
		],
	};

	const skillsName = Object.keys(skills) as (keyof typeof skills)[];
	const [selectedSkill, setSelectedSkill] = useState<keyof typeof skills>(
		skillsName[0]
	);
	const selectedSkills = skills[selectedSkill];

	return (
		<div id="skills" className="py-24 px-6 bg-gray-800 text-white">
			<div className="container mx-auto text-center">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-3xl font-semibold mb-8">
					My Skills
				</motion.h2>
				<div className="skills">
					{/* Skill Category Navigation */}
					<ul className="skill-nav sm:flex sm:justify-center  grid grid-cols-2 gap-2 mb-8">
						{skillsName.map(name => (
							<motion.li
								whileTap={{ scale: 0.95 }}
								whileHover={{ scale: 1.1 }}
								onClick={() => setSelectedSkill(name)}
								className={`cursor-pointer px-6 py-2 mx-2 rounded-lg transition-all duration-300 ${
									name === selectedSkill
										? "bg-yellow-500 text-white"
										: "bg-[#293649] border-2 border-yellow-500"
								}`}
								key={name}>
								{name}
							</motion.li>
						))}
					</ul>

					{/* Skill Progress Bars */}
					<div className="skill grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{selectedSkills.map(({ name, percent }) => (
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, ease: "easeOut" }}
								viewport={{ once: true }}
								key={name}
								data-aos="fade-up"
								className="card bg-[#293649] p-6 rounded-lg shadow-lg">
								<div className="flex justify-between mb-2">
									<h4 className="text-xl font-medium mb-2">{name}</h4>
									<p>
										<CountUp end={percent} duration={2} />%
									</p>
								</div>
								<div className="relative">
									<div className="progress-bar bg-[#20242a] rounded-full h-3 w-full">
										<motion.div
											initial={{ width: "0%" }}
											animate={{ width: `${percent}%` }}
											transition={{ duration: 2 }}
											className="progress-fill bg-yellow-500 rounded-full h-3"
										/>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
