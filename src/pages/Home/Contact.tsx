import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef<HTMLFormElement | null>(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [done, setDone] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!form.current) {
			console.error("Form reference is not available.");
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
					// Reset form state
					setFormData({
						name: "",
						email: "",
						message: "",
					});
				},
				error => {
					console.log(error.text);
				}
			);
	};

	return (
		<section id="contact" className="py-24 px-5 md:px-20 text-white">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
				{/* Left Side - Contact Info */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="space-y-5">
					<h2 className="sm:text-4xl text-3xl text-center font-bold text-yellow-400 leading-tight">
						Let's Work Together
					</h2>

					<div>
						<p className="text-gray-300 font-medium">📧 Mail</p>
						<a
							href="mailto:jillurahman@gmail.com"
							className="text-lg font-semibold hover:text-yellow-400">
							jillurahman@gmail.com
						</a>
					</div>

					<div>
						<p className="text-gray-300 font-medium">📍 Address</p>
						<p className="text-lg font-semibold">
							Dewanganj, Jamalpur, Bangladesh
						</p>
					</div>

					<div>
						<p className="text-gray-300 font-medium">📞 Phone</p>
						<a
							href="tel:01910924868"
							className="text-lg font-semibold hover:text-yellow-400">
							+88 01910-924868
						</a>
					</div>
				</motion.div>

				{/* Right Side - Contact Form */}
				<motion.form
					ref={form}
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					onSubmit={handleSubmit}
					className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-5">
					<h3 className="text-2xl font-semibold text-center text-yellow-400">
						Send a Message
					</h3>

					{/* Name Field */}
					<div>
						<label className="text-sm font-medium block mb-1">Your Name</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Enter your name"
							required
							className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
						/>
					</div>

					{/* Email Field */}
					<div>
						<label className="text-sm font-medium block mb-1">Your Email</label>
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							placeholder="Enter your email"
							required
							className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"
						/>
					</div>

					{/* Message Field */}
					<div>
						<label className="text-sm font-medium block mb-1">Message</label>
						<textarea
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows={4}
							placeholder="Write your message..."
							required
							className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400"></textarea>
					</div>

					{/* Submit Button */}

					{done ? (
						<>
							<p className="text-teal-600 text-center w-full bg-gray-200    font-bold py-3 rounded-md transition-all mt-4">
								Thanks for contacting us!
							</p>
						</>
					) : (
						<>
							<button
								type="submit"
								className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md transition-all">
								Send Message
							</button>
						</>
					)}
				</motion.form>
			</div>
		</section>
	);
};

export default Contact;
