import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Skills = () => {
	const skills = {
		Web: [
			{ name: "React JS", percent: 90 },
			{ name: "Gatsby", percent: 90 },
			{ name: "Next.JS", percent: 75 },
			{ name: "Node JS", percent: 80 },
			{ name: "Express JS", percent: 90 },
			{ name: "MongoDB", percent: 90 },
			{ name: "MySQL", percent: 85 },
		],
		Others: [
			{ name: "React Native", percent: 85 },
			{ name: "Electron JS", percent: 90 },
			{ name: "Johnny Five", percent: 75 },
			{ name: "Svelte", percent: 70 },
			{ name: "Redux", percent: 80 },
			{ name: "GraphQL", percent: 80 },
			{ name: "Jest", percent: 65 },
			{ name: "Mocha", percent: 65 },
			{ name: "Cypress", percent: 65 },
			{ name: "SVG", percent: 80 },
		],
		Programming: [
			{ name: "JavaScript", percent: 90 },
			{ name: "C", percent: 90 },
			{ name: "C++", percent: 75 },
			{ name: "Python", percent: 50 },
			{ name: "Java", percent: 50 },
		],
		Tools: [
			{ name: "Git", percent: 90 },
			{ name: "Photoshop", percent: 75 },
			{ name: "Illustrator", percent: 70 },
			{ name: "Travis CI", percent: 85 },
			{ name: "Circle CI", percent: 80 },
			{ name: "AppVeyor", percent: 75 },
			{ name: "Docker", percent: 60 },
			{ name: "Kubernetes", percent: 30 },
		],
	};

	const skillsName = Object.keys(skills) as (keyof typeof skills)[];
	const [selectedSkill, setSelectedSkill] = useState<keyof typeof skills>(
		skillsName[0]
	);
	const selectedSkills = skills[selectedSkill];

	return (
		<div id="skill" className="py-20 px-6 bg-gray-800 text-white">
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
