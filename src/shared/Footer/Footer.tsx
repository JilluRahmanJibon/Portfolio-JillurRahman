const Footer = () => {
	return (
		<footer className="bg-[#293649] rounded-t-full text-white text-center py-4">
			<p className="text-sm">
				&copy; {new Date().getFullYear()} All Rights Reserved | Developed by{" "}
				<span className="text-yellow-400 font-semibold">Jillur Rahman</span>
			</p>
		</footer>
	);
};

export default Footer;
