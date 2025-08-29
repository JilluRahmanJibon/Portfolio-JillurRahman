import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import {
	FaGithub,
	FaLinkedin,
	FaFacebook,
	FaEnvelope,
	FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
	const form = useRef<HTMLFormElement | null>(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [done, setDone] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		if (!form.current) {
			console.error("Form reference is not available.");
			setIsSubmitting(false);
			return;
		}

		emailjs
			.sendForm(
				"service_fw1aj2r",
				"template_h866lwi",
				form.current,
				"w1lyvILBFbG3awpdD"
			)
			.then(
				result => {
					console.log(result.text);
					setDone(true);
					form.current?.reset();
					setFormData({ name: "", email: "", message: "" });
					setIsSubmitting(false);
					setTimeout(() => setDone(false), 5000);
				},
				error => {
					console.log(error.text);
					setIsSubmitting(false);
				}
			);
	};

	const socialIcons = [
		{
			href: "https://github.com/JilluRahmanJibon",
			icon: <FaGithub />,
			delay: 0.5,
		},
		{ href: "https://wa.me/+8801853239027", icon: <FaWhatsapp />, delay: 0.6 },
		{
			href: "https://www.linkedin.com/in/jillurahmanjibon",
			icon: <FaLinkedin />,
			delay: 0.7,
		},
		{ href: "https://x.com/JR_JillurRahman", icon: <FaXTwitter />, delay: 0.8 },
		{
			href: "https://web.facebook.com/dev.JillurRahman",
			icon: <FaFacebook />,
			delay: 0.9,
		},
		{
			href: "mailto:jillurahmanjibon@gmail.com",
			icon: <FaEnvelope />,
			delay: 1.0,
		},
	];

	return (
		<section
			id="contact"
			className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
			{/* Animated Background Glow */}
			<motion.div
				className="absolute inset-0 bg-yellow-500 opacity-10 rounded-full blur-3xl"
				initial={{ scale: 0, x: "-50%", y: "-50%" }}
				animate={{ scale: 1.5, rotate: 360 }}
				transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
				style={{ width: "150%", height: "150%", top: "50%", left: "50%" }}
			/>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
					viewport={{ once: true }}
					className="text-center mb-12 sm:mb-16">
					<h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse-slow">
						Let's Connect
					</h2>
					<motion.div
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						transition={{ duration: 1, delay: 0.3 }}
						className="w-32 sm:w-40 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"
					/>
					<p className="text-gray-300 max-w-xl mx-auto mt-4 text-base sm:text-lg">
						Got a project in mind? Send me a message, and let’s build something
						extraordinary together!
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8 sm:gap-12">
					{/* Left Side - Contact Cards */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-6 sm:space-y-8">
						{/* Email Card */}
						<motion.div
							whileHover={{
								y: -5,
								boxShadow: "0 0 15px rgba(234, 179, 8, 0.5)",
							}}
							className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-lg border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300">
							<div className="flex items-center space-x-4">
								<div className="p-3 bg-yellow-400/20 rounded-full text-yellow-400">
									<FiMail className="text-xl sm:text-2xl" />
								</div>
								<div>
									<p className="text-gray-300 font-medium">Email</p>
									<a
										href="mailto:jillurahmanjibon@gmail.com"
										className="text-base sm:text-lg font-semibold text-yellow-400 hover:text-yellow-500 transition-colors">
										jillurahmanjibon@gmail.com
									</a>
								</div>
							</div>
						</motion.div>

						{/* Location Card */}
						<motion.div
							whileHover={{
								y: -5,
								boxShadow: "0 0 15px rgba(234, 179, 8, 0.5)",
							}}
							className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-lg border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300">
							<div className="flex items-center space-x-4">
								<div className="p-3 bg-yellow-400/20 rounded-full text-yellow-400">
									<FiMapPin className="text-xl sm:text-2xl" />
								</div>
								<div>
									<p className="text-gray-300 font-medium">Location</p>
									<p className="text-base sm:text-lg font-semibold text-white">
										Dewanganj, Jamalpur, Bangladesh
									</p>
								</div>
							</div>
						</motion.div>

						{/* Phone Card */}
						<motion.div
							whileHover={{
								y: -5,
								boxShadow: "0 0 15px rgba(234, 179, 8, 0.5)",
							}}
							className="p-4 sm:p-6 bg-gray-800 rounded-xl shadow-lg border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300">
							<div className="flex items-center space-x-4">
								<div className="p-3 bg-yellow-400/20 rounded-full text-yellow-400">
									<FiPhone className="text-xl sm:text-2xl" />
								</div>
								<div>
									<p className="text-gray-300 font-medium">Phone (WhatsApp)</p>
									<a
										href="tel:+8801853239027"
										className="text-base sm:text-lg font-semibold text-yellow-400 hover:text-yellow-500 transition-colors">
										+88 01853-239027
									</a>
								</div>
							</div>
						</motion.div>

						{/* Social Links */}
						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="mt-8 sm:mt-12">
							<h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-yellow-400">
								Find Me On
							</h3>
							<div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
								{socialIcons.map((item, index) => (
									<motion.a
										key={index}
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										initial={{ opacity: 0, scale: 0 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5, delay: item.delay }}
										whileHover={{
											y: -5,
											scale: 1.2,
											boxShadow: "0 0 10px rgba(234, 179, 8, 0.7)",
										}}
										whileTap={{ scale: 0.9 }}
										className="p-3 sm:p-4 bg-gray-700 rounded-full text-white hover:bg-yellow-500 hover:text-gray-900 transition-all">
										{item.icon}
									</motion.a>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* Right Side - Contact Form */}
					<motion.form
						ref={form}
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						onSubmit={handleSubmit}
						className="bg-gray-800/80 p-6 sm:p-8 rounded-xl shadow-xl space-y-6 border border-yellow-500/20 backdrop-blur-md">
						<h3 className="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
							Send a Message
						</h3>
						<p className="text-gray-400 text-center text-sm sm:text-base mb-6">
							I’ll get back to you within 24 hours!
						</p>

						{/* Name Field */}
						<div className="relative group">
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full p-4 bg-gray-700/50 border border-gray-600 text-white focus:border-yellow-400 focus:outline-none rounded-lg placeholder-gray-400 transition-all duration-300"
								placeholder="Your Name"
							/>
							<div className="absolute inset-0 border-2 border-yellow-400 rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none"></div>
						</div>

						{/* Email Field */}
						<div className="relative group">
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full p-4 bg-gray-700/50 border border-gray-600 text-white focus:border-yellow-400 focus:outline-none rounded-lg placeholder-gray-400 transition-all duration-300"
								placeholder="Your Email"
							/>
							<div className="absolute inset-0 border-2 border-yellow-400 rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none"></div>
						</div>

						{/* Message Field */}
						<div className="relative group">
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								rows={5}
								required
								className="w-full p-4 bg-gray-700/50 border border-gray-600 text-white focus:border-yellow-400 focus:outline-none rounded-lg placeholder-gray-400 transition-all duration-300 resize-none"
								placeholder="Your Message"
							/>
							<div className="absolute inset-0 border-2 border-yellow-400 rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none"></div>
						</div>

						{done ? (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-center p-4 bg-teal-900/50 border border-teal-400 rounded-lg shadow-lg">
								<p className="text-teal-300 font-medium">
									🎉 Message sent successfully! I’ll reply soon.
								</p>
							</motion.div>
						) : (
							<motion.button
								type="submit"
								disabled={isSubmitting}
								whileHover={{
									scale: 1.05,
									boxShadow: "0 0 15px rgba(234, 179, 8, 0.7)",
								}}
								whileTap={{ scale: 0.95 }}
								className={`w-full py-4 px-6 rounded-full font-bold flex items-center justify-center space-x-2 transition-all ${
									isSubmitting
										? "bg-yellow-600 cursor-not-allowed"
										: "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-lg"
								}`}>
								{isSubmitting ? (
									<>
										<svg
											className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24">
											<circle
												className="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
											/>
											<path
												className="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											/>
										</svg>
										<span>Sending...</span>
									</>
								) : (
									<>
										<FiSend className="text-lg" />
										<span>Send Message</span>
									</>
								)}
							</motion.button>
						)}
					</motion.form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
